(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return o}));var c=a(2),n=a(9),i=(a(0),a(241)),s={id:"dev-tools-java",title:"LaksaJ - Java SDK"},l={id:"dev/dev-tools-java",isDocsHomePage:!1,title:"LaksaJ - Java SDK",description:"---",source:"@site/docs/dev/dev-tools-java.md",permalink:"/dev-portal/docs/dev/dev-tools-java",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/dev/dev-tools-java.md",sidebar:"DevelopersSidebar",previous:{title:"GoZilliqa",permalink:"/dev-portal/docs/dev/dev-tools-gozilliqa"},next:{title:"Other SDKs",permalink:"/dev-portal/docs/dev/dev-tools-sdks"}},r=[{value:"Source code",id:"source-code",children:[]},{value:"Getting Started (Installation and packages explained)",id:"getting-started-installation-and-packages-explained",children:[]},{value:"Maven",id:"maven",children:[]},{value:"Gradle",id:"gradle",children:[]},{value:"Manual build the jar file",id:"manual-build-the-jar-file",children:[]},{value:"Methods and APIs",id:"methods-and-apis",children:[{value:"Account API",id:"account-api",children:[]},{value:"Wallet API",id:"wallet-api",children:[]},{value:"TransactionFactory Transaction",id:"transactionfactory-transaction",children:[]},{value:"ContractFactory Contract",id:"contractfactory-contract",children:[]},{value:"Crypto API",id:"crypto-api",children:[]},{value:"JSON-RPC API",id:"json-rpc-api",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Util",id:"util",children:[]}]},{value:"Demo",id:"demo",children:[{value:"Generate large amount of addresses",id:"generate-large-amount-of-addresses",children:[]},{value:"Validate an address",id:"validate-an-address",children:[]},{value:"Validate checksum address",id:"validate-checksum-address",children:[]},{value:"Transaction operation (include construct transaction, calculate transaction fee, do serialization, sign a transaction, broadcast)",id:"transaction-operation-include-construct-transaction-calculate-transaction-fee-do-serialization-sign-a-transaction-broadcast",children:[]},{value:"Know a smart contract deposit",id:"know-a-smart-contract-deposit",children:[]}]}],b={rightToc:r};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(c.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"source-code"},"Source code"),Object(i.b)("p",null,"The Github repository can be found at ",Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/FireStack-Lab/LaksaJ"}),"https://github.com/FireStack-Lab/LaksaJ")),Object(i.b)("h2",{id:"getting-started-installation-and-packages-explained"},"Getting Started (Installation and packages explained)"),Object(i.b)("p",null,"You can get start with the installation by using maven, grandle or manually building the ",Object(i.b)("inlineCode",{parentName:"p"},"jar")," file."),Object(i.b)("h2",{id:"maven"},"Maven"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n  <groupId>org.firestack</groupId>\n  <artifactId>laksaj</artifactId>\n  <version>1.0.5-RELEASE</version>\n</dependency>\n")),Object(i.b)("h2",{id:"gradle"},"Gradle"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-groovy"}),"\ndependencies {\n    compile group: 'org.firestack', name: 'laksaj', version: '1.0.5-RELEASE'\n}\n\n")),Object(i.b)("h2",{id:"manual-build-the-jar-file"},"Manual build the jar file"),Object(i.b)("p",null,"First clone the ",Object(i.b)("inlineCode",{parentName:"p"},"LaksaJ")," repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/FireStack-Lab/LaksaJ.git\n")),Object(i.b)("p",null,"Next, build ",Object(i.b)("inlineCode",{parentName:"p"},"jar")," using following command"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{}),"gradle build -x test\n")),Object(i.b)("h2",{id:"methods-and-apis"},"Methods and APIs"),Object(i.b)("h3",{id:"account-api"},"Account API"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","fromFile"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","toFile")),Object(i.b)("h3",{id:"wallet-api"},"Wallet API"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","createAccount"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","addByPrivateKey addByKeyStore"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","remove"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","setDefault"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","signTransaction (default account)"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","signTransactionWith (specific account)")),Object(i.b)("h3",{id:"transactionfactory-transaction"},"TransactionFactory Transaction"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","sendTransaction"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","trackTx"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","confirm"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isPending isInitialised isConfirmed isRejected")),Object(i.b)("h3",{id:"contractfactory-contract"},"ContractFactory Contract"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","deploy"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","call"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isInitialised isDeployed isRejected"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getState"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getAddressForContract")),Object(i.b)("h3",{id:"crypto-api"},"Crypto API"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getDerivedKey (PBKDF2 and Scrypt)"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","generatePrivateKey"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Schnorr.sign"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Schnorr.verify"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getPublicKeyFromPrivateKey"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getPublicKeyFromPrivateKey"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getAddressFromPublicKey"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getAddressFromPrivateKey"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","encryptPrivateKey"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","decryptPrivateKey")),Object(i.b)("h3",{id:"json-rpc-api"},"JSON-RPC API"),Object(i.b)("h4",{id:"blockchain-related-methods"},"Blockchain-related methods"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getNetworkId"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getBlockchainInfo"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getShardingStructure"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getDsBlock"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getLatestDsBlock"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getNumDSBlocks"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getDSBlockRate"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getDSBlockListing"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getTxBlock"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getLatestTxBlock"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getNumTxBlocks"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getTxBlockRate"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getTxBlockListing"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getNumTransactions"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getTransactionRate"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getCurrentMiniEpoch"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getCurrentDSEpoch"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getPrevDifficulty"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getPrevDSDifficulty")),Object(i.b)("h4",{id:"transaction-related-methods"},"Transaction-related methods"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","createTransaction"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getTransaction"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getRecentTransactions"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getTransactionsForTxBlock"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getNumTxnsTxEpoch"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getNumTxnsDSEpoch"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getMinimumGasPrice")),Object(i.b)("h4",{id:"contract-related-methods"},"Contract-related methods"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getSmartContractCode"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getSmartContractInit"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getSmartContractState"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getSmartContracts"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getContractAddressFromTransactionID")),Object(i.b)("h4",{id:"account-related-methods"},"Account-related methods"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","getBalance")),Object(i.b)("h3",{id:"validation"},"Validation"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isAddress"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isPublicjKey"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isPrivateKey"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isSignature")),Object(i.b)("h3",{id:"util"},"Util"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","byteArrayToHexString"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","hexStringToByteArray"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","generateMac"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isByteString"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","encodeTransactionProto"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","toChecksumAddress"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isValidChecksumAddress"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","base58.encode"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","base58.decode"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","isBase58"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","bech32 encode decode"),Object(i.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","fromBech32Address toBech32Address")),Object(i.b)("h2",{id:"demo"},"Demo"),Object(i.b)("h3",{id:"generate-large-amount-of-addresses"},"Generate large amount of addresses"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),'\npackage com.firestack.example;\n\nimport com.firestack.laksaj.crypto.KeyTools;\nimport com.firestack.laksaj.utils.ByteUtil;\nimport org.web3j.crypto.ECKeyPair;\n\nimport java.math.BigInteger;\nimport java.security.InvalidAlgorithmParameterException;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.NoSuchProviderException;\n\npublic class GenerateAddress {\n    //How to generate large amount of addresses\n    public static void main(String[] args) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException, NoSuchProviderException {\n        int n = 0;\n        while (n < 100) {\n            System.out.println("--------------------------");\n            System.out.println("generate nth keypair:");\n            ECKeyPair keyPair = KeyTools.generateKeyPair();\n            BigInteger privateInteger = keyPair.getPrivateKey();\n            BigInteger publicInteger = keyPair.getPublicKey();\n            System.out.println("private key is: " + privateInteger.toString(16));\n            System.out.println("public key is: " + publicInteger.toString(16));\n            System.out.println("address is: " + KeyTools.getAddressFromPublicKey(ByteUtil.byteArrayToHexString(publicInteger.toByteArray())));\n        }\n    }\n\n')),Object(i.b)("h3",{id:"validate-an-address"},"Validate an address"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),'package com.firestack.example;\n\nimport com.firestack.laksaj.utils.Validation;\n\npublic class ValidateAddress {\n    public static void main(String[] args) {\n        String address = "2624B9EA4B1CD740630F6BF2FEA82AAC0067070B";\n        boolean isAddress = Validation.isAddress(address);\n        System.out.println("is address: " + isAddress);\n    }\n}\n')),Object(i.b)("h3",{id:"validate-checksum-address"},"Validate checksum address"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),'package com.firestack.example;\n\nimport com.firestack.laksaj.utils.Validation;\n\npublic class ValidChecksumAddress {\n    public static void main(String[] args) {\n        String checksumAddress = "0x4BAF5faDA8e5Db92C3d3242618c5B47133AE003C";\n        boolean isChecksumAddress = Validation.isValidChecksumAddress(checksumAddress);\n        System.out.println("is checksum address: " + isChecksumAddress);\n    }\n}\n')),Object(i.b)("h3",{id:"transaction-operation-include-construct-transaction-calculate-transaction-fee-do-serialization-sign-a-transaction-broadcast"},"Transaction operation (include construct transaction, calculate transaction fee, do serialization, sign a transaction, broadcast)"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),'package com.firestack.example;\n\nimport com.firestack.laksaj.account.Wallet;\nimport com.firestack.laksaj.contract.Contract;\nimport com.firestack.laksaj.contract.ContractFactory;\nimport com.firestack.laksaj.contract.DeployParams;\nimport com.firestack.laksaj.contract.Value;\nimport com.firestack.laksaj.jsonrpc.HttpProvider;\nimport com.firestack.laksaj.transaction.Transaction;\nimport com.firestack.laksaj.transaction.TransactionFactory;\nimport javafx.util.Pair;\n\nimport java.io.IOException;\nimport java.security.NoSuchAlgorithmException;\nimport java.util.Arrays;\nimport java.util.List;\n\nimport static com.firestack.laksaj.account.Wallet.pack;\n\npublic class TransactionOperation {\n    public static void main(String[] args) throws IOException, NoSuchAlgorithmException {\n        Wallet wallet = new Wallet();\n        String ptivateKey = "e19d05c5452598e24caad4a0d85a49146f7be089515c905ae6a19e8a578a6930";\n        // Populate the wallet with an account\n        String address = wallet.addByPrivateKey(ptivateKey);\n        System.out.println("address is: " + address);\n\n        HttpProvider provider = new HttpProvider("https://api.zilliqa.com");\n        //get balance\n        HttpProvider.BalanceResult balanceResult = provider.getBalance(address);\n        System.out.println("balance is: " + balanceResult.getBalance());\n\n        //construct non-contract transaction\n        Transaction transaction = Transaction.builder()\n                .version(String.valueOf(pack(333, 1)))\n                .toAddr("zil16jrfrs8vfdtc74yzhyy83je4s4c5sqrcasjlc4")\n                .senderPubKey("0246e7178dc8253201101e18fd6f6eb9972451d121fc57aa2a06dd5c111e58dc6a")\n                .amount("10000000")\n                .gasPrice("1000000000")\n                .gasLimit("1")\n                .code("")\n                .data("")\n                .provider(new HttpProvider("https://api.zilliqa.com/"))\n                .build();\n\n        //sign transaction\n        transaction = wallet.sign(transaction);\n        System.out.println("signature is: " + transaction.getSignature());\n\n        //broadcast transaction\n        HttpProvider.CreateTxResult result = TransactionFactory.sendTransaction(transaction);\n        System.out.println(result);\n\n        //hello-world contract\n        String code = "scilla_version 0\\n" +\n                "\\n" +\n                "    (* HelloWorld contract *)\\n" +\n                "\\n" +\n                "    import ListUtils\\n" +\n                "\\n" +\n                "    (***************************************************)\\n" +\n                "    (*               Associated library                *)\\n" +\n                "    (***************************************************)\\n" +\n                "    library HelloWorld\\n" +\n                "\\n" +\n                "    let one_msg =\\n" +\n                "      fun (msg : Message) =>\\n" +\n                "      let nil_msg = Nil {Message} in\\n" +\n                "      Cons {Message} msg nil_msg\\n" +\n                "\\n" +\n                "    let not_owner_code = Int32 1\\n" +\n                "    let set_hello_code = Int32 2\\n" +\n                "\\n" +\n                "    (***************************************************)\\n" +\n                "    (*             The contract definition             *)\\n" +\n                "    (***************************************************)\\n" +\n                "\\n" +\n                "    contract HelloWorld\\n" +\n                "    (owner: ByStr20)\\n" +\n                "\\n" +\n                "    field welcome_msg : String = \\"\\"\\n" +\n                "\\n" +\n                "    transition setHello (msg : String)\\n" +\n                "      is_owner = builtin eq owner _sender;\\n" +\n                "      match is_owner with\\n" +\n                "      | False =>\\n" +\n                "        msg = {_tag : \\"TransactionOperation\\"; _recipient : _sender; _amount : Uint128 0; code : not_owner_code};\\n" +\n                "        msgs = one_msg msg;\\n" +\n                "        send msgs\\n" +\n                "      | True =>\\n" +\n                "        welcome_msg := msg;\\n" +\n                "        msg = {_tag : \\"TransactionOperation\\"; _recipient : _sender; _amount : Uint128 0; code : set_hello_code};\\n" +\n                "        msgs = one_msg msg;\\n" +\n                "        send msgs\\n" +\n                "      end\\n" +\n                "    end\\n" +\n                "\\n" +\n                "\\n" +\n                "    transition getHello ()\\n" +\n                "        r <- welcome_msg;\\n" +\n                "        e = {_eventname: \\"getHello()\\"; msg: r};\\n" +\n                "        event e\\n" +\n                "    end";\n        List<Value> init = Arrays.asList(Value.builder().vname("_scilla_version").type("Uint32").value("0").build(), Value.builder().vname("owner").type("ByStr20").value("0x9bfec715a6bd658fcb62b0f8cc9bfa2ade71434a").build());\n\n        ContractFactory factory = ContractFactory.builder().provider(new HttpProvider("https://api.zilliqa.com/")).signer(wallet).build();\n        Contract contract = factory.newContract(code, (Value[]) init.toArray(), "");\n        DeployParams deployParams = DeployParams.builder().version(String.valueOf(pack(2, 8))).gasPrice("1000000000").gasLimit("10000").senderPubKey("0246e7178dc8253201101e18fd6f6eb9972451d121fc57aa2a06dd5c111e58dc6a").build();\n\n        //deploy contract, this will take a while to track transaction util it has been confirmed or failed\n        Pair<Transaction, Contract> deployResult = contract.deploy(deployParams, 300, 3);\n        System.out.println("result is: " + deployResult);\n        \n        //calculate transaction fee\n        String transactionFee = new BigInteger(deployResult.getKey().getReceipt().getCumulative_gas()).multiply(new BigInteger(deployResult.getKey().getGasPrice())).toString();\n        System.out.println("transaction fee is: " + transactionFee);\n    }\n}\n\n')),Object(i.b)("h3",{id:"know-a-smart-contract-deposit"},"Know a smart contract deposit"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),'\npackage com.firestack.example;\n\nimport com.firestack.laksaj.blockchain.Contract;\nimport com.firestack.laksaj.jsonrpc.HttpProvider;\n\nimport java.io.IOException;\nimport java.util.List;\n\npublic class SmartContractDeposit {\n    public static void main(String[] args) throws IOException, InterruptedException {\n        HttpProvider client = new HttpProvider("https://api.zilliqa.com/");\n        String lastEpoch = client.getNumTxnsTxEpoch();\n        List<Contract.State> lastStateList = client.getSmartContractState("D6606D02DFF929593312D8D0D36105E376F95AA0");\n\n        System.out.println("last epoch is " + lastEpoch);\n        System.out.println("last state:" + lastStateList);\n\n        int n = 0;\n\n        while (true) {\n            String epoch = client.getNumTxnsTxEpoch();\n            System.out.println(n + "th current epoch is: " + epoch);\n            if (!lastEpoch.equals(epoch)) {\n                System.out.println("epoch hash changed");\n                List<Contract.State> stateList = client.getSmartContractState("D6606D02DFF929593312D8D0D36105E376F95AA0");\n                System.out.println("last state: " + lastStateList);\n                System.out.println("current state: " + stateList);\n                lastEpoch = epoch;\n                lastStateList = stateList;\n            }\n            Thread.sleep(3000);\n            n += 1;\n        }\n    }\n}\n\n')))}o.isMDXComponent=!0},241:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var c=a(0),n=a.n(c);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},i=Object.keys(e);for(c=0;c<i.length;c++)a=i[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)a=i[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),o=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,b=r(e,["components","mdxType","originalType","parentName"]),d=o(a),m=c,u=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.a.createElement(u,l(l({ref:t},b),{},{components:a})):n.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:c,s[1]=l;for(var b=2;b<i;b++)s[b]=a[b];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);