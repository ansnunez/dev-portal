(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(237)),i={id:"core-status-server",title:"Status Server"},c={id:"core-status-server",isDocsHomePage:!1,title:"Status Server",description:"Every Zilliqa node has an API server listening on port STATUSRPCPORT (4301 by default). This server can only be accessed on localhost.",source:"@site/docs/core-status-server.md",permalink:"/docs/core-status-server",editUrl:"https://github.com/Zilliqa/dev-portal/docs/core-status-server.md",sidebar:"someSidebar5",previous:{title:"Diagnostic Data",permalink:"/docs/core-diagnostic-data"}},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every Zilliqa node has an API server listening on port ",Object(o.b)("inlineCode",{parentName:"p"},"STATUS_RPC_PORT")," (4301 by default). This server can only be accessed on localhost."),Object(o.b)("p",null,"This status server provides useful information about the operational parameters of the node. It also enables the user to control the behavior of the node along different aspects of its operation (e.g., stopping PoW mining at the end of the epoch)."),Object(o.b)("p",null,"The utility script ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa/blob/master/scripts/miner_info.py"}),"miner_info.py")," allows interacting with the status server."),Object(o.b)("p",null,"Among the available commands supported by the utility script are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"checktxn"),": Checks if a transaction is in the node's transaction memory pool"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"difficulty"),": Returns the latest difficulty for PoW mining"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disable_pow"),": Prevents a node from performing PoW mining at the next epoch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ds"),": Returns the list of members of the DS committee"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ds_difficulty"),": Returns the latest DS difficulty for PoW mining"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"dsepoch"),": Returns the latest DS epoch number"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"epoch"),": Returns the latest Tx epoch number"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"state"),": Returns the state of this node according to its state machine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"type"),": Returns the node type (e.g., DS or shard)")))}p.isMDXComponent=!0},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);