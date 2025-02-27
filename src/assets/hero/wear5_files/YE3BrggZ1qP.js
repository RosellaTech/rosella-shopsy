;/*FB_PKG_DELIM*/

__d("CDSCard.react",["CometPressable.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={overflowHidden:{overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},pressed:{opacity:"x18km98s",transform:"xjzqdv7",$$css:!0},root:{alignItems:"x1qjc9v5",backgroundColor:"x1jx94hy",borderTopColor:"xkpljb8",borderEndColor:"xt1pdm5",borderBottomColor:"x1ae76x5",borderStartColor:"x18wx3en",borderTopStartRadius:"x1qpq9i9",borderTopEndRadius:"xdney7k",borderBottomEndRadius:"xu5ydu1",borderBottomStartRadius:"xt3gfkd",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x1epygpo",borderEndWidth:"x3fr4l5",borderBottomWidth:"x18bsr7w",borderStartWidth:"xhnkrtr",boxShadow:"x1irw62u",boxSizing:"x9f619",display:"x78zum5",flexDirection:"xdt5ytf",isolation:"xc8icb0",justifyContent:"x1nhvcw1",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",$$css:!0}};b=j.forwardRef(a);function a(a,b){var d=a.children,e=a.linkProps,f=a.onPress;a.testid;var g=a.xstyle;return f!=null||e!=null?j.jsx(c("CometPressable.react"),{hideHoverOverlay:!0,linkProps:e,onPress:f,ref:b,xstyle:function(a){a=a.pressed;return[k.root,g,a&&k.pressed]},children:d}):j.jsx("div",babelHelpers["extends"]({},(h||(h=c("stylex"))).props(k.root,k.overflowHidden,g),{ref:b,children:d}))}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("CDSListContainer.react",["CDSCard.react","XPlatReactEnvironment","react","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={card:{borderTopColor:"xkkctlj",borderEndColor:"x1chxgay",borderBottomColor:"x1rsacje",borderStartColor:"x1ofzqqx",borderTopStartRadius:"xc1cqh8",borderTopEndRadius:"xkmajd7",borderBottomEndRadius:"x8g6ph",borderBottomStartRadius:"x1azt60i",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x1486fpl",borderEndWidth:"x1m5fxz",borderBottomWidth:"xh2bela",borderStartWidth:"x1o3p5os",$$css:!0},cardWeb:{boxShadow:"x1bqluzl",$$css:!0},content:{alignItems:"x1qjc9v5",boxSizing:"x9f619",flexDirection:"xdt5ytf",justifyContent:"x1nhvcw1",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",$$css:!0},contentWeb:{borderTopStartRadius:"x1o1ewxj",borderTopEndRadius:"x3x9cwd",borderBottomEndRadius:"x1e5q0jg",borderBottomStartRadius:"x13rtm0m",display:"x1jfb8zj",isolation:"xc8icb0",$$css:!0},footerMargin:{marginBottom:"x1yztbdb",$$css:!0},headerMargin:{marginTop:"x1gslohp",$$css:!0},inheritBorder:{borderTopStartRadius:"x1o1ewxj",borderTopEndRadius:"x3x9cwd",borderBottomEndRadius:"x1e5q0jg",borderBottomStartRadius:"x13rtm0m",$$css:!0}};function a(a){var b=a["aria-label"];b=b===void 0?null:b;var c=a["aria-labelledby"],e=a.children,f=a.footer,g=a.header,h=a.role,l=a.withoutCard;l=l===void 0?!1:l;a=a.xstyle;return i.jsxs(d("react-strict-dom").html.div,{style:a,children:[g,i.jsx(k,{hasFooter:f!=null,hasHeader:g!=null,withoutCard:l,children:i.jsx(d("react-strict-dom").html.div,{style:j.inheritBorder,children:i.jsx(d("react-strict-dom").html.div,{"aria-label":c==null?(a=b)!=null?a:void 0:void 0,"aria-labelledby":(g=c)!=null?g:void 0,role:h,style:[j.content,d("XPlatReactEnvironment").isWeb()&&j.contentWeb],children:e})})}),f]})}a.displayName=a.name+" [from "+f.id+"]";function k(a){var b=a.children,e=a.hasFooter,f=a.hasHeader;a=a.withoutCard;f=[f&&j.headerMargin,e&&j.footerMargin];return a?i.jsx(d("react-strict-dom").html.div,{style:[j.inheritBorder,f],children:b}):i.jsx(c("CDSCard.react"),{xstyle:[f,j.card,d("XPlatReactEnvironment").isWeb()&&j.cardWeb],children:b})}k.displayName=k.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CDSListCellRefContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("react")).createContext;b=a();g["default"]=b}),98);
__d("CDSListCellTextPairing.react",["CDSText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={subtitleText:{marginBottom:"xjpr12u",paddingTop:"x1nn3v0j",$$css:!0},subtitleTextOverride:{paddingTop:"x889kno",$$css:!0},titleText:{marginBottom:"xjpr12u",paddingTop:"x1nn3v0j",$$css:!0},topText:{marginBottom:"x1e56ztr",$$css:!0}};function a(a){var b=a.state,d=a.subtitle,e=a.subtitleColor;e=e===void 0?"secondaryText":e;var f=a.subtitleMaxLines,g=a.title,h=a.titleColor;h=h===void 0?"primaryText":h;var k=a.titleId,l=a.titleMaxLines,m=a.topText,n=a.topTextColor;n=n===void 0?"secondaryText":n;a=a.topTextMaxLines;return i.jsxs(i.Fragment,{children:[m!=null?i.jsx(c("CDSText.react"),{color:b==="disabled"?"disabledText":b==="selected"?"primaryDeemphasizedButtonText":n,maxLines:a,textStyle:"meta",xstyle:j.topText,children:m}):null,g!=null?i.jsx(c("CDSText.react"),{asBox:!0,color:b==="disabled"?"disabledText":b==="selected"?"primaryDeemphasizedButtonText":h,id:k,maxLines:l,textStyle:"primaryLabel",xstyle:j.titleText,children:g}):null,d!=null?i.jsx(c("CDSText.react"),{asBox:!0,color:b==="disabled"?"disabledText":e,maxLines:f,textStyle:"body",xstyle:[j.subtitleText,g!=null&&j.subtitleTextOverride],children:d}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CDSListTruncationLimitContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);
__d("CDSMenuItemRoleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CDSListCellImpl.react",["BaseDivider.react","BaseListCell.react","BaseRow.react","CDSListCellRefContext","CDSListCellTextPairing.react","CDSListTruncationLimitContext","CDSMenuItemRoleContext","CDSText.react","CometCompositeStructureContext","CometPressable.react","CometPressableOverlay.react","FBLogger","react","stylex","useCometPressableEventHandlers","useMergeRefs"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useContext,l=b.useEffect,m=b.useMemo,n=b.useRef,o=b.useState,p={16:{paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",$$css:!0}},q={40:{alignItems:"x6s0dn4",height:"x1vqgdyp",justifyContent:"xl56j7k",width:"x100vrsf",$$css:!0}},r={16:{width:"x1kky2od",$$css:!0},24:{width:"xvy4d1p",$$css:!0},32:{width:"x1td3qas",$$css:!0},40:{width:"x100vrsf",$$css:!0},48:{width:"x1useyqa",$$css:!0}},s={badgeMargin:{marginTop:"x1xmf6yo",$$css:!0},baseListCell:{flexBasis:"xdl72j9",flexGrow:"x1iyjqo2",flexShrink:"x2lah0s",minHeight:"x1mq37bv",paddingTop:"x16fjczr",paddingBottom:"x81gnnc",$$css:!0},endAddOnSpacing:{marginEnd:"xq8finb",$$css:!0},listItemBorder:{":first-child_borderTopEndRadius":"x19cbwz6",":first-child_borderTopStartRadius":"x79zeqe",":last-child_borderBottomEndRadius":"xgugjxj",":last-child_borderBottomStartRadius":"x2oemzd",$$css:!0},listItemPressable:{display:"x1lliihq",position:"x1n2onr6",$$css:!0},menuItemMargin:{marginStart:"xurdmbc",marginEnd:"xsk6scu",marginLeft:null,marginRight:null,$$css:!0},menuItemPressableOverlay:{borderTopStartRadius:"xq1qbyp",borderTopEndRadius:"x1kqsfds",borderBottomEndRadius:"x1thooz4",borderBottomStartRadius:"xy76ugz",$$css:!0},metaStartAddOnSpacing:{marginStart:"xsgj6o6",$$css:!0},metaText:{marginBottom:"xjpr12u",paddingTop:"x1nn3v0j",$$css:!0},metaTextOverride:{paddingTop:"x96k8nx",$$css:!0},pressable:{borderTopStartRadius:"x168nmei",borderTopEndRadius:"x13lgxp2",borderBottomEndRadius:"x5pf9jr",borderBottomStartRadius:"xo71vjh",display:"x78zum5",flexDirection:"xdt5ytf",minHeight:"x1mq37bv",":first-child_borderTopEndRadius":"x19cbwz6",":first-child_borderTopStartRadius":"x79zeqe",":last-child_borderBottomEndRadius":"xgugjxj",":last-child_borderBottomStartRadius":"x2oemzd",$$css:!0},selected:{backgroundColor:"x1av1boa",$$css:!0},startAddOnSpacing:{marginStart:"x16n37ib",$$css:!0},startIndentStyles:{display:"x1rg5ohu",$$css:!0},withAddon:{paddingTop:"x1gw22gp",paddingBottom:"x188425o",$$css:!0}};e=j.forwardRef(a);function a(a,b){a=babelHelpers["extends"]({},a);var d=a.addOnBottom,e=a.addOnEnd,f=a.addOnEndVerticalAlign,g=a.addOnEndXStyle,i=a.addOnStart,t=a.addOnStartSize,u=a.addOnStartVerticalAlign;u=u===void 0?"top":u;var aa=a["aria-checked"],v=a["aria-label"],w=a["aria-selected"],x=a.badge,ba=a.contentId,y=a.contentVerticalAlign;y=y===void 0?"center":y;var ca=a.contentXStyle,z=a.disabled;z=z===void 0?!1:z;var A=a.hasBottomDivider;A=A===void 0?!1:A;var B=a.linkProps,C=a.meta,D=a.metaAddOnStart,da=a.metaAddOnStartXStyle,ea=a.metaMaxLines,E=a.onPress,fa=a.pressableId,ga=a.role,F=a.selected;F=F===void 0?!1:F;var G=a.startIndent,H=a.subtitle,I=a.subtitleColor;I=I===void 0?"secondaryText":I;var ha=a.subtitleMaxLines,J=a.testid;J=a.title;var K=a.titleColor;K=K===void 0?"primaryText":K;var ia=a.titleMaxLines,ja=a.topText,L=a.topTextColor;L=L===void 0?"secondaryText":L;var ka=a.topTextMaxLines,M=a.visuallyFocused,N=M===void 0?!1:M;M=a.withLabelElement;a=M===void 0?!1:M;var O=n(null);M=n(null);var P=k(c("CDSListTruncationLimitContext")),Q=k(c("CDSListCellRefContext")),R=k(c("CDSMenuItemRoleContext")),S=E!=null||B!=null||a,T=k(c("CometCompositeStructureContext"));T=T.role;T=T==="list";b=c("useMergeRefs")(b,O,Q!=null&&P&&!S?Q:null);M=c("useMergeRefs")(M,Q!=null&&P?Q:null);P=o(null);var U=P[0],la=P[1],V=B!=null;Q=i!=null||e!=null;P=E!=null||V;var W=n(!0);l(function(){var a=!W.current;W.current=!1;var b=O.current;if(!N||b==null)return;b.scrollIntoView==null?void 0:b.scrollIntoView({behavior:a?"smooth":"auto",block:"nearest"})},[N]);var X=m(function(){if(v!=null)return v;return V&&U!=null?U:void 0},[v,V,U]);l(function(){if(!V||v!=null)return;var a=O.current;if(a==null){c("FBLogger")("comet_ui").mustfix("List cell ref not set");return}la(a.innerText)},[v,V,H,J]);var Y=c("useCometPressableEventHandlers")({disabled:z}),Z=Y[2],ma=Z.focused,na=Z.focusVisible,oa=Z.hovered;Z=Z.pressed;Y=Y[3];G=G!=null?j.jsx("span",babelHelpers["extends"]({},(h||(h=c("stylex"))).props([s.startIndentStyles,r[G]]))):void 0;var $=j.jsx(c("BaseListCell.react"),{addOnEnd:e,addOnEndVerticalAlign:f,addOnEndXStyle:g,addOnFooter:d,addOnStart:(f=i)!=null?f:G,addOnStartVerticalAlign:u,addOnStartXStyle:t&&q[t],"aria-hidden":V&&X!=null,"aria-label":P?void 0:v,content:j.jsxs("div",babelHelpers["extends"]({},(h||(h=c("stylex"))).props([(i!=null||G!=null)&&s.startAddOnSpacing,e!=null&&s.endAddOnSpacing]),{children:[j.jsx(c("CDSListCellTextPairing.react"),{state:z?"disabled":F?"selected":null,subtitle:H,subtitleColor:I,subtitleMaxLines:ha,title:J,titleColor:K,titleMaxLines:ia,topText:ja,topTextColor:L,topTextMaxLines:ka}),C!=null?j.jsxs(c("BaseRow.react"),{align:"start",verticalAlign:"center",xstyle:[s.metaText,(J!=null||H!=null)&&D==null&&s.metaTextOverride,D!=null&&da],children:[D!=null?D:null,j.jsx(c("CDSText.react"),{color:z?"disabledText":"secondaryText",maxLines:ea,textStyle:"meta",xstyle:D!=null&&s.metaStartAddOnSpacing,children:C})]}):null,x!=null&&j.jsx(c("BaseRow.react"),{align:"start",verticalAlign:"center",xstyle:J!=null||H!=null||C!=null?s.badgeMargin:void 0,children:x})]})),contentId:ba,contentVerticalAlign:y,contentXStyle:ca,ref:b,role:T&&(P||a)?"presentation":void 0,tabIndex:S?void 0:-1,testid:void 0,verticalAlign:"center",xstyle:[s.baseListCell,p["16"],Q&&s.withAddon,s.listItemBorder]});g=A&&j.jsx(c("BaseDivider.react"),{ariaHidden:!0});if(a)return j.jsxs(j.Fragment,{children:[j.jsxs("label",babelHelpers["extends"]({},Y,{className:(h||(h=c("stylex")))([s.listItemPressable,s.listItemBorder]),ref:M,tabIndex:-1,children:[$,j.jsx(c("CometPressableOverlay.react"),{focusRingPosition:"inset",focusVisible:ma&&na||N,hovered:oa,pressed:Z,showFocusRing:!0,xstyle:R!=null&&s.menuItemPressableOverlay})]})),g]});if(!P)return j.jsxs(j.Fragment,{children:[$,g]});d=j.jsx(c("CometPressable.react"),{"aria-checked":aa,"aria-label":X,"aria-selected":w!=null?w:F||void 0,disabled:z,id:fa,linkProps:B,onPress:E,overlayDisabled:!0,ref:M,role:ga,suppressFocusRing:!0,xstyle:[s.pressable,F&&s.selected,R!=null&&s.menuItemMargin],children:function(a){return j.jsxs(j.Fragment,{children:[$,j.jsx(c("CometPressableOverlay.react"),{focusRingPosition:"inset",focusVisible:a.focused&&a.focusVisible||N,hovered:a.hovered,pressed:a.pressed,showFocusRing:!0,xstyle:R!=null&&s.menuItemPressableOverlay})]})}});return j.jsxs(j.Fragment,{children:[T?j.jsx("div",babelHelpers["extends"]({role:"listitem"},{className:"x19cbwz6 x79zeqe xgugjxj x2oemzd"},{children:d})):d,g]})}a.displayName=a.name+" [from "+f.id+"]";d=e;g["default"]=d}),98);
__d("CDSListCell.react",["BaseIsDecorativeContext","CDSListCellImpl.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");b=i.forwardRef(a);function a(a,b){var d=a.addOnEnd;a=babelHelpers.objectWithoutPropertiesLoose(a,["addOnEnd"]);return i.jsx(c("BaseIsDecorativeContext").Provider,{value:!0,children:i.jsx(c("CDSListCellImpl.react"),babelHelpers["extends"]({ref:b},a,{addOnEnd:d}))})}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("CDSListImpl.react",["fbt","BaseDivider.react","CDSListCell.react","CDSListCellRefContext","CDSListTruncationLimitContext","FocusManager","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useEffect,m=b.useRef,n=b.useState;function o(a,b){switch(b.type){case"see-more":return a?h._(/*BTDS*/"__JHASH__ABCuiW0zlu1__JHASH__"):h._(/*BTDS*/"__JHASH__weOnbBCbOZ7__JHASH__");case"see-all":return h._(/*BTDS*/"__JHASH__mwPqhb-cfl0__JHASH__")}}function p(a,b,d,e,f){var g=typeof b==="function"?a.map(function(c,d){return b({index:d,item:c,props:{hasBottomDivider:d<a.length-1,key:d}})}):j.Children.toArray(b),h=f!=null&&(f==null?void 0:f.itemLimit)<g.length;if(!h)return g;h=f!=null&&!d?g.slice(0,f.itemLimit):g;return h.filter(Boolean).map(function(a,b){return d&&b===(f==null?void 0:f.itemLimit)||!d&&b===0?j.jsx(c("CDSListTruncationLimitContext").Provider,{value:!0,children:a},"item-limit"):a}).concat((f==null?void 0:f.type)==="see-more"?j.jsxs(j.Fragment,{children:[d&&j.jsx(c("BaseDivider.react"),{}),j.jsx(c("CDSListCell.react"),{onPress:e,title:o(d,f),titleColor:"blueLink"})]},"see-more-cell"):[]).concat((f==null?void 0:f.type)==="see-all"?j.jsx(c("CDSListCell.react"),{linkProps:f.linkProps,onPress:f.onPress,title:o(d,f),titleColor:"blueLink"},"see-all-cell"):[])}function a(a){var b=a.children,e=a.truncationConfig;a=a.items;a=a===void 0?[]:a;var f=n(!1),g=f[0],h=f[1];f=k(function(){h(function(a){return!a})},[]);var i=(e==null?void 0:e.type)!=="see-all"&&g,o=m(),q=m(i);g=p(a,b,i,f,e);l(function(){q.current!==i&&(e==null?void 0:e.type)!=="see-all"&&o.current!=null&&d("FocusManager").focusElement(o.current),q.current=i},[i,e==null?void 0:e.type]);return j.jsx(c("CDSListCellRefContext").Provider,{value:o,children:g})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CDSList.react",["BaseTheme.react","CDSListContainer.react","CDSListImpl.react","CometCompositeStructureContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useMemo,k={dark:{"card-background":"transparent","list-border-color":"var(--divider)","list-border-width":"1px","shadow-list":"none"},light:{"card-background":"transparent","list-border-color":"var(--divider)","list-border-width":"1px","shadow-list":"none"},type:"VARIABLES"};function a(a){var b=a.children,d=a.items,e=a.outlined_TO_BE_REMOVED;e=e===void 0?!1:e;var f=a.role,g=f===void 0?"list":f;f=a.truncationConfig;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","items","outlined_TO_BE_REMOVED","role","truncationConfig"]);var h=j(function(){return{role:g}},[g]);e=i.jsx(l,{outlined:e,children:i.jsx(c("CDSListContainer.react"),babelHelpers["extends"]({},a,{role:g,children:i.jsx(c("CDSListImpl.react"),{items:d,truncationConfig:f,children:b})}))});return g==="list"?i.jsx(c("CometCompositeStructureContext").Provider,{value:h,children:e}):e}a.displayName=a.name+" [from "+f.id+"]";function l(a){var b=a.children;a=a.outlined;return a?i.jsx(c("BaseTheme.react"),{config:k,children:b}):b}l.displayName=l.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SupportPortalsCurrentLocationImplementationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7788507054528550"}),null);