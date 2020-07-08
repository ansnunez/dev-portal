(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),i=(r(0),r(239)),a={id:"core-por",title:"Proof of Reputation"},c={id:"contributors/core-por",isDocsHomePage:!1,title:"Proof of Reputation",description:"The DS reputation feature uses node performance to regulate node tenure within the DS committee. In a similar manner, the PoW submission selection process is designed to prioritize nodes that generated more cosignatures (i.e., actively perform consensus to generate blocks) during their time in the network. When the Mainnet is full (i.e., the 2400-node limit is reached), the PoW submissions from nodes with higher priority ratings will be processed first. This feature is referred to as Proof of Reputation (PoR).",source:"@site/docs/contributors/core-por.md",permalink:"/dev-portal/docs/contributors/core-por",editUrl:"https://github.com/Zilliqa/dev-portal/docs/contributors/core-por.md",sidebar:"ContributorsSidebar",previous:{title:"Difficulty Adjustment",permalink:"/dev-portal/docs/contributors/core-difficulty-adjustment"},next:{title:"Coinbase Rewards",permalink:"/dev-portal/docs/contributors/core-coinbase"}},s=[{value:"PoR Procedure",id:"por-procedure",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-portal/docs/contributors/core-ds-reputation"}),"DS reputation")," feature uses node performance to regulate node tenure within the DS committee. In a similar manner, the PoW submission selection process is designed to prioritize nodes that generated more cosignatures (i.e., actively perform consensus to generate blocks) during their time in the network. When the Mainnet is full (i.e., the 2400-node limit is reached), the PoW submissions from nodes with higher priority ratings will be processed first. This feature is referred to as Proof of Reputation (PoR)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Selection by reputation only takes effect when the number of PoW submissions exceeds ",Object(i.b)("inlineCode",{parentName:"p"},"MAX_SHARD_NODE_NUM")," in ",Object(i.b)("inlineCode",{parentName:"p"},"constants.xml"),".")),Object(i.b)("h2",{id:"por-procedure"},"PoR Procedure"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"When we bootstrap the system, the reputation of every node is 0"),Object(i.b)("li",{parentName:"ol"},"Every microblock or Tx block cosigned by a node increases its reputation by one. The reputation is capped at 4096"),Object(i.b)("li",{parentName:"ol"},"If in any DS epoch a node fails to join the network, its reputation will be reset to 0"),Object(i.b)("li",{parentName:"ol"},"At the beginning of each DS epoch, the DS leader calls ",Object(i.b)("inlineCode",{parentName:"li"},"CalculateNodePriority()")," to calculate the node priority based on the node reputation. The nodes with higher priority will be considered first for adding to the sharding structure"),Object(i.b)("li",{parentName:"ol"},"When the DS backups receive the DS block announcement, they call ",Object(i.b)("inlineCode",{parentName:"li"},"VerifyNodePriority()")," to calculate the node priority similarly and verify that the nodes in the sharding structure have met the minimum reputation/priority requirement"),Object(i.b)("li",{parentName:"ol"},"When a new DS leader is selected, the sharding structure is sent to it. The new DS leader can get the reputation of each node from the sharding structure")))}u.isMDXComponent=!0},239:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);