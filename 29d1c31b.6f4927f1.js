(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),l=n(9),o=(n(0),n(239)),r={id:"dev-started-helloworld",title:"Hello World"},i={id:"dev/dev-started-helloworld",isDocsHomePage:!1,title:"Hello World",description:"In this section, we will deploy and interact with a Hello World smart contract onto the Zilliqa testnet using Neo-Savant web IDE and ZilPay wallet.",source:"@site/docs/dev/dev-started-helloworld.mdx",permalink:"/dev-portal/docs/dev/dev-started-helloworld",editUrl:"https://github.com/Zilliqa/dev-portal/docs/dev/dev-started-helloworld.mdx",sidebar:"DevelopersSidebar",previous:{title:"Introduction",permalink:"/dev-portal/docs/dev/dev-started-introduction"},next:{title:"Development Environments",permalink:"/dev-portal/docs/dev/dev-started-env"}},c=[{value:"Create testnet wallet using ZilPay",id:"create-testnet-wallet-using-zilpay",children:[]},{value:"Request testnet $ZIL from faucet",id:"request-testnet-zil-from-faucet",children:[]},{value:"Deploying contract on testnet",id:"deploying-contract-on-testnet",children:[]},{value:"Understanding the Hello World contract",id:"understanding-the-hello-world-contract",children:[]},{value:"Front-end contract interaction using zilliqa-js",id:"front-end-contract-interaction-using-zilliqa-js",children:[]},{value:"Change contract state using ZilPay",id:"change-contract-state-using-zilpay",children:[]},{value:"View receipt on Viewblock explorer",id:"view-receipt-on-viewblock-explorer",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we will deploy and interact with a ",Object(o.b)("inlineCode",{parentName:"p"},"Hello World")," smart contract onto the Zilliqa testnet using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ide.zilliqa.com/#/"}),"Neo-Savant web IDE")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://zilpay.xyz/"}),"ZilPay wallet"),"."),Object(o.b)("h2",{id:"create-testnet-wallet-using-zilpay"},"Create testnet wallet using ZilPay"),Object(o.b)("p",null,"ZilPay is an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zilpay/zil-pay"}),"open source")," browser add-on that manages a user\u2019s Zilliqa wallet and can be used on Chrome, Firefox and Opera browsers.\nIt does not store any user's private keys on the server. Instead, they are password protected and stored on browser storage.\nIt is a non-custodial wallet, meaning, only the user has full access and responsibility for their private key."),Object(o.b)("p",null,"To create a ZilPay wallet:\n1) Visit ZilPay's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://zilpay.xyz/"}),"website")," and download the extension for your respective browser.\n2) Open the extension, create a new wallet by verifying your 12 words recovery phrase and selecting a password for your wallet.\n3) Click on the ",Object(o.b)("inlineCode",{parentName:"p"},"network change")," button (shown below) and select the ",Object(o.b)("inlineCode",{parentName:"p"},"network")," as testnet."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Please store your 12 words recovery phrase securely")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../assets/application/getting-started/zilpay-change-network-btn.png",alt:"Change Network Button"}))),Object(o.b)("p",null,"Voila! You have now successfully set up a testnet ZilPay wallet."),Object(o.b)("h2",{id:"request-testnet-zil-from-faucet"},"Request testnet $ZIL from faucet"),Object(o.b)("p",null,"Deploying a contract to zilliqa's testnet will consume gas. As such you will need testnet $ZIL in your ZilPay account to pay for the gas."),Object(o.b)("p",null,"To request for testnet $ZIL from the faucet,"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Visit ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dev-wallet.zilliqa.com/faucet"}),"Nucleus wallet testnet faucet")),Object(o.b)("li",{parentName:"ol"},"Enter and submit your ZilPay address to the faucet, you will receive 300 testnet $ZIL shortly. This will take about 30s to 1 min, as the transactions will need to be confirmed on the blockchain.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../assets/application/getting-started/nucleus-faucet.png",alt:"Nucleus Wallet Faucet"}))),Object(o.b)("h2",{id:"deploying-contract-on-testnet"},"Deploying contract on testnet"),Object(o.b)("p",null,"To deploy the ",Object(o.b)("inlineCode",{parentName:"p"},"Hello World")," contract on the Zilliqa testnet, we will use the Scilla web IDE, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ide.zilliqa.com/"}),"Neo-Savant IDE"),".",Object(o.b)("br",null)),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("inlineCode",{parentName:"li"},"network")," to testnet and import your wallet by loading the keystore file and enter the corresponding passphrase.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../assets/application/getting-started/neo-savant-step1.png",alt:"IDE Step1"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"Hello World")," contract under the files tab and click on ",Object(o.b)("inlineCode",{parentName:"li"},"Check")," button to check to use the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://scilla.readthedocs.io/en/latest/scilla-checker.html"}),"typechecker")," to check for any syntax errors in your contract.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../assets/application/getting-started/neo-savant-step2.png",alt:"IDE Step2"}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Once the typechecker result is passed, click on ",Object(o.b)("inlineCode",{parentName:"li"},"Deploy"),' button to deploy the contract to testnet. Use your wallet address (Base16 format) for the "owner" initialisation parameter.')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To convert from ",Object(o.b)("inlineCode",{parentName:"p"},"Bech32")," address format into base16 address format, you can use the address converter in the IDE. Click on ",Object(o.b)("inlineCode",{parentName:"p"},"Tools > Address converter"),".")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../assets/application/getting-started/neo-savant-step3.png",alt:"IDE Step3"}))),Object(o.b)("p",null,'Yay! Your contract is now deployed on the testnet and can be accessed under the "Contracts" tab on the left side of the IDE.'),Object(o.b)("h2",{id:"understanding-the-hello-world-contract"},"Understanding the Hello World contract"),Object(o.b)("p",null,"The Hello World contract written in the scilla smart contract programming language essentially consists of two transitions. The transitions of a scilla contract define the public interface for the contract and are a way to define how the state of the contract may change.",Object(o.b)("br",null),"\nThe two transitions in the Hello World are:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"setHello()")," - ",Object(o.b)("inlineCode",{parentName:"li"},"setHello")," transition updates the value of the mutable variable - 'welcomeMsg' to the value of the transition parameter.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'transition setHello (msg : String)\n  is_owner = builtin eq owner _sender;\n  match is_owner with\n  | False =>\n    e = {_eventname : "setHello()"; code : not_owner_code};\n    event e\n  | True =>\n    welcome_msg := msg;\n    e = {_eventname : "setHello()"; code : set_hello_code};\n    event e\n  end\nend\n\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"getHello()")," - ",Object(o.b)("inlineCode",{parentName:"li"},"getHello")," transition fetches the value of the mutable variable - 'welcomeMsg' and emits it as an entry of an emitted event.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'transition getHello ()\n    r <- welcome_msg;\n    e = {_eventname: "getHello()"; msg: r};\n    event e\nend\n\n')),Object(o.b)("h2",{id:"front-end-contract-interaction-using-zilliqa-js"},"Front-end contract interaction using zilliqa-js"),Object(o.b)("p",null,"Let's interact with the ",Object(o.b)("inlineCode",{parentName:"p"},"Hello World")," contract using a simple front-end."),Object(o.b)("p",null,"Clone the following repository and follow the installation steps: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/dev-portal-examples/tree/master/hello-world"}),"Hello World Front-End"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/Zilliqa/dev-portal-examples.git\n")),Object(o.b)("p",null,"The above repository builds on the create-react-app starter kit. If you don't have experience working with React, this guide would still be useful for you as the zilliqa-js part of the code is VanillaJS and you can use that as it is in the framework of your choice."),Object(o.b)("h2",{id:"change-contract-state-using-zilpay"},"Change contract state using ZilPay"),Object(o.b)("p",null,"After following the installation steps, you need to run the code locally by using the command\n",Object(o.b)("inlineCode",{parentName:"p"},"npm start")),Object(o.b)("p",null,"On successfully running the web application locally on your system, enter the address of your Hello World contract deployed on the testnet and connect your ZilPay wallet with the front-end by clicking on the ",Object(o.b)("strong",{parentName:"p"},"Connect")," button."),Object(o.b)("p",null,"To call the transitions from the front-end using ZilPay:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"setHello()")," - Upon clicking the ",Object(o.b)("strong",{parentName:"li"},"Set Hello")," button and approving the transaction via ZilPay, the ",Object(o.b)("inlineCode",{parentName:"li"},"setHello()")," transition will be called and the value of the ",Object(o.b)("inlineCode",{parentName:"li"},"welcomeMsg")," mutable variable in the contract code will be updated with the new message.")),Object(o.b)("p",null,"The following code snippet achieves this functionality:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  async updateWelcomeMsg(){\n    const zilliqa = window.zilPay;\n    let setHelloValue = this.state.setHelloValue;\n    let contractAddress = localStorage.getItem(\"contract_address\");\n    const CHAIN_ID = 333;\n    const MSG_VERSION = 1;\n    const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);   \n    const myGasPrice = units.toQa('1000', units.Units.Li); // Gas Price that will be used by all transactions\n    contractAddress = contractAddress.substring(2);\n    const ftAddr = toBech32Address(contractAddress);\n    try {\n        const contract = zilliqa.contracts.at(ftAddr);\n        const callTx = await contract.call(\n            'setHello',\n            [\n                {\n                    vname: 'msg',\n                    type: 'String',\n                    value: setHelloValue\n                }\n            ],\n            {\n                // amount, gasPrice and gasLimit must be explicitly provided\n                version: VERSION,\n                amount: new BN(0),\n                gasPrice: myGasPrice,\n                gasLimit: Long.fromNumber(10000),\n            }\n        );\n  \n    } catch (err) {\n        console.log(err);\n    }\n  }\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"getHello()")," - Upon clicking the 'Get Hello' button and approving the transaction via ZilPay, the ",Object(o.b)("inlineCode",{parentName:"li"},"getHello()")," transition will be called and the value of the ",Object(o.b)("inlineCode",{parentName:"li"},"welcomeMsg")," mutable variable is emitted as part of a contract event.")),Object(o.b)("p",null,"We will use the Zilliqa WebSocket Server (ZWS) to subscribe to all new event logs generated for our Hello World contract. This allows us to update the Welcome Msg on the web application as soon as the ",Object(o.b)("inlineCode",{parentName:"p"},"getHello()")," transaction gets confirmed and an event is emitted."),Object(o.b)("p",null,"The following code snippet achieves this functionality:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  async getWelcomeMsg(){\n    \n    const zilliqa = window.zilPay;\n    let contractAddress = localStorage.getItem(\"contract_address\");\n    const CHAIN_ID = 333;\n    const MSG_VERSION = 1;\n    const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);   \n    const myGasPrice = units.toQa('1000', units.Units.Li); // Gas Price that will be used by all transactions\n    contractAddress = contractAddress.substring(2);\n    const ftAddr = toBech32Address(contractAddress);\n    try {\n        const contract = zilliqa.contracts.at(ftAddr);\n        const callTx = await contract.call(\n            'getHello',\n            [\n            ],\n            {\n                // amount, gasPrice and gasLimit must be explicitly provided\n                version: VERSION,\n                amount: new BN(0),\n                gasPrice: myGasPrice,\n                gasLimit: Long.fromNumber(10000),\n            }\n        );\n        console.log(JSON.stringify(callTx.TranID));\n        this.eventLogSubscription();  \n    } catch (err) {\n        console.log(err);\n    }\n\n  }\n  // Code that listens to websocket and updates welcome message when getHello() gets called.\n  async eventLogSubscription() {\n    const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n    const subscriber = zilliqa.subscriptionBuilder.buildEventLogSubscriptions(\n      'wss://dev-ws.zilliqa.com',\n      {\n        // smart contract address you want to listen on  \n        addresses: [localStorage.getItem(\"contract_address\")],\n      },\n    );\n    \n    subscriber.emitter.on(StatusType.SUBSCRIBE_EVENT_LOG, (event) => {\n      // if subscribe success, it will echo the subscription info\n      console.log('get SubscribeEventLog echo : ', event);\n    });\n    \n    subscriber.emitter.on(MessageType.EVENT_LOG, (event) => {\n      console.log('get new event log: ', JSON.stringify(event));\n      // updating the welcome msg when a new event log is received related to getHello() transition\n      if(event.hasOwnProperty(\"value\")){\n        if(event.value[0].event_logs[0]._eventname ==\"getHello\"){\n          let welcomeMsg = event.value[0].event_logs[0].params[0].value;\n          this.setState({welcomeMsg: welcomeMsg});\n          console.log(\"welcomeMsg\", welcomeMsg);\n        }\n      }\n    });  \n    await subscriber.start();\n  }\n")),Object(o.b)("h2",{id:"view-receipt-on-viewblock-explorer"},"View receipt on Viewblock explorer"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://viewblock.io/zilliqa?network=testnet"}),"Viewblock explorer")," is a block explorer that supports both Zilliqa mainnet and testnet. It allows you to look at the status of your transaction, current status of the Zilliqa network, contract source code etc."),Object(o.b)("p",null,"For example, this is the viewblock's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://viewblock.io/zilliqa/tx/c4030c73d6dae558ff0c9d98237101e342888115f13219a00bb14a8ee46fa3be?network=testnet"}),"transaction link")," for a getHello() transition transaction."))}b.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||p[u]||o;return n?l.a.createElement(h,i(i({ref:t},s),{},{components:n})):l.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);