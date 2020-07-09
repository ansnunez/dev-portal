(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{191:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),c=(r(0),r(241)),a={id:"core-websocket-server",title:"WebSocket Server"},i={id:"contributors/core-websocket-server",isDocsHomePage:!1,title:"WebSocket Server",description:"---",source:"@site/docs/contributors/core-websocket-server.md",permalink:"/dev-portal/docs/contributors/core-websocket-server",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/contributors/core-websocket-server.md",sidebar:"ContributorsSidebar",previous:{title:"DS Reputation",permalink:"/dev-portal/docs/contributors/core-ds-reputation"},next:{title:"Transaction Dispatch",permalink:"/dev-portal/docs/contributors/core-transaction-dispatch"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("hr",null),Object(c.b)("p",null,"A lookup or seed node has the option (using ",Object(c.b)("inlineCode",{parentName:"p"},"ENABLE_WEBSOCKET"),") to enable a WebSocket server on port ",Object(c.b)("inlineCode",{parentName:"p"},"WEBSOCKET_PORT")," (4401 by default). The WebSocket server provides users (e.g., SDK clients) with a subscription-based data querying model as an alternative to polling."),Object(c.b)("p",null,"Interacting with the WebSocket server is detailed in our ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"dev-tools-websockets.md"}),"Application Developers")," section."),Object(c.b)("p",null,"The WebSocket server is implemented in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa/blob/master/src/libServer/WebsocketServer.h"}),"libServer")," in the Zilliqa core, using the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zaphoyd/websocketpp"}),"WebSocket++")," C++ library."))}l.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(a,".").concat(d)]||b[d]||u[d]||c;return r?o.a.createElement(f,i(i({ref:t},s),{},{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);