var iYQIndx = 1;
var oYQObject;
var sYQBGColor = "";
var oYQTimeout;
var boolYQerr=false;
var boolYQreq=false;
var boolYQinline=false;

var sYQNewsThemeURL ="http://us.js1.yimg.com/us.yimg.com/lib/s/newstheme_050616.css";
var sYQDefaultThemeURL = "http://us.js1.yimg.com/us.yimg.com/lib/s/defaulttheme_050616.css";

//var sYQNewsThemeURL ="http://yq.search.yahoo.com/javascript/newsTheme.css";
//var sYQDefaultThemeURL = "http://yq.search.yahoo.com/javascript/defaultTheme.css";

//var sYQNewsThemeURL ="newsTheme.css";
//var sYQDefaultThemeURL = "defaultTheme.css";

if ( document.domain.indexOf('yahoo.com')!='-1' ){
assembleBeacon('load');
}

if (typeof(HTMLElement)!="undefined") {
      HTMLElement.prototype.__defineGetter__("currentStyle", function() { return document.defaultView.getComputedStyle(this, null); });
}

function activateYQinl(poEl){
boolYQinline=true;
//if activateYQ returns true then submit the form instead
if(activateYQ(poEl)){
poEl.parentNode.getElementsByTagName("form").item(0).submit();
};

}

function activateYQ(poEl) {
//var oYQRS=document.getElementById('yschyqrs');
//if (oYQRS) return false;
if(boolYQreq) return false;
// beacon turning Y!Q on
assembleBeacon('turnon');

// just submit if not supported
  if (!document.getElementById) return true;
if (navigator.appVersion.indexOf('MSIE 5')!='-1' && navigator.appVersion.indexOf('Macintosh')!='-1') return true; // MSIE 5
//if (navigator.appVersion.indexOf('Linux')!='-1' || navigator.appVersion.indexOf('X11')!='-1') return true; // Linux 
if (navigator.appVersion.indexOf('Safari')!='-1' && document.domain.indexOf('yahoo.com')=='-1') return true; // Safari

var oForm;
if(boolYQinline){
oForm = poEl.parentNode.getElementsByTagName("form").item(0)
}else{
oForm = poEl.form;
}



// kill any open results
yqRemoveOpenResults();
// set default form values
yqSetFormDefaults(oForm);

// set z-index of all other YQ form elements
yqSetZIndex(oForm);

// populate embedded results
yqFetchResults(oForm);



// color the context background
// (go get parentNode until its yqresult)
oParent = oForm.parentNode;
while (oParent && (oParent.className!="yqcontext" && oParent.className!="yqlink")  && oParent.tagName.toUpperCase()!="BODY") {
oParent = oParent.parentNode;
}

if (oParent && (oParent.className=='yqcontext' || oParent.className=='yqlink')) {
if(oParent.currentStyle){ 
if( oParent.currentStyle.backgroundColor){
sYQBGColor = oParent.currentStyle.backgroundColor;
}
oParent.style.background = "#FFFDE6";
}
}

// increment counter
iYQIndx++;
// set inline back to false in case of mixed elements on page.
boolYQinline=false;
return false;
}

