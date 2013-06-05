/**
 * A fix for the iOS orientationchange zoom bug
 */
(function(w){var ua=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(ua)&&ua.indexOf("AppleWebKit")>-1)){return;}
var doc=w.document;if(!doc.querySelector){return;}
var meta=doc.querySelector("meta[name=viewport]"),initialContent=meta&&meta.getAttribute("content"),disabledZoom=initialContent+",maximum-scale=1",enabledZoom=initialContent+",maximum-scale=10",enabled=true,x,y,z,aig;if(!meta){return;}
function restoreZoom(){meta.setAttribute("content",enabledZoom);enabled=true;}
function disableZoom(){meta.setAttribute("content",disabledZoom);enabled=false;}
function checkTilt(e){aig=e.accelerationIncludingGravity;x=Math.abs(aig.x);y=Math.abs(aig.y);z=Math.abs(aig.z);if((!w.orientation||w.orientation===180)&&(x>7||((z>6&&y<8||z<8&&y>6)&&x>5))){if(enabled){disableZoom();}}
else if(!enabled){restoreZoom();}}
w.addEventListener("orientationchange",restoreZoom,false);w.addEventListener("devicemotion",checkTilt,false);})(this);


/**
 * Normalized hide address bar for iOS & Android
 */
(function(win){var doc=win.document;if(!location.hash&&win.addEventListener){window.scrollTo(0,1);var scrollTop=1,getScrollTop=function(){return win.pageYOffset||doc.compatMode==="CSS1Compat"&&doc.documentElement.scrollTop||doc.body.scrollTop||0;},bodycheck=setInterval(function(){if(doc.body){clearInterval(bodycheck);scrollTop=getScrollTop();win.scrollTo(0,scrollTop===1?0:1);}},15);win.addEventListener("load",function(){setTimeout(function(){if(getScrollTop()<20){win.scrollTo(0,scrollTop===1?0:1);}},0);});}})(this);