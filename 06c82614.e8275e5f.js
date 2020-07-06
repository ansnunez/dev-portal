(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),i=(n(0),n(237)),o={id:"dev-keys-zilpay",title:"ZilPay"},c={id:"dev-keys-zilpay",isDocsHomePage:!1,title:"ZilPay",description:"ZilPay is an open source browser add-on that manages a user\u2019s Zilliqa wallet and can be used on Chrome, Firefox and Opera browsers.",source:"@site/docs/dev-keys-zilpay.md",permalink:"/dev-portal/docs/dev-keys-zilpay",editUrl:"https://github.com/Zilliqa/dev-portal/docs/dev-keys-zilpay.md",sidebar:"someSidebar2",previous:{title:"Introduction",permalink:"/dev-portal/docs/dev-keys-introduction"},next:{title:"Private Key & Keystore File",permalink:"/dev-portal/docs/dev-keys-pkey"}},l=[{value:"Detecting ZilPay",id:"detecting-zilpay",children:[]},{value:"Connecting Your Dapp With ZilPay",id:"connecting-your-dapp-with-zilpay",children:[]},{value:"Accessing User Accounts",id:"accessing-user-accounts",children:[]},{value:"API Reference",id:"api-reference",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ZilPay is an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zilpay/zil-pay"}),"open source")," browser add-on that manages a user\u2019s Zilliqa wallet and can be used on Chrome, Firefox and Opera browsers.\nIt does not store any user's private keys on a remote server. Instead they are password protected and stored on browser storage.\nIt is a non-custodial wallet, meaning, the user has full access and responsibility for their private key. "),Object(i.b)("h2",{id:"detecting-zilpay"},"Detecting ZilPay"),Object(i.b)("p",null,"ZilPay injects a global API into websites visited by its users at\n",Object(i.b)("inlineCode",{parentName:"p"},"window.zilPay"),". This API allows websites to request user login, load data from the blockchain and prompt the user to sign messages and transactions."),Object(i.b)("p",null,"To check if the user has ZilPay installed, here is a sample code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"(typeof window.zilPay !== 'undefined') { /* do something */ }\n")),Object(i.b)("h2",{id:"connecting-your-dapp-with-zilpay"},"Connecting Your Dapp With ZilPay"),Object(i.b)("p",null,"You need to ask once for the user's permission to connect your dApp to their ZilPay wallet. The following is a sample code for requesting the permission"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"window.zilPay.wallet.connect()\n")),Object(i.b)("p",null,"This is a promise-returning method that resolves with a ",Object(i.b)("inlineCode",{parentName:"p"},"Boolean")," value. ",Object(i.b)("inlineCode",{parentName:"p"},"true")," value indicates that the user accepts your connect request and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," value indicates rejection."),Object(i.b)("h2",{id:"accessing-user-accounts"},"Accessing User Accounts"),Object(i.b)("p",null,"Once you have connected to a user's ZilPay wallet, you can check the current account information through ",Object(i.b)("inlineCode",{parentName:"p"},"window.zilPay.wallet.defaultAccount"),"."),Object(i.b)("p",null,"If you will like to be notified when the user changes the account or network, you can subscribe to relevant events"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"window.zilPay.wallet.observableAccount().subscribe(function (account) {\n    // ... When the user changes account\n});\nwindow.zilPay.wallet.observableNetwork().subscribe(function (net) {\n    // ... When the user changes network\n});\n")),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)("p",null,"ZilPay provides a set of documentation for your references"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://zilpay.xyz/Documentation/zilliqa-provider/"}),"Provider API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://zilpay.xyz/Documentation/zilliqa-api-blockchain/"}),"Blockchain related APIs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://zilpay.xyz/Documentation/zilliqa-api-crypto/"}),"Crypto related APIs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://zilpay.xyz/Documentation/zilliqa-api-utils/"}),"Utils related APIs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://zilpay.xyz/Documentation/zilliqa-contracts/"}),"Contract related APIs"))))}p.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(y,c(c({ref:t},s),{},{components:n})):r.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);