function yqFetchResults(poForm) {

// make and populate div for iframe
var oResult= document.createElement('div');
oResult.id= 'yschyqresult';
oResult.className= 'yschyqresult';
if(boolYQinline){
oResult.className +=' yschyqresultinl';
}
poForm.appendChild(oResult);

// add inner div
var oResultIn= document.createElement('div');
oResultIn.id= 'yschyqresultin';
oResultIn.className= 'yschyqresultin';
//oResult.appendChild(oResultIn);

// prevent bubbling up of body event handlers to this div
modifyEventListener("add","onmouseup",oResult,yqStopEventBubble);

// define div text

var sTitle= '<h3  id=yschyqresulthead class=drag>Related Search Results</h3>\n';
var sIcon= '<img src="http://us.i1.yimg.com/us.yimg.com/i/us/search/gr/yq_corner_nws.gif" width="58" height="30" alt="" border="0" id=yschyqresulticon class=drag>\n';

//use partner code to define close button image.
var sCloseBtnURL = 'http://us.i1.yimg.com/us.yimg.com/i/us/search/gr/close.gif';
if(document.sYQPartnerCode){
switch(document.sYQPartnerCode){
case 'news':
sCloseBtnURL = 'http://us.i1.yimg.com/us.yimg.com/i/us/nws/gl/closewin_yq.gif';
break;
default:
sCloseBtnURL = 'http://us.i1.yimg.com/us.yimg.com/i/us/search/gr/close.gif';
}
}
var sCloseBtn= '<div id=yschyqresultclose><a target=_top href="http://help.yahoo.com/help/us/ysearch/yq/index.html" class="help">Help</a> <a href="" onclick="yqRemoveOpenResults();yqRemoveEsc(); boolYQreq=false;  return false"><img src="'+sCloseBtnURL+'" height=14 width=14 border=0></a></div>\n';
var sLoading= '<div id=yschyqloading class=yschyqloading><p>Searching . . .</p></div>\n';
var sIFrame= '<iframe id=yschyqif class=yschyqif name=yschyqif scrolling="no" frameBorder=0 allowtransparency="true"></iframe>\n';
  var sResults= '<div id=yschyqresults class=yschyqresults></div>\n';
var sFeedback= '<div id=yschyqfeedback class=yschyqfeedback><p><a target=_top href="http://add.yahoo.com/fast/help/us/next/cgi_yq">Got feedback?</a></p></div>\n';

// use iFrame or ScripNode version
// depending on Int/Ext placement of YQ
//if ( (document.domain.indexOf('yahoo.com')=='-1') || (document.domain.indexOf('yahoo.com.')!='-1') || ((navigator.userAgent.indexOf('Gecko')!='-1') && (navigator.userAgent.indexOf('Safari')=='-1')) ) { // EXTERNAL
if(navigator.userAgent.indexOf('Safari')=='-1'){
// populate embedded results
oResultIn.innerHTML= sTitle + sCloseBtn + sIcon + sLoading + sResults + sFeedback;
oResult.appendChild(oResultIn);

// go get JS Results
var oJSResults = document.createElement('script');
oJSResults.setAttribute("language","JavaScript");
oJSResults.setAttribute("src", yqAssembleQuery(poForm));
//var oYQRS=document.getElementById('yschyqrs');
//if (oYQRS) return false; 
if (boolYQreq) return false;
//oYQRS = document.getElementsByTagName("head").item(0).appendChild(oJSResults);
document.getElementsByTagName("head").item(0).appendChild(oJSResults);
            //oYQRS.id='yschyqrs';
boolYQreq = !boolYQreq;
} else { // INTERNAL
// set domain as generic as possible
document.domain = 'yahoo.com';
// populate embedded results
oResultIn.innerHTML= sTitle + sCloseBtn + sIcon + sLoading + sIFrame + sFeedback;
oResult.appendChild(oResultIn);


// populate iframe with Embedded results
var oIFrame= document.getElementById('yschyqif');
poForm.target= oIFrame.id;
poForm.action= "http://yq.search.yahoo.com/yq/search";
poForm.method = "post";
poForm.submit();
}


// move icon to front if not there (moz)
var oIcon = document.getElementById('yschyqresulticon');
var oTitle = document.getElementById('yschyqresulthead');
if (oIcon && oTitle) 
oIcon.style.zIndex = oTitle.style.zIndex + 1;

// add moveability to open objects
var oTitle = document.getElementById('yschyqresulthead');
var oIcon = document.getElementById('yschyqresulticon');
modifyEventListener("add","onmousedown",oTitle,yqDoOnMouseDown);
modifyEventListener("add","onmousedown",oIcon,yqDoOnMouseDown);
modifyEventListener("add","onmouseup",oTitle,yqDoOnMouseUp);
modifyEventListener("add","onmouseup",oIcon,yqDoOnMouseUp);

// add close event when user hits escape key
// Sorry Safari you crash when we try to capture keydown.
if(navigator.appVersion.indexOf('Safari')=='-1'){
modifyEventListener("add","onKeyDown",document,yqCloseYQOverlay);
}
// following one prevents text selection in dragged objects
modifyEventListener("add","onselectstart",document,returnFalse);

// set timeout for getting results...
oYQObject = oIFrame;
oYQTimeout = setTimeout('yqCheckForResults()',20000);

return false;
}

