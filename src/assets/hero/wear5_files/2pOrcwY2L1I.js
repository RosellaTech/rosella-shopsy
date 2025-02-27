;/*FB_PKG_DELIM*/

__d("TrustedTypesLinkTagHTMLPolicy",["TrustedTypes","err"],(function(a,b,c,d,e,f,g){"use strict";a={createHTML:function(a){if(a==="<link />")return a;throw c("err")("Violating Trusted Type policies. Only works for '<link />' strings.")}};b=c("TrustedTypes").createPolicy("link-tag-html",a);d=b;g["default"]=d}),98);
__d("getMarkupWrap",["invariant","ExecutionEnvironment","TrustedTypesLinkTagHTMLPolicy"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k={};b=[1,'<select multiple="true">',"</select>"];d=[1,"<table>","</table>"];e=[3,"<table><tbody><tr>","</tr></tbody></table>"];var l=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],m={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:b,option:b,caption:d,colgroup:d,tbody:d,tfoot:d,thead:d,td:e,th:e};f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(a){m[a]=l,k[a]=!0});function a(a){a=a;!j&&h(0,144);Object.prototype.hasOwnProperty.call(m,a)||(a="*");Object.prototype.hasOwnProperty.call(k,a)||(a==="*"?j.innerHTML=c("TrustedTypesLinkTagHTMLPolicy").createHTML("<link />"):j.innerHTML="<"+a+"></"+a+">",k[a]=!j.firstChild);return k[a]?m[a]:null}g["default"]=a}),98);
__d("createNodesFromMarkup",["invariant","ExecutionEnvironment","TrustedTypesNoOpPolicy_DO_NOT_USE","getMarkupWrap"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k=/^\s*<(\w+)/;function l(a){a=a.match(k);return a&&a[1].toLowerCase()}function a(a,b){var d=j;!j&&h(0,5001);var e=l(a);e=e&&c("getMarkupWrap")(e);if(e){d.innerHTML=e[1]+a+e[2];e=e[0];while(e--)d=d.lastChild}else d.innerHTML=c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a);e=d.getElementsByTagName("script");e.length&&(b||h(0,5002),Array.from(e).forEach(b));a=Array.from(d.childNodes);while(d.lastChild)d.removeChild(d.lastChild);return a}g["default"]=a}),98);
__d("evalGlobal",[],(function(a,b,c,d,e,f){function a(a){if(typeof a!=="string")throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");if(!a)return;var b=document.createElement("script");try{b.appendChild(document.createTextNode(a))}catch(c){b.text=a}a=document.getElementsByTagName("head")[0]||document.documentElement;a.appendChild(b);a.removeChild(b)}f["default"]=a}),66);
__d("HTML",["invariant","Bootloader","FBLogger","createNodesFromMarkup","emptyFunction","evalGlobal"],(function(a,b,c,d,e,f,g){var h=/(<(\w+)[^>]*?)\/>/g,i={abbr:!0,area:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0};a=function(){"use strict";function a(c){c&&typeof c.__html==="string"&&(c=c.__html);if(!(this instanceof a))return c instanceof a?c:new a(c);if(c){var d=typeof c;d==="string"||g(0,277,d)}this._markup=c||"";this._defer=!1;this._nodes=null;this._inlineJS=b("emptyFunction");this._rootNode=null;this._hasInlineJs=!1}var c=a.prototype;c.toString=function(){return this._markup};c.getContent=function(){return this._markup};c.getNodes=function(){this._fillCache();return this._nodes};c.getRootNode=function(){this._rootNode&&g(0,278);var a=this.getNodes();if(a.length===1)this._rootNode=a[0];else{var b=document.createDocumentFragment();for(var c=0;c<a.length;c++)b.appendChild(a[c]);this._rootNode=b}return this._rootNode};c.getAction=function(){var a=this;this._fillCache();var b=function(){a._inlineJS()};return this._defer?function(){setTimeout(b,0)}:b};c._fillCache=function(){if(this._nodes!==null)return;if(!this._markup){this._nodes=[];return}var a=this._markup.replace(h,function(a,b,c){return i[c.toLowerCase()]?a:b+"></"+c+">"}),c=null;a=b("createNodesFromMarkup")(a,function(a){b("FBLogger")("staticresources").warn("HTML: encountered script node while parsing, hasSrc=%s, type=%s",Boolean(a.src),a.type==null||a.type===""?"<unknown>":a.type),a.type!=="application/ld+json"&&a.type!=="application/json"&&(c=c||[],c.push(a.src?b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"),a.src):b("evalGlobal").bind(null,a.innerHTML)),a.parentNode.removeChild(a))});c&&(this._hasInlineJs=!0,this._inlineJS=function(){for(var a=0;a<c.length;a++)c[a]()});this._nodes=a};c.setDeferred=function(a){this._defer=!!a;return this};c.hasInlineJs=function(){return this._hasInlineJs};a.isHTML=function(b){return!!b&&(b instanceof a||b.__html!==void 0)};a.replaceJSONWrapper=function(b){return b&&b.__html!==void 0?new a(b.__html):b};return a}();e.exports=a}),null);
__d("GHLBox",["FBLogger","GhlTennisKnobsConfig","Promise","WebStorage","gkx","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=c("requireDeferred")("json-bigint").__setRef("GHLBox"),k=atob("YXJlc19sYXN0X3NpZ25hbF9mbHVzaA=="),l=atob("YmR6X3BsYXliYWNrX3N0YXRl"),m=36,n=c("gkx")("20995"),o=c("GhlTennisKnobsConfig").ghlbox_log_validity_in_mins*60*1e3,p=c("GhlTennisKnobsConfig").ghlbox_initialize_in_mins*60*1e3;a=3;d=function(){return new(i||(i=b("Promise")))(function(a){j.onReady(function(b){var c=q(b,!0);b=q(b);if(c===0&&b===0)return a(!1);if(c!==b){r(Date.now());return a(!0)}return Date.now()-b<=o?a(!0):a(!1)})})};var q=function(a,b){b===void 0&&(b=!1);var d=(h||(h=c("WebStorage"))).getLocalStorageForRead();if(!d||!n)return 0;var e;if(!b){b=(b=d.getItem(k))!=null?b:"";e=Number.parseInt(b,10)}else{b=(d=(a=a.parse(d.getItem(l)))==null?void 0:a.session_key)!=null?d:"";e=Number.parseInt(b,m)}return!Number.isFinite(e)?0:e};e=function(){var a=(h||(h=c("WebStorage"))).getLocalStorage();if(!a||!n)return;if(a.getItem(k)!==null)return;if(a.getItem(l)!==null)return;r(Date.now()-p)};var r=function(a){j.onReady(function(b){var d=(h||(h=c("WebStorage"))).getLocalStorage();if(d&&n){var e=a.toString();try{d.setItem(k,e)}catch(a){c("FBLogger")("GHLBox").warn("Exception while writing to local storage exception: %s, tss: %s, tss.length: (%d)",a,e,e.length)}e={session_key:a.toString(m),buffer_length:60};d.setItem(l,b.stringify(e))}})};f=r;d=d;e=e;g.MinimumHiddenAdsToUpdateLocalStorage=a;g.s=f;g.r=d;g.i=e}),98);
__d("ghlInternalBumpODSKey",["ODS"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){return(h||(h=d("ODS"))).bumpEntityKey(2966,"feed_ads",a+"."+b)}g["default"]=a}),98);
__d("ghlTestUBT",["cr:1543261","cr:334"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1543261")&&b("cr:1543261")(),g["default"]=b("cr:334")}),98);
__d("ghlTestUBTFacebook",["ConstUriUtils","GHLBox","Promise","cr:1088657","ghlInternalBumpODSKey","promiseDone","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=function(a){a=d("ConstUriUtils").getUri(a);if(a==null)throw c("unrecoverableViolation")("URI cannot be null in ghlTestUBTFacebook.","ad_blocker_defense_ghost_owl");return a},j=function(a){return new(h||(h=b("Promise")))(function(b){var c=window.atob,d=document.body;if(c==null||d==null){b(!1);return}var e=document.createElement("div");e.className=a.map(c).join(" ");d.appendChild(e);c=m(e);if(c&&c.MozBinding&&c.MozBinding.startsWith("url")){setTimeout(function(){return b(e.clientWidth===0)},5e3);return}b((c==null?void 0:c.display)==="none")})},k=function(){return new(h||(h=b("Promise")))(function(a){var b=document.body;if(b==null){a(!1);return}var c=document.createElement("img");c.setAttribute("alt","");b.appendChild(c);c.onload=function(){var b=m(c);a((b==null?void 0:b.display)==="none");c.parentNode&&c.parentNode.removeChild(c)};c.onerror=function(){a(!0),c.parentNode&&c.parentNode.removeChild(c)};c.src=i("https://scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png").toString()})},l=null;a=function(a){l==null&&(q("init"),l=new(h||(h=b("Promise")))(function(a){return c("promiseDone")((h||(h=b("Promise"))).all([j(n),k(),j([o(p)]),d("GHLBox").r()]),function(b){var c=b[0],e=b[1],f=b[2];b=b[3];q("done",c,e,f);c=c||e||f;c?d("GHLBox").s(Date.now()):d("GHLBox").i();a([c,b])})})),c("promiseDone")(l,function(b){return a(b[0],b[1])}),b("cr:1088657")&&b("cr:1088657").i()};var m=function(a){return window.getComputedStyle(a)},n=["QWRCb3g=","QWQ=","YWR2ZXJ0","cG9zdC1hZHM="],o=function(a){return a[Math.floor(Math.random()*a.length)]},p=["UmVjdGFuZ2xlQWQ=","YWR2ZXJ0aXNpbmdfd2lkZ2V0","ZG93bmxvYWRfbGlua19zcG9uc29yZWQ=","c3BvbnNvclBvc3Q=","d2lkZ2V0U3BvbnNvcnM=","b2ItaG92ZXI=","ZGZwX3VuaXQ="],q=function(){for(var a=arguments.length,b=new Array(a),d=0;d<a;d++)b[d]=arguments[d];return c("ghlInternalBumpODSKey")("ghlTestUBT",String(b.join(".")))};e=a;g["default"]=e}),98);