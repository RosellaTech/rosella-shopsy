;/*FB_PKG_DELIM*/

__d("PolarisLoggedOutProfileTabContentUpsell.react",["PolarisAppInstallStrings","PolarisLoggedOutBottomButtonGradientUpsell.react","PolarisLoggedOutBottomButtonUpsell.react","PolarisLoggedOutLandingDialogStrings.react","react","react-compiler-runtime","useMatchViewport","vulture"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useState,l=3;function a(a){var b=d("react-compiler-runtime").c(19),e=a.mediaLength;a=a.userFullName;c("vulture")("cJ9UzqaoY6Y5NCuWRHEVElOVZCM=");e=e>l;var f=c("useMatchViewport")("max","height",570),g=k(!f),h=g[0],m=g[1],n;b[0]!==f?(g=function(){var a=function(){window.scrollY>0?m(!0):m(!f)};window.addEventListener("scroll",a);return function(){window.removeEventListener("scroll",a)}},n=[f],b[0]=f,b[1]=g,b[2]=n):(g=b[1],n=b[2]);j(g,n);if(e&&h){b[3]===Symbol["for"]("react.memo_cache_sentinel")?(g="xqmqy1e xmz0i5r xixxii4 xh8yej3 x1vjfegm",b[3]=g):g=b[3];n=f?null:d("PolarisLoggedOutBottomButtonUpsell.react").SecondaryBottomButtonUpsellVariant.SignUp;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(e={label:d("PolarisAppInstallStrings").SIGNUP_UP_FOR_INSTAGRAM_APP,loginSource:"profile_posts_impression_limit"},b[4]=e):e=b[4];b[5]!==f||b[6]!==a?(h=f?void 0:a!=null&&a!==""?d("PolarisLoggedOutLandingDialogStrings.react").seeUserFullnameFullProfileText(a):d("PolarisLoggedOutLandingDialogStrings.react").GET_FULL_EXPERIENCE,b[5]=f,b[6]=a,b[7]=h):h=b[7];b[8]!==n||b[9]!==h?(g=i.jsx("div",{className:g,children:i.jsx(c("PolarisLoggedOutBottomButtonGradientUpsell.react"),{buttonProps:{primaryButtonVariant:d("PolarisLoggedOutBottomButtonUpsell.react").PrimaryBottomButtonUpsellVariant.OpenApp,secondaryButtonVariant:n,signUpButtonProps:e,upsellText:h}})}),b[8]=n,b[9]=h,b[10]=g):g=b[10];e=g}else{b[11]===Symbol["for"]("react.memo_cache_sentinel")?(n={label:d("PolarisAppInstallStrings").SIGNUP_UP_FOR_INSTAGRAM_APP,loginSource:"profile_posts_impression_limit"},b[11]=n):n=b[11];b[12]!==a?(h=a!=null&&a!==""?d("PolarisLoggedOutLandingDialogStrings.react").seeUserFullnameFullProfileText(a):d("PolarisLoggedOutLandingDialogStrings.react").GET_FULL_EXPERIENCE,b[12]=a,b[13]=h):h=b[13];b[14]!==h?(g=i.jsx(d("PolarisLoggedOutBottomButtonUpsell.react").PolarisLoggedOutBottomButtonUpsell,{overMedia:!1,primaryButtonVariant:d("PolarisLoggedOutBottomButtonUpsell.react").PrimaryBottomButtonUpsellVariant.OpenApp,secondaryButtonVariant:d("PolarisLoggedOutBottomButtonUpsell.react").SecondaryBottomButtonUpsellVariant.SignUp,signUpButtonProps:n,upsellText:h}),b[14]=h,b[15]=g):g=b[15];e=g}b[16]===Symbol["for"]("react.memo_cache_sentinel")?(a="x1n2onr6",b[16]=a):a=b[16];b[17]!==e?(n=i.jsx("div",{className:a,children:e}),b[17]=e,b[18]=n):n=b[18];return n}g["default"]=a}),98);
__d("PolarisProfileNameWithStatistics_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisProfileNameWithStatistics_user",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},action:"THROW"},{args:null,kind:"FragmentSpread",name:"PolarisProfileFullName_user"},{args:null,kind:"FragmentSpread",name:"PolarisProfilePronouns_user"},{args:null,kind:"FragmentSpread",name:"PolarisProfileHeaderUsername_user"},{args:null,kind:"FragmentSpread",name:"usePolarisProfileCounts_user"},{args:null,kind:"FragmentSpread",name:"PolarisProfileOtherOptionsDialog_user"}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("PolarisProfileNameWithStatistics.react",["fbt","CometRelay","IGDSBox.react","JSResourceForInteraction","PolarisFollowedByStatistic.react","PolarisFollowsStatistic.react","PolarisLoggedOutIntentDialog.entrypoint","PolarisProfileActionLoggedOutOptionsButton.react","PolarisProfileFullName.react","PolarisProfileHeaderUsername.react","PolarisProfileNameWithStatistics_user.graphql","PolarisProfilePronouns.react","react","react-compiler-runtime","useIGDSEntryPointDialog","useIGDSLazyDialog","usePolarisMinimalProfileIsBottomUpsellPersistent","usePolarisProfileCounts","vulture"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l=c("JSResourceForInteraction")("PolarisProfileOtherOptionsDialog.react").__setRef("PolarisProfileNameWithStatistics.react"),m=h._(/*BTDS*/"__JHASH__MvYBofJSpoH__JHASH__"),n={fullnameWrapper:{alignItems:"x6s0dn4",columnGap:"xmixu3c",display:"x78zum5",justifyContent:"xl56j7k",$$css:!0}};function a(a){var e=d("react-compiler-runtime").c(30);a=a.user;c("vulture")("XKva5qJ9Mr0ooPb2qpx5Czb4WiQ=");var f=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisProfileNameWithStatistics_user.graphql"),a);a=d("usePolarisMinimalProfileIsBottomUpsellPersistent").usePolarisMinimalProfileIsBottomUpsellPersistent();var g=c("usePolarisProfileCounts")(f),h=g.followedBy;g=g.follows;var j=c("useIGDSLazyDialog")(l),o=j[0];e[0]===Symbol["for"]("react.memo_cache_sentinel")?(j={},e[0]=j):j=e[0];j=c("useIGDSEntryPointDialog")(c("PolarisLoggedOutIntentDialog.entrypoint"),j);var p=j[0];e[1]!==p||e[2]!==f.username?(j=function(a,b){a.preventDefault(),p({source:b,username:f.username})},e[1]=p,e[2]=f.username,e[3]=j):j=e[3];var q=j;e[4]===Symbol["for"]("react.memo_cache_sentinel")?(j={className:"x7a106z x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdt5ytf x1yztbdb xw7yly9 xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1r0jzty x11njtxf x1fkh5qu x1ddbhtg x1dlrdel"},e[4]=j):j=e[4];var r;e[5]!==f?(r=k.jsx(c("PolarisProfileHeaderUsername.react"),{fontWeight:"bold",user:f}),e[5]=f,e[6]=r):r=e[6];var s;e[7]!==a||e[8]!==o||e[9]!==f?(s=!a&&k.jsx(c("PolarisProfileActionLoggedOutOptionsButton.react"),{alt:m,isTransparent:!0,onClick:function(){o({user:f})},zeroMargin:!0}),e[7]=a,e[8]=o,e[9]=f,e[10]=s):s=e[10];e[11]!==r||e[12]!==s?(a=k.jsxs(c("IGDSBox.react"),{direction:"row",children:[r,s]}),e[11]=r,e[12]=s,e[13]=a):a=e[13];e[14]!==f?(r=k.jsxs(c("IGDSBox.react"),{direction:"row",xstyle:n.fullnameWrapper,children:[k.jsx(c("PolarisProfileFullName.react"),{isEmphasized:!1,user:f}),k.jsx(c("PolarisProfilePronouns.react"),{user:f})]}),e[14]=f,e[15]=r):r=e[15];e[16]!==h||e[17]!==q?(s=h!=null&&k.jsx(c("PolarisFollowedByStatistic.react"),{onClick:function(a){q(a,"followed_by_list")},useSemiboldText:!0,value:h,variant:"default"}),e[16]=h,e[17]=q,e[18]=s):s=e[18];e[19]===Symbol["for"]("react.memo_cache_sentinel")?(h=k.jsx("span",{className:"x124kx0k x14yjl9h xudhj91 x18nykt9 xww2gxu x1rg5ohu xuoj239 xxymvpz x1g8rjiy"}),e[19]=h):h=e[19];var t;e[20]!==g||e[21]!==q?(t=g!=null&&k.jsx(c("PolarisFollowsStatistic.react"),{onClick:function(a){q(a,"follows_list")},shortenNumber:!0,useSemiboldText:!0,value:g,variant:"default"}),e[20]=g,e[21]=q,e[22]=t):t=e[22];e[23]!==t||e[24]!==s?(g=k.jsxs(c("IGDSBox.react"),{direction:"row",xstyle:n.fullnameWrapper,children:[s,h,t]}),e[23]=t,e[24]=s,e[25]=g):g=e[25];e[26]!==g||e[27]!==a||e[28]!==r?(h=k.jsxs("div",babelHelpers["extends"]({},j,{children:[a,r,g]})),e[26]=g,e[27]=a,e[28]=r,e[29]=h):h=e[29];return h}g["default"]=a}),226);