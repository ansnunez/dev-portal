(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(241)),i={id:"basics-zil-consensus",title:"Consensus Mechanism"},s={id:"basics/basics-zil-consensus",isDocsHomePage:!1,title:"Consensus Mechanism",description:"---",source:"@site/docs/basics/basics-zil-consensus.md",permalink:"/dev-portal/docs/basics/basics-zil-consensus",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/basics/basics-zil-consensus.md",sidebar:"BasicsSideBar",previous:{title:"Sharding Mechanism",permalink:"/dev-portal/docs/basics/basics-zil-sharding"},next:{title:"Schnorr Signatures",permalink:"/dev-portal/docs/basics/basics-zil-schnorr-signatures"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"The Zilliqa network is composed of one DS Committee (a special type of shard), and ",Object(o.b)("inlineCode",{parentName:"p"},"n")," normal shards. Each shard has a number of nodes, with one node being a ",Object(o.b)("inlineCode",{parentName:"p"},"leader")," and ",Object(o.b)("inlineCode",{parentName:"p"},"k")," number of ",Object(o.b)("inlineCode",{parentName:"p"},"backups"),"."),Object(o.b)("p",null,"Broadly, each shard runs an algorithm called ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://pmg.csail.mit.edu/papers/osdi99.pdf"}),"practical Byzantine fault tolerance (pBFT)")," to achieve consensus on the state of the blockchain at any point. A rough outline is as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Pre-prepare: the ",Object(o.b)("inlineCode",{parentName:"li"},"leader")," announces the state of the blockchain it has to all ",Object(o.b)("inlineCode",{parentName:"li"},"backup")," nodes in the shard as a ",Object(o.b)("strong",{parentName:"li"},"pre-prepare")," message."),Object(o.b)("li",{parentName:"ol"},"Prepare: each node receives and validates the state received from the ",Object(o.b)("inlineCode",{parentName:"li"},"leader")," in the pre-prepare phase, and multicasts its decision as a ",Object(o.b)("strong",{parentName:"li"},"prepare")," message to the rest of the nodes in the shard."),Object(o.b)("li",{parentName:"ol"},"Commit: upon receiving a valid ",Object(o.b)("strong",{parentName:"li"},"prepare")," message from a super majority (2/3) of nodes, it multicasts a ",Object(o.b)("strong",{parentName:"li"},"commit")," message to all other nodes. Once a ",Object(o.b)("strong",{parentName:"li"},"commit")," message is recieved from a super majority, the node records the new state.")))}p.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);