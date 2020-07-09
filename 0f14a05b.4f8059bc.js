(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),c=(n(0),n(241)),o={id:"basics-intro-accounts",title:"Accounts"},s={id:"basics/basics-intro-accounts",isDocsHomePage:!1,title:"Accounts",description:"---",source:"@site/docs/basics/basics-intro-accounts.md",permalink:"/dev-portal/docs/basics/basics-intro-accounts",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/basics/basics-intro-accounts.md",sidebar:"BasicsSideBar",previous:{title:"Consensus mechanism",permalink:"/dev-portal/docs/basics/basics-intro-consensus"},next:{title:"Transactions",permalink:"/dev-portal/docs/basics/basics-intro-txns"}},i=[{value:"1. Externally-Owned Account (aka User Account)",id:"1-externally-owned-account-aka-user-account",children:[]},{value:"2. Contract Account",id:"2-contract-account",children:[]}],u={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("hr",null),Object(c.b)("p",null,"The Zilliqa blockchain follows an account-based model similar to Ethereum.\nAccounts can hold native assets such as $ZIL or app-layer tokens issued as\nFungible or Non-Fungible assets. These assets can be transferred from one\naccount to another."),Object(c.b)("p",null,"The collective state of all the accounts represents the global state of the\nblockchain. Each account is identified by its address which is a 20-byte\nstring generated using a hash function."),Object(c.b)("p",null,"Similar to Ethereum, the Zilliqa network supports two types of accounts:"),Object(c.b)("h3",{id:"1-externally-owned-account-aka-user-account"},"1. Externally-Owned Account (aka User Account)"),Object(c.b)("p",null,"An account controlled by an end user who owns a public-private signature key pair. The address of an externally-owned account is essentially a truncated hash of the public key."),Object(c.b)("h3",{id:"2-contract-account"},"2. Contract Account"),Object(c.b)("p",null,"An account that has a smart contract code associated withit. A contract account gets created by a user when she deploys a smart contract on the network. The address of a contract account is the hash of the address of the user account that deployed the contract and some other information. "))}l.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);