(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{25:function(e,a,t){"use strict";var r=t(1);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return n.default}});var n=r(t(406))},405:function(e,a,t){__NEXT_REGISTER_PAGE("/",function(){return e.exports=t(414),{page:e.exports.default}})},406:function(e,a,t){"use strict";var r=t(1);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var n=r(t(5)),l=r(t(6)),o=r(t(0)),i=(r(t(2)),r(t(19))),c=(t(14),r(t(21))),s=r(t(15)),m={root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}};function d(e){var a=e.action,t=e.avatar,r=e.classes,c=e.className,m=e.component,d=e.disableTypography,u=e.subheader,p=e.subheaderTypographyProps,h=e.title,f=e.titleTypographyProps,g=(0,l.default)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),b=h;null==b||b.type===s.default||d||(b=o.default.createElement(s.default,(0,n.default)({variant:t?"body2":"headline",internalDeprecatedVariant:!0,className:r.title,component:"span"},f),b));var y=u;return null==y||y.type===s.default||d||(y=o.default.createElement(s.default,(0,n.default)({variant:t?"body2":"body1",className:r.subheader,color:"textSecondary",component:"span"},p),y)),o.default.createElement(m,(0,n.default)({className:(0,i.default)(r.root,c)},g),t&&o.default.createElement("div",{className:r.avatar},t),o.default.createElement("div",{className:r.content},b,y),a&&o.default.createElement("div",{className:r.action},a))}a.styles=m,d.defaultProps={component:"div",disableTypography:!1};var u=(0,c.default)(m,{name:"MuiCardHeader"})(d);a.default=u},407:function(e,a,t){"use strict";var r=t(1);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var n=r(t(5)),l=r(t(20)),o=r(t(6)),i=r(t(0)),c=(r(t(2)),r(t(19))),s=r(t(21)),m=t(114),d=r(t(180)),u=t(119),p=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,m.fade)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,m.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,m.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}};function h(e){var a,t=e.children,r=e.classes,s=e.className,m=e.color,p=e.disabled,h=(0,o.default)(e,["children","classes","className","color","disabled"]);return i.default.createElement(d.default,(0,n.default)({className:(0,c.default)(r.root,(a={},(0,l.default)(a,r["color".concat((0,u.capitalize)(m))],"default"!==m),(0,l.default)(a,r.disabled,p),a),s),centerRipple:!0,focusRipple:!0,disabled:p},h),i.default.createElement("span",{className:r.label},t))}a.styles=p,h.defaultProps={color:"default",disabled:!1};var f=(0,s.default)(p,{name:"MuiIconButton"})(h);a.default=f},414:function(e,a,t){"use strict";t.r(a);var r,n=t(0),l=t.n(n),o=t(8),i=t(3),c=t(12),s=t.n(c),m=t(25),d=t.n(m),u=t(120),p=t.n(u),h=t(48),f=t.n(h);function g(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var b,y={outerDiv:{marginLeft:"30%",marginTop:"50px",width:"40%"},highlight:(r={fontSize:18,lineHeight:1.1},g(r,"fontSize","2.35rem"),g(r,"fontFamily","gruppo"),g(r,"fontWeight","700"),g(r,"color","#783f8e"),g(r,"&:hover",{color:"#783f8e"}),r),body:{color:"#212121",lineHeight:1.1,margin:"0 0 1rem",fontSize:"2.35rem",fontFamily:"gruppo",fontWeight:"700"},subheader:{color:"#212121",lineHeight:1.1,margin:"0 0 1rem",fontSize:"1.75rem",fontFamily:"gruppo"},card:{marginTop:"30px",maxWidth:"800px",fontSize:"2.35rem"},media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},avatar:{backgroundColor:p.a[500]}},v=Object(o.withStyles)(y)(function(e){var a=e.classes;return l.a.createElement("div",{className:a.outerDiv,id:"blog"},l.a.createElement("div",null,l.a.createElement(i.l,{size:"3rem",style:{marginBottom:"-8px"}}),l.a.createElement("a",{className:a.highlight,style:{marginLeft:"10px",marginTop:"-5px"}},"Blog")),l.a.createElement(s.a,{className:a.card},l.a.createElement(d.a,{classes:{title:a.body,subheader:a.subheader},action:l.a.createElement("a",{href:"https://krarvindblog.wordpress.com/2014/03/14/robot-basics/"},l.a.createElement(f.a,null,l.a.createElement(i.b,null))),title:"Robot Basics",subheader:"Mar 14, 2014"})),l.a.createElement(s.a,{className:a.card},l.a.createElement(d.a,{classes:{title:a.body,subheader:a.subheader},action:l.a.createElement("a",{href:"https://krarvindblog.wordpress.com/2014/01/21/opportunity-rover/"},l.a.createElement(f.a,null,l.a.createElement(i.b,null))),title:"Opportunity Rover",subheader:"Jan 21, 2014"})),l.a.createElement(s.a,{className:a.card},l.a.createElement(d.a,{classes:{title:a.body,subheader:a.subheader},action:l.a.createElement("a",{href:"https://krarvindblog.wordpress.com/2014/05/06/why-choose-engineering/"},l.a.createElement(f.a,null,l.a.createElement(i.b,null))),title:"Why choose Engineering?",subheader:"May 06, 2014"})),l.a.createElement(s.a,{className:a.card},l.a.createElement(d.a,{classes:{title:a.body,subheader:a.subheader},action:l.a.createElement("a",{href:"https://krarvindblog.wordpress.com/2014/06/16/difference-between-div-and-span-tag/"},l.a.createElement(f.a,null,l.a.createElement(i.b,null))),title:"Difference between Div and Span Tag",subheader:"June 16, 2014"})))}),E=t(24),x=t.n(E),w=t(15),N=t.n(w);function z(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var S,k={outerDiv:{marginLeft:"25%",marginTop:"50px",width:"50%"},highlight:(b={fontSize:18,lineHeight:1.1},z(b,"fontSize","2.35rem"),z(b,"fontFamily","gruppo"),z(b,"fontWeight","700"),z(b,"color","#783f8e"),z(b,"&:hover",{color:"#783f8e"}),b),body:{color:"#212121",lineHeight:1.1,margin:"0 0 1rem",fontSize:"2.35rem",fontFamily:"gruppo",fontWeight:"700"},subheader:{color:"#212121",lineHeight:1.1,margin:"0 0 1rem",fontSize:"1.75rem",fontFamily:"gruppo"},card:{marginTop:"30px",maxWidth:"800px",fontSize:"2.35rem"}},T=Object(o.withStyles)(k)(function(e){var a=e.classes;return l.a.createElement("div",{className:a.outerDiv,id:"projects"},l.a.createElement("div",null,l.a.createElement(i.e,{size:"3rem",style:{marginBottom:"-8px"}}),l.a.createElement("a",{className:a.highlight,style:{marginLeft:"10px",marginTop:"-5px"}},"Projects")),l.a.createElement(s.a,{className:a.card},l.a.createElement(d.a,{classes:{title:a.body,subheader:a.subheader},title:"Foodie - Recommendation System",subheader:"Nov 2015 to May 2016"}),l.a.createElement(x.a,null,l.a.createElement(N.a,{variant:"h5",className:a.body},"Web based recommendation system for local restaurants and eateries based on the user preference."))),l.a.createElement(s.a,{className:a.card},l.a.createElement(d.a,{classes:{title:a.body,subheader:a.subheader},title:"Retail Price Analytic",subheader:"Jun 2016 to Feb 2017"}),l.a.createElement(x.a,null,l.a.createElement(N.a,{variant:"h5",className:a.body},"Developed a system to predict and analyze market price of the product based on characteristics. It was built with technologies such as back propagation neural network algorithm and sentimental analysis."))),l.a.createElement(s.a,{className:a.card},l.a.createElement(d.a,{classes:{title:a.body,subheader:a.subheader},title:"LogBot",subheader:"Jul 2017 to Oct 2017"}),l.a.createElement(x.a,null,l.a.createElement(N.a,{variant:"h5",className:a.body},"Worked on a Automated chat bot using Google Puppeteer, which would fetch out user requested logs, once the given auth credentials."))))});function P(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var O,j={outerDiv:{marginLeft:"25%",marginTop:"50px",width:"50%"},highlight:(S={fontSize:18,lineHeight:1.1},P(S,"fontSize","2.35rem"),P(S,"fontFamily","gruppo"),P(S,"fontWeight","700"),P(S,"color","#783f8e"),P(S,"&:hover",{color:"#783f8e"}),S),body:{color:"#212121",lineHeight:1.1,margin:"0 0 1rem",fontSize:"2.35rem",fontFamily:"gruppo",fontWeight:"700"},subheader:{color:"#212121",lineHeight:1.1,margin:"0 0 1rem",fontSize:"1.75rem",fontFamily:"gruppo"},card:{marginTop:"30px",maxWidth:"800px",fontSize:"2.35rem"}},R=Object(o.withStyles)(j)(function(e){var a=e.classes;return l.a.createElement("div",{className:a.outerDiv,id:"publication"},l.a.createElement("div",null,l.a.createElement(i.j,{size:"3rem",style:{marginBottom:"-8px"}}),l.a.createElement("a",{className:a.highlight,style:{marginLeft:"10px",marginTop:"-5px"}},"Publication")),l.a.createElement(s.a,{className:a.card},l.a.createElement(d.a,{classes:{title:a.body,subheader:a.subheader},action:l.a.createElement("a",{href:"https://ieeexplore.ieee.org/document/8085696"},l.a.createElement(f.a,null,l.a.createElement(i.b,null))),title:"Retail Price Analytic",subheader:"Mar 2017"}),l.a.createElement(x.a,null,l.a.createElement(N.a,{variant:"h5",className:a.body},"Presented a paper titled “Retail price analytics using back propagation neural network and sentimental analysis” in the fourth international conference on signal processing, communication, and networking ","( ICSCN )"," at MIT, Chennai"))))}),W=t(84),C=t.n(W);function F(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var H={outerDiv:{marginLeft:"25%",marginTop:"50px",marginBottom:"50px",width:"50%"},highlight:(O={fontSize:18,lineHeight:1.1},F(O,"fontSize","2.35rem"),F(O,"fontFamily","gruppo"),F(O,"fontWeight","700"),F(O,"color","#783f8e"),F(O,"&:hover",{color:"#783f8e"}),O),body:{color:"#212121",lineHeight:1.1,margin:"0 0 1rem",fontSize:"2.35rem",fontFamily:"gruppo",fontWeight:"700"},subheader:{color:"#212121",lineHeight:1.1,margin:"0 0 1rem",fontSize:"1.75rem",fontFamily:"gruppo"},card:{marginTop:"30px",maxWidth:"800px",fontSize:"2.35rem"}},D=Object(o.withStyles)(H)(function(e){var a=e.classes;return l.a.createElement("div",{className:a.outerDiv,id:"contact"},l.a.createElement("div",null,l.a.createElement(i.a,{size:"3rem",style:{marginBottom:"-8px"}}),l.a.createElement("a",{className:a.highlight,style:{marginLeft:"10px",marginTop:"-5px"}},"Contact")),l.a.createElement(s.a,{className:a.card},l.a.createElement(x.a,null,l.a.createElement(N.a,{variant:"h5",className:a.body},l.a.createElement(i.h,{style:{marginBottom:"-5px"}})," ","Pondicherry, India"),l.a.createElement(N.a,{variant:"h5",className:a.body},l.a.createElement(i.c,{style:{marginBottom:"-5px"}})," ","kraravind1996",l.a.createElement("span",{className:a.highlight},"@"),"gmail.com")),l.a.createElement(C.a,null,l.a.createElement("a",{href:"https://twitter.com/arvindsmvec",style:{marginRight:"10px",marginLeft:"10px"}},l.a.createElement(i.k,{size:"3rem"})),l.a.createElement("a",{href:"https://github.com/aravind-kr/",style:{marginRight:"10px"}},l.a.createElement(i.d,{size:"3rem",color:"#333"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/aravind-k-r-a1775baa/",style:{marginRight:"10px"}},l.a.createElement(i.g,{size:"3rem"})),l.a.createElement("a",{href:"#",style:{marginRight:"10px"}},l.a.createElement(i.i,{size:"3rem",color:"#333"})),l.a.createElement("a",{href:"https://krarvindblog.wordpress.com/",style:{marginLeft:"10px"}},l.a.createElement(i.l,{size:"3rem"})))))});a.default=function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(T,null),l.a.createElement(R,null),l.a.createElement(D,null))}},48:function(e,a,t){"use strict";var r=t(1);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return n.default}});var n=r(t(407))}},[[405,1,0]]]);