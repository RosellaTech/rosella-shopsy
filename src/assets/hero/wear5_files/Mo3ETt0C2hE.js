;/*FB_PKG_DELIM*/

__d("CAAPlatformData",["$InternalEnum","CAALoginLoggedOutHomeStrings","CDSProfilePhotoFBIcon.react","CDSProfilePhotoIGIcon.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||c("react"),j=function(b){babelHelpers.inheritsLoose(a,b);function a(a){return b.call(this,"CAAPlatformDataError "+a)||this}return a}(babelHelpers.wrapNativeSuper(Error)),k=b("$InternalEnum").Mirrored(["INSTAGRAM_WEB","WWW_COMET"]);a=function(){function a(a){this.caaPlatformApp=a}a.createCAAPlatformData=function(b){switch(Number(b)){case 1217981644879628:return new a(k.INSTAGRAM_WEB);case 2220391788200892:return new a(k.WWW_COMET);default:throw new j("Unsupported appId")}};var b=a.prototype;b.getPlatformApp=function(){return this.caaPlatformApp};b.getID=function(){switch(this.caaPlatformApp){case k.INSTAGRAM_WEB:return 1217981644879628;case k.WWW_COMET:return 2220391788200892}};b.getName=function(){switch(this.caaPlatformApp){case k.WWW_COMET:return c("CAALoginLoggedOutHomeStrings").facebookText;case k.INSTAGRAM_WEB:return c("CAALoginLoggedOutHomeStrings").instagramText}};b.getBadge=function(){switch(this.caaPlatformApp){case k.WWW_COMET:return i.jsx(c("CDSProfilePhotoFBIcon.react"),{});case k.INSTAGRAM_WEB:return i.jsx(c("CDSProfilePhotoIGIcon.react"),{})}};return a}();g.CAAPlatformDataError=j;g.CAAPlatformApp=k;g.CAAPlatformData=a}),98);