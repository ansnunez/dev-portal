(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),c=(n(0),n(237)),o={id:"dev-tools-faucet",title:"Faucet"},l={id:"dev-tools-faucet",isDocsHomePage:!1,title:"Faucet",description:"Testnet faucet via Nucleus Wallet",source:"@site/docs/dev-tools-faucet.md",permalink:"/docs/dev-tools-faucet",editUrl:"https://github.com/Zilliqa/dev-portal/docs/dev-tools-faucet.md",sidebar:"someSidebar2",previous:{title:"Explorer",permalink:"/docs/dev-tools-explorer"},next:{title:"Signing",permalink:"/docs/dev-txn-signing"}},i=[{value:"Testnet faucet via Nucleus Wallet",id:"testnet-faucet-via-nucleus-wallet",children:[]},{value:"Source code",id:"source-code",children:[]}],u={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"testnet-faucet-via-nucleus-wallet"},"Testnet faucet via Nucleus Wallet"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"../assets/application/getting-started/nucleus-faucet.png",alt:"Nucleus Wallet Faucet"}))),Object(c.b)("p",null,"In order to deploy a contract to Zilliqa's testnet and send transactions, you will need testnet $ZIL in your account."),Object(c.b)("p",null,"Enter the your wallet address on nucleus wallet's faucet website, you will receive 300 testnet $ZIL once the transaction is confirmed."),Object(c.b)("p",null,"The faucet is accessible at ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://dev-wallet.zilliqa.com/faucet"}),"https://dev-wallet.zilliqa.com/faucet")),Object(c.b)("h2",{id:"source-code"},"Source code"),Object(c.b)("p",null,"If you are interested in looking into the implementation of the faucet, you can access the GitHub repository can be found at ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Zilliqa/nucleus-wallet"}),"https://github.com/Zilliqa/nucleus-wallet")))}s.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||f[d]||c;return n?a.a.createElement(b,l(l({ref:t},u),{},{components:n})):a.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);