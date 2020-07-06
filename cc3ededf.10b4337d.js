(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(9),r=(a(0),a(237)),o={id:"staking-introduction",title:"General information"},l={id:"staking-introduction",isDocsHomePage:!1,title:"General information",description:"About Zilliqa staking program",source:"@site/docs/staking-introduction.md",permalink:"/dev-portal/docs/staking-introduction",editUrl:"https://github.com/Zilliqa/dev-portal/docs/staking-introduction.md",sidebar:"someSidebar4",previous:{title:"Understanding Transaction Receipts",permalink:"/dev-portal/docs/exchange-transaction-receipts"},next:{title:"Setting up the SSN",permalink:"/dev-portal/docs/staking-getting-started"}},s=[],c={rightToc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"about-zilliqa-staking-program"},"About Zilliqa staking program"),Object(r.b)("p",null,"In this initial phase of the Zilliqa staking program, staking is done through a seed node and a smart contract on the Zilliqa blockchain. The seed node operator who wishes to host an SSN will need to register with the Zilliqa team and deposit a certain minimum number of $ZIL into the staking smart contract. The seed node operator will then receive blockchain rewards at regular intervals according to the performance of its SSN, and in proportion to the amount of $ZIL deposited in the contract during those intervals."),Object(r.b)("p",null,"Staked seed nodes are expected to provide API service to anyone to be eligible for these rewards. There will also be no hard slashing in this phase of the program."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"More details on the rationale and design of the program can be found in the Zilliqa Improvement Proposal (ZIP) ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-3.md"}),"documentation"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you wish to learn more about our seed node staking contract, you may want to check out the contract over at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/staking-contract"}),"staking-contract Github Repository"),".")),Object(r.b)("h1",{id:"disclaimer"},"Disclaimer"),Object(r.b)("p",null,'By participating in the staking of ZILs (\u201cStaking Program\u201d), each participating individual and organization ("Participant") accepts and agrees that, to the extent permitted by law, ',"[Zilliqa]"," disclaims all liability, damages, cost, loss or expense (including, without limitation, legal fees, costs and expenses) to it in respect of its involvement in the Staking Program. Each Participant should carefully consider all factors involved in participating in the Staking Program, including, but not limited to, those listed below and, to the extent necessary, consult an appropriate professional or other expert (including an expert in cryptographic tokens or blockchain-based software systems). If any of the following considerations are unacceptable to a Participant, that Participant should not be involved in the Staking Program. These considerations are not intended to be exhaustive and should be used as guidance only."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Staking Program is an open source protocol made available to the public, and Zilliqa expressly disclaims any liability in respect of any actions, programs, applications, developments, and operations of the Staking Program."),Object(r.b)("li",{parentName:"ul"},"Hackers, individuals, other malicious groups or organisations may attempt to interfere with the Zilliqa Blockchain System, the ZILs and the Staking Program in a variety of ways such as cryptographic attacks, malware attacks, denial of service attacks, consensus-based attacks, Sybil attacks, smurfing and spoofing."),Object(r.b)("li",{parentName:"ul"},"The regulatory status of cryptographic tokens, blockchain and distributed ledger technology as well as its applications are unclear or unsettled in many jurisdictions and it is difficult to predict how or whether governments or regulatory agencies may implement changes to law or apply existing regulation with respect to such technology and its applications, including the Zilliqa Blockchain System, the ZILs and the Staking Program."),Object(r.b)("li",{parentName:"ul"},"The ZILs are not intended to represent any formal or legally binding investment. Cryptographic tokens that possess value in public markets, such as Ether and Bitcoin, have demonstrated extreme fluctuations in price over short periods of time on a regular basis. Participants should be prepared to expect similar fluctuations in the price of the ZILs and Participants may experience a complete and permanent loss of their initial purchase.")),Object(r.b)("p",null,"The ZILs are not intended to be securities (or any other regulated instrument) under the laws of any jurisdiction where they are intended to be, or will be, purchased or sold and no action has been or will be taken in any jurisdiction by Zilliqa Research or any of its affiliates that would permit a public offering, or any other offering under circumstances not permitted by applicable law of the ZILs, in any country or jurisdiction where action for that purpose is required. Accordingly, the ZILs may not be offered or sold, directly or indirectly, by any holder, in or from any country or jurisdiction, except in circumstances which will result in compliance with all applicable rules and regulations of any such country or jurisdiction."),Object(r.b)("h1",{id:"who-can-run-a-zilliqa-ssn"},"Who can run a Zilliqa SSN"),Object(r.b)("p",null,"The seed node operator candidates we are looking to get involved with the staked seed node program are "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"existing exchanges, "),Object(r.b)("li",{parentName:"ul"},"wallet and explorer providers, and "),Object(r.b)("li",{parentName:"ul"},"eligible operators from within the Zilliqa community.")),Object(r.b)("h1",{id:"minimum-hardware-requirements"},"Minimum hardware requirements"),Object(r.b)("p",null,"Ensuring your node meets the minimum hardware requirements is important. Having your staked seed node run without disruption will both enable you to get the maximum possible stake reward and guarantee to the users of your node that they can enjoy a seamless experience of the API service provided."),Object(r.b)("p",null,"At the moment, the minimum hardware requirements are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"x64 Ubuntu operating system (e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"Ubuntu 16.04.05 LTS"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Ubuntu 18.04.4 LTS"),")"),Object(r.b)("li",{parentName:"ul"},"Quad-core server-grade processor (e.g., Intel Xeon Skylake family)"),Object(r.b)("li",{parentName:"ul"},"16GB RAM"),Object(r.b)("li",{parentName:"ul"},"300GB SSD"),Object(r.b)("li",{parentName:"ul"},"200Mbps (up/down) bandwidth"),Object(r.b)("li",{parentName:"ul"},"24/7 uptime"),Object(r.b)("li",{parentName:"ul"},"Public IP address"),Object(r.b)("li",{parentName:"ul"},"Domain name"),Object(r.b)("li",{parentName:"ul"},"Valid SSL certificate")),Object(r.b)("h1",{id:"signing-up-as-a-staked-seed-node-operator"},"Signing up as a staked seed node operator"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This step is optional for those who are already in touch with us")),Object(r.b)("p",null,"For interested party who wishes to run a staked seed node and is able to provides the following service: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"run a staked seed node "),Object(r.b)("li",{parentName:"ul"},"providing staking service to the community. ")),Object(r.b)("p",null,"Please fill this form ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://forms.gle/GxuHXxPFD4BzcGZp6"}),"https://forms.gle/GxuHXxPFD4BzcGZp6"),". We will follow up with the rest of the steps."),Object(r.b)("p",null,"For any other enquiries, please reach out to us via email at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:staking@zilliqa.com"}),"staking@zilliqa.com"),"."))}p.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return a?i.a.createElement(m,l(l({ref:t},c),{},{components:a})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);