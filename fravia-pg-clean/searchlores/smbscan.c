/*
Hey searcher!!
Here is a small proggy (unique IMHO) 
which lists Netbios names for given IP ranges.
Nomen est omen :=)

Hope you'll like it.
Source is included, w/o ANY Copy[right/left]

Kind regards.
Epic Lord.

smbscan.c (version 1.0)
  
A program to scan netbios clients.
It uses non-blocking sockets and udp sweep.
Returns ip, nbname and workgroup

With it, do whatever you desire.

No copyrigths reserved.

epic@lords.com


to do:
	parameter error checking
	hostname expansion
	integration with desires :=)
*/

#include <winsock2.h>
#include <winbase.h>
#include <stdio.h>
#include <string.h>

/*

BTW, little hacking on winsock2.h FD_SETSIZE is changed from 64 to
256, for multiple connections :=)

*/

#define VERSION "1.0"
#define AUTHOR "<Epic Lord>epic@lords.com -- No Copyrights :=)"

WSADATA info;

struct hostent *host;
struct sockaddr_in sinn;
struct nmbhdr *nmb;
struct typez *typz;

SOCKET sock;

char target_ip[40]="10.10.10.12"; //"127.0.0.1"; // default ip

long timeout=1024;				// max 1 seconds timeout value, for very heavy net load
int verbose=0;					// default verbosity
int max_connections =10;			// default number of concurrent connections

#define NMBHDRSIZE 13

char buff[2048];				// udp io buffer

char target[FD_SETSIZE][40];			// max ips

struct nmbhdr {
	unsigned short id;		/* name_trn_id */
	unsigned char R:1;		/* response (BOOL) */	
	unsigned char opcode:4; /* opcode - could be switched with above? */
	unsigned char AA:1;		/* broadcast (BOOL) */
	unsigned char TC:1;		/* truncate (BOOL) */
	unsigned char RD:1;		/* recursion desired */
	unsigned char RA:1;		/* recursion available */
	unsigned char unless:2;
	unsigned char B:1;
	unsigned char RCODE:4;

	unsigned short que_num;
	unsigned short rep_num;
	unsigned short num_rr;
	unsigned short num_rrsup;
	unsigned char namelen;
};

struct typez {
    unsigned short type;
    unsigned short type2;
};



int targets[4][2];	//	every target has a beginning and an end

char *data;
char machine[30], workgroup[30];

struct _nameinfo {
    char name[32];	// resource def, ie: machine & wgroup name
    short type;		// resource type
    short res;
    long fill;
} *ninf;

u_long flag = 1;

int err, count;

int longueur = sizeof(struct sockaddr_in);

char myname[256];

int waittime;

void calc_targets()		/* to calculate the ip combinations */
{
	int i,len;
	int j=0,k=0,l=0;
	char c, *tmp="";

	strcat(target_ip,".");
	len=strlen(target_ip);
	for (i=0; i<len; i++)
	{
		c=target_ip[i]; 
		switch (c) 
		{
			case '.'	:	targets[j++][k]=atoi(tmp); 
							k=0; l=0; 
							tmp=""; tmp[0]='\0'; 
							break; 

			case '-'	:	targets[j][k++]=atoi(tmp); 
							l=0; 
							tmp=""; tmp[0]='\0'; 
							break;

			case '*'	:	targets[j][0]=0; 
							targets[j++][1]=255; 
							k=0; l=0; i++; 
							tmp=""; tmp[0]='\0'; 
							break; 

			default	:	tmp[l++]=c; 
							tmp[l]='\0';
		}
	};

	for (k=0; k < 4; k++) 	if (targets[k][1]==0) targets[k][1]=targets[k][0]; 

};