//remove the escape key capturing. Needs to be own function because used in different contexts.
function yqRemoveEsc(){
//sorry Safari you crash when we try to capture keydown.
if(navigator.appVersion.indexOf('Safari')=='-1'){
modifyEventListener("remove","onKeyDown",document,yqCloseYQOverlay); 
}
}
//when esc key pressed close overlay window
function yqCloseYQOverlay(evt){
evt = getEventObject(evt);
//alert(evt.keyCode);
if(evt.keyCode == 27){
yqRemoveOpenResults(); 
boolYQreq=false; 
yqRemoveEsc(); 
return false
}
}
function yqSetFormDefaults(poForm) {
var aHidden = new Array();
var i = 0;

                if (!poForm.ei && (document.charset || document.characterSet)) {
                  aHidden[i] = document.createElement('input');
                  aHidden[i].name = 'ei';
                  aHidden[i].id = 'ei';
                  //aHidden[i].value = 'UTF-8';
                  if(document.charset){
                  // IE case
                  aHidden[i].value =document.charset;
                  }else{
                  if(document.characterSet){
                  //FF case
                  aHidden[i].value =document.characterSet;
                  }else{
                  //should never hit this case
                  aHidden[i].value = 'UTF-8';
                  }
                  }
                  i++;
                }

       //format sourceURL
        var url = document.location;
        if (url.toString().length > 125) {
              url = "http://" + document.domain;
        }

        if (!poForm.sourceURL) {
             aHidden[i] = document.createElement('input');
             aHidden[i].name = 'sourceURL';
             aHidden[i].id = 'sourceURL';
             aHidden[i].value = url;
             i++;
        }else{
           poForm.sourceURL.value = url;
        }

// append above values to poForm
for (i=0;i<aHidden.length;i++) {
aHidden[i].type='hidden';
poForm.appendChild(aHidden[i]);
}

   }


function yqRemoveOpenResults() {
// remove any open Results
var oOpenResults = document.getElementById('yschyqresult');
if (oOpenResults) {
assembleBeacon('turnoff');
var oOpenForm = oOpenResults.parentNode;
var oOpenContext = oOpenForm.parentNode;
oOpenForm.removeChild(oOpenResults);
if (sYQBGColor!="") {
oOpenContext.style.backgroundColor = sYQBGColor;
}
window.clearTimeout(oYQTimeout);

}
// remove the lock on preventing a user from selection in dragged objects
modifyEventListener("remove","onselectstart",document,returnFalse);
}

// checks to see if "loading..." text still there
// after 10 seconds (indicative of failed load...)
function yqCheckForResults() {
var oLoading = document.getElementById('yschyqloading');
if (oLoading) {
boolYQerr=true;
//var oYQRS=document.getElementById('yschyqrs');
            //if (oYQRS) oYQRS.parentNode.removeChild(oYQRS);
            boolYQreq = !boolYQreq;
assembleBeacon('timeout');
// close results 
if (oYQObject)
oYQObject.parentNode.removeChild(oYQObject);
// display error message
oLoading.innerHTML = '<p class=error><img src="http://us.i1.yimg.com/us.yimg.com/i/us/search/gr/alertbubble.gif" align=left width=23 height=19>Request timed out, please <a href="" onclick="yqRemoveOpenResults(); boolYQreq=false; return false;" >close this window</a> to try again.</p>';
}
}


// set the zIndex of all YQ forms so there's no overlap.
function yqSetZIndex(poForm) {
var aYQForms;// array of YQ forms
var i=0;// counter

// set zIndex of all YQ forms 
aYQForms = document.getElementsByTagName('form');
for (i=0; i < aYQForms.length; i++) {
if (aYQForms[i].className=="yq") {
aYQForms[i].style.zIndex = 999 + iYQIndx;
}
}

// bring active YQ form zIndex to front
poForm.style.zIndex = 1000 + iYQIndx;
}

