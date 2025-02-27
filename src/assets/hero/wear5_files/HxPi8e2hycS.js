;/*FB_PKG_DELIM*/

__d("PolarisProfilePageNullStateUpsellMessageLink.react",["fbt","PolarisFastLink.react","PolarisIsLoggedIn","PolarisLinkBuilder","PolarisLoggedOutCtaClickLogger","PolarisNavigationStrings","PolarisUA","browserHistory_DO_NOT_USE","react","react-compiler-runtime","usePolarisPageID"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(){var a=d("react-compiler-runtime").c(8),b=c("usePolarisPageID")(),e;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=!d("PolarisIsLoggedIn").isLoggedIn()&&d("PolarisUA").isMobile(),a[0]=e):e=a[0];e=e;var f;a[1]!==b?(f=function(){d("PolarisLoggedOutCtaClickLogger").logLoggedOutCtaClickEvent("login","contextual_cta",b)},a[1]=b,a[2]=f):f=a[2];f=f;var g,i;a[3]===Symbol["for"]("react.memo_cache_sentinel")?(g="x173jzuc xjypj1w",i=d("PolarisLinkBuilder").buildLoginLink(d("browserHistory_DO_NOT_USE").getPath(d("browserHistory_DO_NOT_USE").browserHistory),{source:"private_profile"}),a[3]=g,a[4]=i):(g=a[3],i=a[4]);a[5]===Symbol["for"]("react.memo_cache_sentinel")?(e=e?d("PolarisNavigationStrings").LOG_IN_TEXT:h._(/*BTDS*/"__JHASH__hqiArIKCNlE__JHASH__"),a[5]=e):e=a[5];a[6]!==f?(g=j.jsx(c("PolarisFastLink.react"),{className:g,href:i,onClick:f,children:e}),a[6]=f,a[7]=g):g=a[7];return g}g["default"]=a}),226);
__d("PolarisProfilePageNullStateUpsell.react",["IGDSBox.react","IGDSButton.react","IGDSTextVariants.react","PolarisAppInstallStrings","PolarisIgLiteCarbonUpsellsUtils","PolarisLoggedOutCtaClickLogger","PolarisLoggedOutSignupButton.react","PolarisLoggedOutUpsellStrings","PolarisOpenInApp","PolarisProfilePageNullStateUpsellMessageLink.react","PolarisRoutePropUtils","PolarisUA","polarisNavigationSelectors","react","react-compiler-runtime","usePolarisMinimalProfileIsHeaderMinimized","usePolarisPageID","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext,k={primaryCtaButton:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",paddingStart:"x5ib6vp",paddingEnd:"xc73u3c",paddingLeft:null,paddingRight:null,$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(28),e=a.bodyText;a=a.headerText;var f=c("usePolarisSelector")(l),g=f.android,h=f.ios,m=f.originalPath,n=c("usePolarisPageID")();b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=d("PolarisIgLiteCarbonUpsellsUtils").isIgLiteCarbonUpsellsEligible(),b[0]=f):f=b[0];var o=f;b[1]!==g||b[2]!==h||b[3]!==m||b[4]!==n?(f=function(a){a.preventDefault(),d("PolarisLoggedOutCtaClickLogger").logLoggedOutCtaClickEvent("app_open","contextual_cta",n),d("PolarisOpenInApp").openInApp({androidAppLink:g,iOSAppLink:h,isInstagramLiteCarbon:o,originalPath:m})},b[1]=g,b[2]=h,b[3]=m,b[4]=n,b[5]=f):f=b[5];f=f;var p=j(d("PolarisRoutePropUtils").PolarisRoutePropContext);p=d("PolarisUA").isMobile()&&(p==null?void 0:p.routePropQE.getBool("loxPrivateProfileUseOpenInstagram"));var q=d("usePolarisMinimalProfileIsHeaderMinimized").usePolarisMinimalProfileIsHeaderMinimized(),r=q?d("IGDSTextVariants.react").IGDSTextHeadline2:d("IGDSTextVariants.react").IGDSTextBodyEmphasized,s=q?"primaryText":"secondaryText",t;b[6]!==r||b[7]!==a?(t=i.jsx(c("IGDSBox.react"),{marginBottom:3,position:"relative",children:i.jsx(r,{textAlign:"center",children:a})}),b[6]=r,b[7]=a,b[8]=t):t=b[8];b[9]!==e||b[10]!==s?(r=i.jsx(d("IGDSTextVariants.react").IGDSTextBody,{color:s,textAlign:"center",children:e}),b[9]=e,b[10]=s,b[11]=r):r=b[11];b[12]!==t||b[13]!==r?(a=i.jsxs(c("IGDSBox.react"),{marginBottom:4,position:"relative",children:[t,r]}),b[12]=t,b[13]=r,b[14]=a):a=b[14];e=q?"auto":"100%";s=p===!0||q?d("PolarisAppInstallStrings").OPEN_INSTAGRAM:d("PolarisAppInstallStrings").SWITCH_TO_THE_APP;t=q&&k.primaryCtaButton;b[15]!==f||b[16]!==s||b[17]!==t?(r=i.jsx(c("IGDSButton.react"),{fullWidth:!0,label:s,onClick:f,xstyle:t}),b[15]=f,b[16]=s,b[17]=t,b[18]=r):r=b[18];b[19]!==e||b[20]!==r?(p=i.jsx(c("IGDSBox.react"),{marginBottom:3,position:"relative",width:e,children:r}),b[19]=e,b[20]=r,b[21]=p):p=b[21];b[22]!==q?(f=i.jsx(c("IGDSBox.react"),{position:"relative",children:q?i.jsx(c("PolarisLoggedOutSignupButton.react"),{ctaTypeV2:"contextual_cta",label:d("PolarisLoggedOutUpsellStrings").SIGNUP_BUTTON_SENTENCE_CASE_TEXT,loginSource:"private_profile",variant:"primary_link"}):i.jsx(c("PolarisProfilePageNullStateUpsellMessageLink.react"),{})}),b[22]=q,b[23]=f):f=b[23];b[24]!==p||b[25]!==f||b[26]!==a?(s=i.jsxs(c("IGDSBox.react"),{alignItems:"center",marginEnd:9,marginStart:9,marginTop:12,position:"relative",children:[a,p,f]}),b[24]=p,b[25]=f,b[26]=a,b[27]=s):s=b[27];return s}function l(a){return d("polarisNavigationSelectors").getDeepLink__DEPRECATED(a)}g["default"]=a}),98);