(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t(2),r=t(9),i=(t(0),t(241)),o={id:"exchange-account-management",title:"Account Management"},s={id:"exchanges/exchange-account-management",isDocsHomePage:!1,title:"Account Management",description:"---",source:"@site/docs/exchanges/exchange-account-management.md",permalink:"/dev-portal/docs/exchanges/exchange-account-management",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/exchanges/exchange-account-management.md",sidebar:"ExchangesSidebar",previous:{title:"Getting Started",permalink:"/dev-portal/docs/exchanges/exchange-getting-started"},next:{title:"Sending Transactions",permalink:"/dev-portal/docs/exchanges/exchange-sending-transactions"}},c=[{value:"Generating Numerous Accounts",id:"generating-numerous-accounts",children:[]},{value:"Exporting an Account",id:"exporting-an-account",children:[]},{value:"Importing an Account",id:"importing-an-account",children:[]}],l={rightToc:c};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"generating-numerous-accounts"},"Generating Numerous Accounts"),Object(i.b)("p",null,"A common task for exchanges is to safely and predictably generate a large\nnumber of addresses. You can do so using one or more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"}),"BIP39 mnemonics"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export class ZilliqaService {\n  accounts: string[] = [];\n  zil: Zilliqa;\n\n  constructor(api: string, mnemonics: {[mnemonic: string]: number}) {\n    const zilliqa = new Zilliqa(api);\n    this.zil = zilliqa;\n\n    // you can use one or more mnemonics to manage/generate a large number of accounts\n    for (let m in mnemonics) {\n      const num = mnemonics[m];\n      range(num).forEach(i => {\n        const address = this.zil.wallet.addByMnemonic(m, i);\n        this.accounts.push(address);\n      });\n    }\n  }\n\n  /* truncated */\n}\n")),Object(i.b)("h2",{id:"exporting-an-account"},"Exporting an Account"),Object(i.b)("p",null,"You may also wish to export a keypair to a portable format to use it somewhere else.\nWe support a modified implementation of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition"}),"Web3 Secret Storage Definition"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Zilliqa } from '@zilliqa-js/zilliqa';\nimport * fs from 'fs';\n\nexport class ZilliqaService {\n  accounts: string[] = [];\n  zil: Zilliqa;\n\n  constructor(api: string, mnemonics: {[mnemonic: string]: number}) {\n    const zilliqa = new Zilliqa(api);\n    this.zil = zilliqa;\n\n    // you can use one or more mnemonics to manage/generate a large number of accounts\n    for (let m in mnemonics) {\n      const num = mnemonics[m];\n      range(num).forEach(i => {\n        const address = this.zil.wallet.addByMnemonic(m, i);\n        this.accounts.push(address);\n      });\n    }\n  }\n\n  /* truncated */\n\n  export(address: string) {\n    // keep this secret.\n    const passphrase = 'something';\n    const json = this.zil.wallet.export(address, passphrase);\n    // at this point, you should safely write this to disk, or send it to\n    // a vault somehwere. the point is to keep it safe.\n    fs.writeFile('/path/to/safe/place', json);\n  }\n\n  /* truncated */\n}\n")),Object(i.b)("p",null,"Now, you should be able to find your file containing your passphrase-encrypted\nprivate key at the path you specified. Remember to always keep this file, and\nespecially your passphrase, secret!"),Object(i.b)("h2",{id:"importing-an-account"},"Importing an Account"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Ethereum's implementation differs from Zilliqa's. You will ",Object(i.b)("strong",{parentName:"p"},"not")," be able to decrypt a Zilliqa keystore file using web3 and vice-versa."))),Object(i.b)("p",null,"At some stage, you may also need to import a keystore file you had previously\nexported. There is a convenient facility for that."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import pify from 'pify';\nimport { Zilliqa } from '@zilliqa-js/zilliqa';\nimport * fs from 'fs';\n\nexport class ZilliqaService {\n  accounts: string[] = [];\n  zil: Zilliqa;\n\n  constructor(api: string, mnemonics: {[mnemonic: string]: number}) {\n    const zilliqa = new Zilliqa(api);\n    this.zil = zilliqa;\n\n    // you can use one or more mnemonics to manage/generate a large number of accounts\n    for (let m in mnemonics) {\n      const num = mnemonics[m];\n      range(num).forEach(i => {\n        const address = this.zil.wallet.addByMnemonic(m, i);\n        this.accounts.push(address);\n      });\n    }\n  }\n\n  /* truncated */\n\n  export(address: string) {\n    // keep this secret.\n    const passphrase = 'something';\n    const json = this.zil.wallet.export(address, passphrase);\n    // at this point, you should safely write this to disk, or send it to\n    // a vault somehwere. the point is to keep it safe.\n    fs.writeFile('/path/to/safe/place', json);\n  }\n\n  async addKeystoreFile(path: string, passphrase: string) {\n    const buf = await pify(fs.readFile)(path);\n    const json = buf.toString();\n    const address = await this.zil.wallet.addByKeystore(json, passphrase);\n\n    return address;\n  }\n\n  /* truncated */\n")),Object(i.b)("p",null,"These two methods allow you to securely serialise and deserialise your\naccounts."))}m.isMDXComponent=!0},241:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),m=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(t),d=a,b=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return t?r.a.createElement(b,s(s({ref:n},l),{},{components:t})):r.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);