// submit the "more" button from the External embedded results

function submitXSRP(Url) {
var oForm = document.getElementById('yschspmore');
if (oForm) {
beacon(Url);
addyqrsX('rs_out',oForm);
oForm.submit();
return false;
}
}

function addyqrsX(type,oForm)
{
                //var yqrs =  document.getElementById('yq_rs');
                // check for hidden form (create if necessary)
                //if(yqrs)
                //{
                        //yqrs.value="";
                        //oForm.removeChild(yqrs);
                //}
        var yqrs = document.createElement('input');
        yqrs.type = "hidden";
        yqrs.name = "yq_rs";
yqrs.id = "yq_rs";
        yqrs.value = type;
oForm.appendChild(yqrs);
}


// assemble query STRING to GET external results
function yqAssembleQuery(poForm) {
                boolYQerr=false;
var aInputs = poForm.getElementsByTagName('input');
var sArgs='?';
for (var i=0; i<aInputs.length; i++) {
                     if (aInputs[i].name.toLowerCase()=="context") {
                        queryValue = yqEncodeString(aInputs[i].value);
                        queryValue = queryValue.substring(0,1810);
                        sArgs += aInputs[i].name +'='+ queryValue;
            } else {
                        sArgs += aInputs[i].name +'='+ yqEncodeString(aInputs[i].value);
            }
    if (i!=aInputs.length-1) sArgs += '&';
}
return "http://yq.search.yahoo.com/yq/results" +sArgs;
}

