#defineHAVE_GETOPT_LONG1 //
//Filename:scavenger.c
//
#defineVersion"002"
//
//Edit date:26-Jun-2001
//
//Facility:Forensics/system recovery
//
//Abstract:This program attempts to extract files from a
//path by examining the first few bytes of each
//block. If a match is found, the specified
//number of blocks are copied to the specified
//output path.
//
//Environment:Unix
//
//Author:Steven L. Edwards
//sedwards@sedwards.com
//
//Copyright:(c) 2001 Steven L. Edwards
//
//Warning:While you are free to use this program, in
//whole or in part, there is absolutely no
//warranty of any kind. Like most system
//level utilities, the capacity for harm may
//exceed the capacity for good. So there.
//
//Example:First off, keep in mind what we are doing --
//we're reading a stream of blocks from a device
//or file (which is probably a "dd" of a device).
//
//There are no filenames and there is no way to
//re-assemble a file with discontiguous blocks.
//As files are created and deleted there will be
//valid and invalid file blocks intermixed. Trial
//and error when using the "seek" and "reseek"
//options will affect the number of valid and
//invalid files recovered.
//
//Likewise, the more liberal your "magic," the
//more invalid files you will find. Conversely,
//the more stringent your "magic," the more
//valid files you may miss.
//
//MP3's are difficult to recover because there
//is so much variation in the "magic bytes" and
//the "magic bytes" are repeated in the file.
//
//Here's what I would use for a command line and
//why:
//
//scavenger\
//--count=6000\
//--input=/dev/hdb1\
//--magic="0xff 0xf2/0xf6 0x80/0xc5 4/7"\
//--output=/tmp/z\
//--reseek=n\
//--suffix=.mp3\
//
//count=6000
//
//This will create a candidate file with a
//duration of about 3 minutes, assuming a
//128kbit stream. If you miss the ending of
//"your favorite song" you can try again using
//"seek," "query," and a larger count.
//
//magic="0xff 0xf2/0xf6 0x80/0xc5 4/7"
//
//This "magic" string looks at the first 4 bytes
//of each block. The magic and mask values were
//derived by looking at thousands of mp3
//files. Note that not all mp3 creators use the
//same values -- I have hundreds that start with
//"0x49 0x44 0x33 0x3"
//
//output=/tmp/z
//
//I like to include an unlikely letter ("z")
//which will become the first letter of the
//recovered file name to make it easier to
//delete them as I fiddle with the other command
//line options.
//
//reseek=n
//
//(reseek=y is the default value)
//Normally, scavenger will extract a "block
//stream" of count blocks. It will then
//reposition to the block following the
//starting block of the just recovered
//file. It does this so a valid file preceeded
//by an invalid fragment will not be missed.
//If this results in too many "false positives"
//reseek=n will not reposition the block
//stream.
//
//Modified by
//
//00001-Jun-2001SLECreate.
//00122-Jun-2001SLEAdd parse_magic().
//Add usage().
//Add --reseek.
//Trap ^C.
//Comments, comments, comments.
//00226-Jun-2001SLEAdd tests for getopt_long().
//
// Please email any modifications or war stories to
sedwards@sedwards.com ////////////////////////////////////////|///////////////////////////////////
///
// ANSI include files
////////////////////////////////////////|///////////////////////////////////
///
#include<ctype.h>
#include<errno.h>
#include<signal.h>
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h> ////////////////////////////////////////|///////////////////////////////////
///
// Operating system include files
////////////////////////////////////////|///////////////////////////////////
///
#include<syslog.h>
#ifdefHAVE_GETOPT_LONG
#define_GNU_SOURCE
#include<getopt.h>
#else
#include<unistd.h>
#endif// HAVE_GETOPT_LONG ////////////////////////////////////////|///////////////////////////////////
///
// Local include files
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// Defines
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// Macros
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// Typedefs
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// Global constants
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// Global variables
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// Global functions
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// External constants
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// External variables
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// External functions
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// Static constants
////////////////////////////////////////|///////////////////////////////////
/// ////////////////////////////////////////|///////////////////////////////////
///
// Static variables
////////////////////////////////////////|///////////////////////////////////
///
staticintseek; ////////////////////////////////////////|///////////////////////////////////
///
// Static functions
////////////////////////////////////////|///////////////////////////////////
///
staticvoidcleanup
(
  void
); staticintparse_magic
(
  char*input
, unsigned char*magic
, unsigned char*mask
); staticvoidusage
(
  void
); ////////////////////////////////////////|///////////////////////////////////
///
// Main function
////////////////////////////////////////|///////////////////////////////////
///
intmain
(
  intargc
, char**argv
)
{
autounsigned charblock[512];
autointcommand_line_errors;
autointcount;
autoFILE*input_file_pointer;
autochar*input_pointer;
autounsigned charmagic[512];
autointmagic_length;
autounsigned charmask[512];
autocharoptchar;
autoFILE*output_file_pointer;
autochar*output_pointer;
autointquery;
autointreseek;
autochar*suffix_pointer; #ifdefHAVE_GETOPT_LONG
staticstruct optionlongopts[]
= {
  {"count", required_argument, 0, 'c'}
, {"help", no_argument, 0, 'h'}
, {"input", required_argument, 0, 'i'}
, {"magic", required_argument, 0, 'm'}
, {"output", required_argument, 0, 'o'}
, {"query", no_argument, 0, 'q'}
, {"reseek", required_argument, 0, 'r'}
, {"seek", required_argument, 0, 'k'}
, {"suffix", required_argument, 0, 's'}
, {0, 0, 0, 0}
};
autointoption_index;
#endif// HAVE_GETOPT_LONG // process the command line
memset(magic, 0, sizeof(magic));
memset(mask, 0, sizeof(mask));
count = query = seek = 0;
reseek = 1;
input_pointer = output_pointer = suffix_pointer = 0;
while(EOF != (optchar =
#ifdefHAVE_GETOPT_LONG
getopt_long(
#else
getopt(
#endif// HAVE_GETOPT_LONG
  argc
, argv
, "c:hi:k:m:o:qr:s:"
#ifdefHAVE_GETOPT_LONG
, longopts
, &option_index
#endif// HAVE_GETOPT_LONG
)))
{
switch(optchar)
{
// count
case 'c':
count = atoi(optarg);
break;
// help
case '?':
case 'h':
default:
usage();
exit(EXIT_FAILURE);
break;
// input
case 'i':
input_pointer = optarg;
break;
// magic
case 'm':
magic_length
= parse_magic(optarg, magic, mask);
break;
// output
case 'o':
output_pointer = optarg;
break;
// query
case 'q':
++query;
break;
// reseek
case 'r':
reseek = tolower(*optarg) != 'n';
break;
// seek
case 'k':
seek = atoi(optarg);
break;
// suffix
case 's':
suffix_pointer = optarg;
break;
}
} // validate the command line arguments
command_line_errors = 0;
if(0 == count)
{
puts("\tPlease specify how many 512 byte blocks to copy");
++command_line_errors;
}
if(0 == input_pointer)
{
puts("\tPlease specify an input path");
++command_line_errors;
}
if(0 == magic_length)
{
puts("\tPlease specify the magic byte pattern to match");
++command_line_errors;
}
if(0 == output_pointer)
{
puts("\tSpecifying an output path is recommended");
}
if(0 == suffix_pointer)
{
puts("\tSpecifying a suffix is recommended");
}
if(0 != command_line_errors)
{
#ifdefHAVE_GETOPT_LONG
puts("\t(try --help)");
#else
puts("\t(try -h)");
#endif// HAVE_GETOPT_LONG
exit(EXIT_FAILURE);
} // open the input file
input_file_pointer = fopen(input_pointer, "rb");
if(0 == input_file_pointer)
{
perror("Couldn't open input file");
exit(EXIT_FAILURE);
} // position to the right spot
if(0 < seek)
{
fseek(input_file_pointer, 512 * (seek - 1), SEEK_SET);
} // start scavenging
signal(SIGINT, (void (*)(int))(int)cleanup);
while(1 == fread(block, sizeof(block), 1, input_file_pointer))
{
autointindex;
// compare magic
for(index = 0; index < magic_length; ++index)
{
if((block[index] & mask[index])
!= magic[index])
{
break;
}
}
// if the magic matched
if(index == magic_length)
{
autointblocks;
autocharname[512];
autofpos_toffset;
// remember offset so we can reseek
fgetpos(input_file_pointer, &offset);
// build the output file name
memset(name, 0, sizeof(name));
if(0 != output_pointer)
{
strcpy(name, output_pointer);
}
sprintf(name + strlen(name), "%d", seek);
if(0 != suffix_pointer)
{
strcat(name, suffix_pointer);
}
// query if requested
if(0 == query)
{
puts(name);
}
else
{
autochartemp[512];
printf("%s? ", name);
fgets(temp, sizeof(temp), stdin);
if('y' != tolower(*temp))
{
++seek;
continue;
}
}
// create the output file
output_file_pointer = fopen(name, "wb");
for(blocks = 0; blocks < count; ++blocks)
{
fwrite(block, sizeof(block), 1
, output_file_pointer);
fread(block, sizeof(block), 1
, input_file_pointer);
++seek;
}
fclose(output_file_pointer);
// reseek unless requested not to
if(0 != reseek)
{
fsetpos(input_file_pointer, &offset);
}
}
++seek;
} // close the input file
fclose(input_file_pointer); // Function exit
return(EXIT_SUCCESS);// return function status }// end of main() ////////////////////////////////////////|///////////////////////////////////
//
// cleanup()
//
// This function is executed if we are interrupted
////////////////////////////////////////|///////////////////////////////////
//
staticvoidcleanup
(
  void
)
{ // reset the signal handlers
signal(SIGINT, SIG_DFL); // say how far we got
#ifdefHAVE_GETOPT_LONG
printf("Re-run with --seek=%d to continue\n", seek);
#else
printf("Re-run with -k=%d to continue\n", seek);
#endif// HAVE_GETOPT_LONG // exit the program
exit(EXIT_FAILURE); } ////////////////////////////////////////|///////////////////////////////////
///
// parse_magic()
//
// This function parses the input string into null terminated arrays
// of magic bytes and mask bytes.
////////////////////////////////////////|///////////////////////////////////
///
staticintparse_magic
(
  char*input
, unsigned char*magic
, unsigned char*mask
)
{
autointindex;
autochar*token_pointer; index = 0;
token_pointer = strtok(input, " \t");
while(NULL != token_pointer)
{
autochar*mask_pointer;
magic[index] = (unsigned char)strtol(token_pointer
, &mask_pointer, 0);
if('/' == *mask_pointer)
{
mask[index] = (unsigned char)strtol(mask_pointer + 1
, 0, 0);
}
else
{
mask[index] = 0xff;
}
token_pointer = strtok(0, " \t");
++index;
}
magic[index] = mask[index] = 0; return(index);
} ////////////////////////////////////////|///////////////////////////////////
///
// usage()
//
// This function displays the help text.
////////////////////////////////////////|///////////////////////////////////
///
staticvoidusage
(
  void
)
{
puts("Usage:");
#ifdefHAVE_GETOPT_LONG
puts("\t--count=how-many-blocks-to-copy");
puts("\t--input=file-name-or-device-path");
puts("\t--magic=magic-byte-string");
puts("\t--output=filename-prefix");
puts("\t--query ask before copying");
puts("\t--reseek=y|n start next scan after first block of current
file");
puts("\t--seek=block-to-start-scanning");
puts("\t--suffix=filename-suffix");
puts("\t--help this message");
puts("\t(see the source for more information)");
puts("\nFor example:");
puts("\tscavenger --count=2000 --magic=\"0xff 0xd8 0xff
0xe0/0xe0\"\\");
puts("\t\t--input=/dev/hda1 --output=/tmp/z --suffix=.jpeg");
#else
puts("\t-c how-many-blocks-to-copy");
puts("\t-i file-name-or-device-path");
puts("\t-m magic-byte-string");
puts("\t-o filename-prefix");
puts("\t-q ask before copying");
puts("\t-r y|n start next scan after first block of current file");
puts("\t-k block-to-start-scanning");
puts("\t-s filename-suffix");
puts("\t-h this message");
puts("\t(see the source for more information)");
puts("\nFor example:");
puts("\tscavenger -c 2000 -m \"0xff 0xd8 0xff 0xe0/0xe0\"\\");
puts("\t\t-i /dev/hda1 -o /tmp/z -s .jpeg");
#endif// HAVE_GETOPT_LONG
puts("\nMagic examples:");
puts("\t\"0xff 0xd8 0xff 0xe0/0xe1\"                  - jpeg's");
puts("\t\"0xd0 0xcf 0x11 0xe0\"                       - MS Word/MS
Excel");
puts("\t\"0xff 0xfb/0xf3 0xb2/0xc7 0x04/0x07\"        - mp3's");
puts("\t\"0x49 0x44 0x33 0x03\"                       - mp3's");
puts("\t\"0 0 0 0 0 0 32 0 0 0/0 0/0 0 0/0 90 91 92\" - Oracle
database files");
puts("\t(magic and mask can be in the radix of your choice)");
} // (end of scavenger.c)

