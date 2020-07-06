(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(237)),i={id:"dev-txn-polling",title:"Polling"},c={id:"dev-txn-polling",isDocsHomePage:!1,title:"Polling",description:"If your transaction is successfully verified by the seed node, the transaction will be sent to the appropriate shard. Shard selection depends on a number of factors that are explained in detail in this post.",source:"@site/docs/dev-txn-polling.md",permalink:"/dev-portal/docs/dev-txn-polling",editUrl:"https://github.com/Zilliqa/dev-portal/docs/dev-txn-polling.md",sidebar:"someSidebar2",previous:{title:"Broadcasting",permalink:"/dev-portal/docs/dev-txn-broadcasting"},next:{title:"Confirmation",permalink:"/dev-portal/docs/dev-txn-confirmation"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If your transaction is successfully verified by the seed node, the transaction will be sent to the appropriate shard. Shard selection depends on a number of factors that are explained in detail in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.zilliqa.com/provisioning-sharding-for-smart-contracts-a-design-for-zilliqa-cd8d012ee735"}),"this post"),"."),Object(o.b)("p",null,"After sending the transaction object, there will be a ",Object(o.b)("inlineCode",{parentName:"p"},"transaction id"),". We can invoke the ",Object(o.b)("inlineCode",{parentName:"p"},"GetTransaction")," JSON RPC API with the ",Object(o.b)("inlineCode",{parentName:"p"},"transaction id")," periodically to check the transaction status. It is recommended to poll the seed node with ",Object(o.b)("inlineCode",{parentName:"p"},"GetTransaction")," for ",Object(o.b)("strong",{parentName:"p"},"3 Tx Epochs")," (around 3-5 minutes). If the transaction is not confirmed after that, we can assume that it has not been included in any block and should be re-broadcasted."),Object(o.b)("p",null,"Example of polling transaction:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const txn = await zilliqa.blockchain.getTransaction("1899b381d644a4892ca5ba5d8d60bbcc7bd121d511d55e438a8ddbdcc53272c4");\nconsole.log(JSON.stringify(txn));\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'provider := NewProvider("https://dev-api.zilliqa.com/")\nresult, _ := provider.GetTransaction("c7d6550a6558edcddbf4b3c7cf14db9f1025200b89bcbcd6a570c84db58d554f")\nresStr,_ := json.Marshal(result)\nfmt.Println(string(resStr))\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'HttpProvider client = new HttpProvider("https://api.zilliqa.com/");\nTransaction transaction = client.getTransaction("055294ba67b3073d66ef078fb149dfb0490b2d46156479a9f2c9327fb762f4e9").getResult();\nSystem.out.println(new Gson().toJson(transaction))\n')))}p.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);