function URLencode(sStr) {
    return escape(sStr).replace(/\+/g, '%2C').replace(/\"/g,'%22').replace(/\'/g, '%27');
  }

function beacon(Url)
{
        if(Url != '')
        {
//Url = URLencode(Url);
//Url = 'http://yq.search.yahoo.com/web/beacon?rds=' + Url;
                var oImg= new Image(); 
                oImg.src=Url;
        }
}

function assembleBeacon(Type) {
var url = "";
var sDomain = document.domain;
var sNetwork = (document.domain.indexOf('yahoo.com')=='-1') ? "O" : "I";
var sSpaceID = (document.domain.indexOf('yahoo.com')=='-1') ? "96900539" : "96900535";

switch (Type) {
case 'load':
url = 'http://rds.yahoo.com/S=' + sSpaceID + '/l=YQ' + sNetwork + '/URL='+ sDomain +'/*-http://us.i1.yimg.com/us.yimg.com/i/us/nws/gl/12_yq_bsc.gif';
break;
case 'turnon' :
url = 'http://rds.yahoo.com/S=' + sSpaceID + '/l=SR' + sNetwork + '/URL='+ sDomain +'/*-http://us.i1.yimg.com/us.yimg.com/i/us/nws/gl/12_yq_bsc.gif';
break;
case 'turnoff' :
url = 'http://rds.yahoo.com/S=' + sSpaceID + '/l=OC' + sNetwork + '/URL='+ sDomain +'/*-http://us.i1.yimg.com/us.yimg.com/i/us/nws/gl/12_yq_bsc.gif';
break;
case 'timeout' :
url = 'http://rds.yahoo.com/S=' + sSpaceID + '/l=OT' + sNetwork + '/URL='+ sDomain +'/*-http://us.i1.yimg.com/us.yimg.com/i/us/nws/gl/12_yq_bsc.gif';
break;
default :
url = 'http://rds.yahoo.com/S=' + sSpaceID + '/l=SR' + sNetwork + '/URL='+ sDomain +'/*-http://us.i1.yimg.com/us.yimg.com/i/us/nws/gl/12_yq_bsc.gif';
}

beacon(url);
}


// encode form values appropriately for GET form submission
function yqEncodeString(psValue) {
//sNewValue = escape(psValue); // escape characters
if(encodeURIComponent){
sNewValue = encodeURIComponent(psValue); // escape characters
}else{
sNewValue = escape(psValue); // escape characters
}
return sNewValue;
}

// prevent users from selecting text in the main document when 
// a SP window is open (as it hinders moveability)
function yqStopEventBubble(evt) {
var evt = (evt) ? evt : ((window.event) ? window.event : "");
evt.cancelBubble=true;
}

// adds tooltips to searchspot actuators
function spAddTips() {
sTitle='Y!Q allows to you conveniently search in context of the current article';
for (i=0;i<document.forms.length;i++) {
if (document.forms[i].className=='yq') {
for (j=0;j<document.forms[i].elements.length;j++) {
if (document.forms[i].elements[j].className=='yqbt')
document.forms[i].elements[j].title=sTitle;
}
}
}
}
   
if (window.addEventListener) // DOM 2
window.addEventListener('load', spAddTips, false);
else if (window.attachEvent) // IE
window.attachEvent('onload', spAddTips);
   
   
   // DRAG FUNCTIONALITY
    var draggedElem=null; // only move elem initially mouse-downed on.
    var x,y; // keep track of where elem is during drag

    function spDoOnMouseMove(evt){
        evt = getEventObject(evt);
        if ( evt && draggedElem ) {
            draggedElem.style.marginLeft=0 + "px";
            draggedElem.style.marginTop=0 + "px";
            draggedElem.style.left=(temp1+evt.clientX-x)+"px"; // move it to new place
            draggedElem.style.top=(temp2+evt.clientY-y)+"px";
            return false;
        }
    }


    function yqDoOnMouseDown(evt){
        evt = getEventObject(evt);
        var elem = getEventObjectsElement(evt);
elem = getEventObjectsElement(evt);

// go get parentNode until its yqresult
while ((elem.className!="yschyqresult" && elem.className!="yschyqresult yschyqresultinl") && (elem.className.indexOf("yq")!="-1" || elem.className.indexOf("drag")!="-1") ) {
elem = elem.parentNode;
}

if ( elem && (elem.className=="yschyqresult" || elem.className=="yschyqresult yschyqresultinl")  && evt.button!=2 ) {
            draggedElem=elem; // since while moving can go over other elems.

            // store where it was
            temp1=(elem.offsetLeft); //pixelLeft is IE only, left starts out as '' not 0 // where it was
            temp2=(elem.offsetTop); // pixelTop;

            x=evt.clientX; // where it is going
            y=evt.clientY;

            // register move function with onmousemove event
            modifyEventListener("add","onmousemove",document,spDoOnMouseMove);

        }
    }

    function yqDoOnMouseUp(){
        //window.status = "doOnMouseUp";
        if ( draggedElem ) {
            draggedElem=null;
            modifyEventListener("remove","onmousemove",document,spDoOnMouseMove);
        }
    }

    function returnFalse() {
        return false;
    }


 
function modifyEventListener(psAction, psEventName, poElement, poFunction){
    var isAdd = ((psAction == "add")||(psAction == "attach"))?true:false;
    psEventName = psEventName.toLowerCase(); // just in case
    if (psEventName.substring(0,2) != "on") {
        psEventName = "on"+psEventName; // in case they gave click instead of onclick
    }
    if ( document.getElementById ) { // crappola pre-IE5 or NS6 browsers
        if ( poElement.captureEvents ) { // if NS4 must reg then bind
            var sFunc = (isAdd)?"captureEvents":"releaseEvents";
            // event should strip off 'on' and then uppercase
            eval("poElement."+sFunc+"(Event."+psEventName.substr(2).toUpperCase()+");");
        }
        //if add need the name of the function to use in the eval
        var sFunc = (isAdd)?(poFunction.toString().split(' ')[1].split('(')[0]):"null";
        eval("poElement."+psEventName+" = "+sFunc+";");
        return true;
    } else if ( poElement.attachEvent ) { // IE5+
        if (isAdd) {
            poElement.attachEvent(psEventName,poFunction);
        } else {
            poElement.detachEvent(psEventName,poFunction);
        }
        return true;
    } else if ( poElement.addEventListener ) { // W3C DOM2
        if (isAdd) {
            // strip the 'on' off the front of the event name
            poElement.addEventListener(psEventName.substr(2),poFunction,false);
        } else {
            poElement.removeEventListener(psEventName.substr(2),poFunction,false);
        }
        return true;
    }
    return false; // none of the above so no event attached, return false
}



function getEventObject(evt) {
    return (evt) ? evt : ((window.event) ? event : null);
}


function getEventObjectsElement (evt) {
    evt = (evt) ? evt : ((window.event) ? event : null);
    if ( evt ) {
        var elem = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
        // if element contains a text node then need to pop up one
        while ( elem.nodeType == 3 ) {
            elem = elem.parentNode;
        }
        return elem;
    }
    return null;
}

function resolveTheme(sTheme){
var sRetTheme = "";
if(sTheme.indexOf("http:")=='-1'){
//named themes
switch (sTheme) {
case 'news':
sRetTheme = sYQNewsThemeURL;
break;
default :
sRetTheme = sYQDefaultThemeURL;
}
}else{
//user defined theme http://someurl/foo.css
sRetTheme = sTheme;
}
return sRetTheme;

}

// css for embedded results
if(document.sYQTheme){
document.write('<link rel="STYLESHEET" type="text/css" href="'+resolveTheme(document.sYQTheme)+'" id="yschyqtheme">');
}else{
document.write('<link rel="STYLESHEET" type="text/css" href="'+sYQDefaultThemeURL+'" id="yschyqtheme">');
}
document.write('<style>');


// form & actuator button
document.write('.yqcontext { background:transparent; }');
document.write('.yq, {clear:both; text-align:left; position:relative}');
document.write('.yq .drag, .yqin .drag {cursor: move; position: relative } ');

//fix for wrapping issue

if((navigator.userAgent.indexOf('Gecko')!='-1') && (navigator.userAgent.indexOf('Safari')=='-1')){
document.write('.yqlink {white-space:nowrap;}');
}else{
document.write('.yqlink {display:inline-block;}');
}
document.write('#yschyqresult {white-space:normal !important; }');



//partnercode for inline icon and 

switch(document.sYQPartnerCode){
case 'news':
document.write('.yqact { background: url(http://us.i1.yimg.com/us.yimg.com/i/us/search/gr/yq_small.gif) 5px 2px no-repeat #FFFDE6; height: 1.6em; text-align: left}');
document.write('.yqact input { cursor: pointer; cursor: hand; width: 11em; background: transparent; color: #940894; font: bold 12px arial,helvetica,sans-serif; text-decoration: underline; padding: 0px; margin-top: 3px; margin-left: 25px; border: none; }');
document.write('.yqact input:hover { border: none; }');
//inlined overrides
document.write('.yqin {display:inline; height:0px; width:0px; position:absolute; text-align:left;}');
document.write('.yqimgins {background: url(http://us.i1.yimg.com/us.yimg.com/i/us/nws/gl/12_yq_bsc.gif); background-repeat: no-repeat; background-position: right; padding-right:15px; margin-right: 2px; font-weight: bold ; border-bottom: 1px dotted #0066CC; cursor: pointer; cursor: hand; text-decoration: none; color: #000000;}');
break;
default :
document.write('.yqact { background: url(http://us.i1.yimg.com/us.yimg.com/i/us/search/gr/yq_small.gif) 5px 2px no-repeat #FFFDE6; height: 1.6em; text-align: left}');
document.write('.yqact input { cursor: pointer; cursor: hand; width: 11em; background: transparent; color: #940894; font: bold 12px arial,helvetica,sans-serif; text-decoration: underline; padding: 0px; margin-top: 3px; margin-left: 25px; border: none; }');
document.write('.yqact input:hover { border: none; }');
//inlined overrides
document.write('.yqin {display:inline; height:0px; width:0px; position:absolute; text-align:left;}');
document.write('.yqimgins {background: url(http://us.i1.yimg.com/us.yimg.com/i/us/sch/b/yq_smaller.gif); background-repeat: no-repeat; background-position: right; padding-right:22px; margin-right: 2px; font-weight: bold; border-bottom: 1px dotted #C09A3E; cursor: pointer; cursor: hand; text-decoration:none; color: #000000;}');
}



document.write('</style>');