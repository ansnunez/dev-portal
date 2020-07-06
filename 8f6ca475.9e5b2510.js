(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(2),r=n(9),a=(n(0),n(237)),o={id:"mining-getting-started",title:"Getting Started"},l={id:"mining-getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Participating as a Miner",source:"@site/docs/mining-getting-started.md",permalink:"/docs/mining-getting-started",editUrl:"https://github.com/Zilliqa/dev-portal/docs/mining-getting-started.md",sidebar:"someSidebar3",next:{title:"Running the Zilliqa Client",permalink:"/docs/mining-zilclient"}},c=[{value:"Participating as a Miner",id:"participating-as-a-miner",children:[{value:"Proxy Mining",id:"proxy-mining",children:[]},{value:"Mining Pools",id:"mining-pools",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"participating-as-a-miner"},"Participating as a Miner"),Object(a.b)("p",null,"There are theoretically multiple ways to participate in the Zilliqa Mainnet as a miner."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Operating Zilliqa Client using the default settings for CPU mining"),Object(a.b)("li",{parentName:"ol"},"Operating Zilliqa Client using OpenCL or CUDA settings for GPU mining"),Object(a.b)("li",{parentName:"ol"},"Operating a proxy mining setup using Zilliqa Client, ZilMiner, and Zilliqa Mining Proxy"),Object(a.b)("li",{parentName:"ol"},"Participating in mining pools")),Object(a.b)("p",null,"However, at the present level of mining difficulty in the Mainnet, the first two ways are no longer possible."),Object(a.b)("h3",{id:"proxy-mining"},"Proxy Mining"),Object(a.b)("p",null,"To proceed with proxy mining:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"An introduction to proxy mining is provided ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/mining-proxy"}),"here")),Object(a.b)("li",{parentName:"ol"},"The Zilliqa Client instructions can be found ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/mining-zilclient"}),"here")),Object(a.b)("li",{parentName:"ol"},"The ZilMiner instructions can be found ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/mining-zilminer"}),"here"))),Object(a.b)("h3",{id:"mining-pools"},"Mining Pools"),Object(a.b)("p",null,"Zilliqa's use of Ethereum's Ethash algorithm for PoW allows existing mining pool operators to easily integrate mining on Zilliqa, giving retail miners another way to participate in the Zilliqa Mainnet."),Object(a.b)("p",null,"The Zilliqa page on ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://miningpoolstats.stream/zilliqa"}),"MiningPoolStats")," has a list of mining pools that support Zilliqa. Please refer to the pool's website for specific instructions on how to participate."))}s.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=i,m=u["".concat(o,".").concat(b)]||u[b]||g[b]||a;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);