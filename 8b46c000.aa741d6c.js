(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(237)),i={id:"core-transaction-dispatch",title:"Transaction Dispatch"},c={id:"core-transaction-dispatch",isDocsHomePage:!1,title:"Transaction Dispatch",description:"From creation to confirmation, a transaction lifecycle proceeds in the following sequence:",source:"@site/docs/core-transaction-dispatch.md",permalink:"/dev-portal/docs/core-transaction-dispatch",editUrl:"https://github.com/Zilliqa/dev-portal/docs/core-transaction-dispatch.md",sidebar:"someSidebar5",previous:{title:"WebSocket Server",permalink:"/dev-portal/docs/core-websocket-server"},next:{title:"Multipliers",permalink:"/dev-portal/docs/core-multipliers"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"From creation to confirmation, a transaction lifecycle proceeds in the following sequence:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"An end user sends a ",Object(a.b)("inlineCode",{parentName:"li"},"CreateTransaction")," JSON request through the Zilliqa API. The transaction JSON contains the essential information about the transaction"),Object(a.b)("li",{parentName:"ol"},"The seed node that receives the request validates its contents and converts it into the core's transaction definition format"),Object(a.b)("li",{parentName:"ol"},"The seed node forwards this transaction (and other processed transaction requests) to a lookup node at intervals determined by ",Object(a.b)("inlineCode",{parentName:"li"},"SEED_TXN_COLLECTION_TIME_IN_SEC")),Object(a.b)("li",{parentName:"ol"},"The lookup node that receives the forwarded transaction decides which shard should process the transaction, and adds it to the transaction packet meant for that shard"),Object(a.b)("li",{parentName:"ol"},"At the start of every Tx epoch (plus a short delay determined by ",Object(a.b)("inlineCode",{parentName:"li"},"LOOKUP_DELAY_SEND_TXNPACKET_IN_MS"),"), the lookup node dispatches its transaction packets to all the shards (including the DS committee)"),Object(a.b)("li",{parentName:"ol"},"The transaction packets are gossiped within the shards. Each node buffers the packet after receipt"),Object(a.b)("li",{parentName:"ol"},"Within the interval determined by ",Object(a.b)("inlineCode",{parentName:"li"},"TX_DISTRIBUTE_TIME_IN_MS"),", each node processes transaction packets buffered from the previous Tx epoch. Processing packets involves validating each transaction and adding these into the node's transaction memory pool"),Object(a.b)("li",{parentName:"ol"},"After the interval, the nodes (shards) first perform microblock, and then Tx block (DS committee) consensus. During consensus, transactions in the memory pool are consumed in a deterministic manner"),Object(a.b)("li",{parentName:"ol"},"After creation of the Tx block, the shard and DS nodes commit the transactions to the blockchain and forward the transaction receipts to the lookup nodes (and the seed nodes, through the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/dev-portal/docs/core-multipliers"}),"multipliers"),")"),Object(a.b)("li",{parentName:"ol"},"The end user queries the transaction status through the Zilliqa API. The seed node that receives the request uses the transaction receipt to inform the user of the transaction's status")))}p.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);