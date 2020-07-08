(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),i=(n(0),n(239)),a={id:"core-node-operation",title:"General Node Operation"},c={id:"contributors/core-node-operation",isDocsHomePage:!1,title:"General Node Operation",description:"A Zilliqa node requires the following information during launch:",source:"@site/docs/contributors/core-node-operation.md",permalink:"/dev-portal/docs/contributors/core-node-operation",editUrl:"https://github.com/Zilliqa/dev-portal/docs/contributors/core-node-operation.md",sidebar:"ContributorsSidebar",previous:{title:"Introduction",permalink:"/dev-portal/docs/contributors/core-intro"},next:{title:"Consensus",permalink:"/dev-portal/docs/contributors/core-consensus"}},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Zilliqa node requires the following information during launch:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Schnorr key pair"),Object(i.b)("li",{parentName:"ul"},"IP address and listening port"),Object(i.b)("li",{parentName:"ul"},"Sync type"),Object(i.b)("li",{parentName:"ul"},"Whether to retrieve persistence from S3")),Object(i.b)("p",null,"Most other operational parameters are defined in the file ",Object(i.b)("inlineCode",{parentName:"p"},"constants.xml"),"."),Object(i.b)("p",null,"During launch, a node will assume its ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"basics-zil-nodes.md"}),"identity")," as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"New, shard, or DS node based on sync type and bootstrap conditions (e.g., ",Object(i.b)("inlineCode",{parentName:"li"},"DSInstructionType::SETPRIMARY"),")"),Object(i.b)("li",{parentName:"ul"},"DS or shard guard node if ",Object(i.b)("inlineCode",{parentName:"li"},"GUARD_MODE=true")," and public key is in ",Object(i.b)("inlineCode",{parentName:"li"},"ds_guard")," or ",Object(i.b)("inlineCode",{parentName:"li"},"shard_guard")," list in ",Object(i.b)("inlineCode",{parentName:"li"},"constants.xml")),Object(i.b)("li",{parentName:"ul"},"Lookup node if ",Object(i.b)("inlineCode",{parentName:"li"},"LOOKUP_NODE_MODE=true")),Object(i.b)("li",{parentName:"ul"},"Seed node if ",Object(i.b)("inlineCode",{parentName:"li"},"LOOKUP_NODE_MODE=true")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ARCHIVAL_LOOKUP=true"))),Object(i.b)("p",null,"A node will generally do the following upon startup:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start the incoming and outgoing message queue managing threads"),Object(i.b)("li",{parentName:"ul"},"Populate some information (e.g., key and IP, list of guard nodes, list of initial DS committee nodes)"),Object(i.b)("li",{parentName:"ul"},"Set up the persistence (e.g., retrieve data from AWS S3)"),Object(i.b)("li",{parentName:"ul"},"Sync up according to sync type specified, and continue operation from there")),Object(i.b)("p",null,"Refer to the other sections for an in-depth description of the operation of the various features."))}p.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);