void getid(int mc)
{
	fd_set sockset;		// for multiple sockets, fd macros and types are used
	struct timeval tmeout;
	int i,j,k;
	char nb,bl;

	if (WSAStartup(MAKEWORD(1,1),&info)!=0) 
	{

		puts("******************************");
		puts("Socket Error, can not continue");
		puts("******************************");
		exit (-1);
	};
		

	FD_ZERO(&sockset);			// initialize the socket set

	for (i=0; i<sizeof(buff); i++) buff[i]=0;	// clear buffer
	i=0;

	nmb = (struct nmbhdr *) buff;
	data = (char *) (buff + NMBHDRSIZE);
	typz = (struct typez *) (buff + NMBHDRSIZE + 33);
	
	memcpy(data, "CKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 34);	// "*" in encoded version
	nmb->id = 0x600;		/* transaction id */
	nmb->R = 0;			/* 0 for question 1 for response */
	nmb->opcode = 0;		/* 0 = query */
	nmb->que_num = htons(1);	/* i have only 1 question :) */
	nmb->namelen = 0x20;
	typz->type  = 0x2100;
	typz->type2 = 0x0100;

	sinn.sin_family=AF_INET;
	sinn.sin_port=htons(137);	// datagram port

	for (i=0; i< mc; i++)		// number of connections
	{
		sinn.sin_addr.s_addr=inet_addr(target[i]);	// test ip
		sock=socket(AF_INET,SOCK_DGRAM,IPPROTO_UDP);	// get socket

		FD_SET(sock,&sockset);
	
		// send three packets to every target, udp is NOT reliable
		nmb = (struct nmbhdr *) (buff);
		err=sendto(sock, buff, 50, 0, (struct sockaddr *) &sinn, longueur);
		Sleep(10);
		err=sendto(sock, buff, 50, 0, (struct sockaddr *) &sinn, longueur);
		Sleep(10);
		err=sendto(sock, buff, 50, 0, (struct sockaddr *) &sinn, longueur);
		Sleep(10);
		err=ioctlsocket(sock,FIONBIO, &flag);	// make a non blocking socket
		if (verbose) printf("testing %s\n",inet_ntoa(sinn.sin_addr));;
	};

	tmeout.tv_sec=0;
	tmeout.tv_usec=timeout*1000;				// for msec

	err=select(0,&sockset,NULL,NULL,&tmeout);		// wait till...

	for (j=0; j < (int)sockset.fd_count; j++) 
	{
		for (k=0; k<sizeof(buff); k++) buff[k]=0;
		count=0;
		strcpy(machine,"");strcpy(workgroup,"");

		err=recvfrom(sockset.fd_array[j], buff, sizeof(buff), 0, (struct sockaddr *) &sinn, &(int) longueur);

		ninf = (struct _nameinfo *) (buff + 57 + (0 * sizeof(struct _nameinfo)));
		
		nb=bl=' ';
		
		if (ninf->type == 800) // Netbios server
		{
			ninf = (struct _nameinfo *) (buff + 53 + ( 1 * sizeof(struct _nameinfo)));
			nb='*';
		}
		
		k=0;
		while ((ninf->name[k] != ' ') && (ninf->name[k] != '\0')) 
		{
			machine[k]=ninf->name[k]; 
			k++;
		};
		machine[k]='\0';

		if (ninf->type == 258)	 // Has a browse list
		{
			ninf = (struct _nameinfo *) (buff + 49 + ( 2 * sizeof(struct _nameinfo)));
			bl='*';
		}
	
		k=18;
		while ((ninf->name[k] != ' ') && (ninf->name[k] != '\0')) 
		{
			workgroup[k-18]=ninf->name[k]; 
			k++;
		};
		workgroup[k-18]='\0';
		if (strcmp(machine,"DEST")==0) 
		{
			strcpy(machine,"  *** possible firewall ***");
			strcpy(workgroup,"");
		};
		printf("%-15s %c%-15s %c%-15s\n",inet_ntoa(sinn.sin_addr),nb,machine,bl,workgroup);
	};

	WSACleanup();
};


void show_version()
{
	printf("\n%s%s %s\n","smbscan Vers.: ",VERSION,AUTHOR);
};

void show_help()
{
	show_version();
	puts("");
	puts("smbscan is a netbios scanner. Uses UDP packets to scan netbios hosts.");
	puts("Multiple sockets. Designed especially for windoze and internet.");
	puts("----------------------------------------------------------------------");
	puts("smbscan -i 10-12.*.0.15-95");
	puts("	will scan the defined range. Be careful while assigning ips,");
	puts("	no error check is performed on arguements.");
	puts("	BTW, -i is COMPULSORY. Default is 127.0.0.1");
	puts("-t timeout");
	puts("	timeout value in milliseconds for non blocking sockets.");
	puts("	for local network default is too slow,");
	puts("	for internet, default is too fast ;=> BTW, default is 1024 ie. 1 sec");
	puts("-c max_concurrent_connections");
	puts("	will speed up the scanning especially for huge quantities");
	puts("	default is 10 connections, range 1 to 255");
	puts("-v");
	puts("	outputs more detail.");
	puts("--version");
	puts("	prints out the version and author");
	puts("-h");
	puts("	this screen.");
	puts("----------------------------------------------------------------------");
	puts("NO RIGHTS RESERVED, NO SUPPORT PROMISED !!");
};


int main(int argc,char *argv[])
{
	int i=0,k,l,m,n;
	
	if (argc < 2) {show_help(); exit(0);};

	while (*argv != NULL)
	{
		if (strcmp(_strupr(*argv),"-T")==0) { argv++; timeout=atoi(*argv); };
		if (strcmp(_strupr(*argv),"-C")==0) { argv++; max_connections=atoi(*argv); };
		if (strcmp(_strupr(*argv),"-I")==0) { argv++; strcpy(target_ip,*argv); };
		if (strcmp(_strupr(*argv),"-V")==0) { verbose=1; };
		if (strcmp(*argv,"--VERSION")==0)	{ show_version(); exit(0); };
		if (strcmp(_strupr(*argv),"-H")==0) { show_help(); exit(0); };
		argv++;
	};

if (verbose)
{
	printf("\nTimeout   = %d msecs",timeout);
	printf("\nTarget_ip = %s",target_ip);
	printf("\nConnects. = %d",max_connections);
	puts("");
	puts("-----------------------------------");
}

	calc_targets();

	if (!verbose)
	{
		printf("\n%-15s %-15s  %-15s \n","IP","MACHINE","WGROUP/DOMAIN");
		printf("%-15s %-15s  %-15s \n","---------------","---------------","---------------");
	};

	for (k=targets[0][0]; k <= targets[0][1]; k++) 
	for (l=targets[1][0]; l <= targets[1][1]; l++) 
	for (m=targets[2][0]; m <= targets[2][1]; m++) 
	for (n=targets[3][0]; n <= targets[3][1]; n++) 
	{
		if (i == max_connections )
		{
			i=0;
			getid(max_connections);
		};
		sprintf(target[i],"%d.%d.%d.%d",k,l,m,n); 
		i++;
	}
	getid(i);

	return(0);
};