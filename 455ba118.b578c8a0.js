(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(2),o=n(9),a=(n(0),n(239)),r={id:"core-pow",title:"PoW Algorithm"},s={id:"contributors/core-pow",isDocsHomePage:!1,title:"PoW Algorithm",description:"Proof-of-Work",source:"@site/docs/contributors/core-pow.md",permalink:"/dev-portal/docs/contributors/core-pow",editUrl:"https://github.com/Zilliqa/dev-portal/docs/contributors/core-pow.md",sidebar:"ContributorsSidebar",previous:{title:"Multipliers",permalink:"/dev-portal/docs/contributors/core-multipliers"},next:{title:"Difficulty Adjustment",permalink:"/dev-portal/docs/contributors/core-difficulty-adjustment"}},l=[{value:"Proof-of-Work",id:"proof-of-work",children:[]},{value:"Why PoW is Needed",id:"why-pow-is-needed",children:[]},{value:"Ethash Algorithm",id:"ethash-algorithm",children:[]},{value:"PoW Modes",id:"pow-modes",children:[{value:"Light Dataset Mine",id:"light-dataset-mine",children:[]},{value:"Full Dataset Mine",id:"full-dataset-mine",children:[]},{value:"GPU Mine",id:"gpu-mine",children:[]},{value:"Getwork Server Mine",id:"getwork-server-mine",children:[]},{value:"Remote Mine",id:"remote-mine",children:[]}]},{value:"References",id:"references",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"proof-of-work"},"Proof-of-Work"),Object(a.b)("p",null,"Proof-of-Work, or PoW, is the original consensus algorithm in a blockchain network. In other blockchains (e.g., Bitcoin and Ethereum), this algorithm is used to confirm transactions and produce new blocks in the chain. With PoW, miners compete against each other to complete transactions on the network and get rewarded."),Object(a.b)("p",null,"In Zilliqa, PoW is used as a threshold the shard nodes need to meet to join the network. Afterwards, the nodes can start to sign transactions and get rewarded. So, in Zilliqa, completion of PoW doesn't actually mean the node can already get rewarded."),Object(a.b)("h2",{id:"why-pow-is-needed"},"Why PoW is Needed"),Object(a.b)("p",null,"The main benefits of using PoW are the anti-DoS attacks defense and low impact of stake on mining possibilities."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Defense from DoS attacks"),".  PoW imposes some limits on actions in the network. Firstly, it needs a lot of effort to be executed. Efficient attacks require a lot of computational power and a lot of time to do these calculations. Therefore, the attack is possible but also kind of useless since the costs are too high."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Mining possibilities"),". It doesn\u2019t matter how much money you have in your wallet. What matters is to have large computational power to solve the puzzles and form new blocks. Thus, the holders of huge amounts of money are not in charge of making decisions for the entire network."),Object(a.b)("h2",{id:"ethash-algorithm"},"Ethash Algorithm"),Object(a.b)("p",null,"The Zilliqa blockchain uses the Ethash algorithm, which is originally from Ethereum."),Object(a.b)("p",null,"Ethash is the proof-of-work function in Ethereum-based blockchain currencies. It uses Keccak, a hash function eventually standardized to SHA-3 (these two are different, and should not be confused)."),Object(a.b)("p",null,"Since version 1.0, Ethash has been designed to be ASIC-resistant via memory-hardness (i.e., harder to implement in special ASIC chips) and easily verifiable. It also uses a slightly modified version of earlier Dagger and Hashimoto hashes to remove computational overhead. Previously referred to as Dagger-Hashimoto, the Ethash function has evolved over time. Ethash uses an initial 1GB dataset known as the Ethash DAG and a 16MB cache for light clients to hold. These are regenerated every 30,000 blocks (known as an epoch). Miners grab slices of the DAG to generate mix-hashes using transaction and receipt data, along with a cryptographic nonce to generate a hash below a dynamic target difficulty."),Object(a.b)("h2",{id:"pow-modes"},"PoW Modes"),Object(a.b)("p",null,"Zilliqa supports 5 modes of PoW. Some are suitable for local or small-scale testing, while other modes are intended for Mainnet mining."),Object(a.b)("h3",{id:"light-dataset-mine"},"Light Dataset Mine"),Object(a.b)("p",null,"This is the default mining mode if you don't change any parameters in ",Object(a.b)("inlineCode",{parentName:"p"},"constants.xml"),". It uses CPU to do PoW. It will generate the DAG data dynamically and doesn't store it in memory; hence, it is the slowest method, but it also doesn't require the 1GB RAM. It is suitable for local testing or small-scale cloud testing. It is not suitable for Mainnet mining."),Object(a.b)("h3",{id:"full-dataset-mine"},"Full Dataset Mine"),Object(a.b)("p",null,"This mode will be enabled if ",Object(a.b)("inlineCode",{parentName:"p"},"FULL_DATASET_MINE")," is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in ",Object(a.b)("inlineCode",{parentName:"p"},"constants.xml"),". It uses CPU to do PoW. It is similar to the light dataset mine mode - the DAG is generated dynamically. However, after the DAG is generated, it is saved in memory. So, next time the same DAG needs to be used, it will be read out directly from memory. This method is faster than the light dataset mine mode, but it requires 1GB RAM on the hardware. It is suitable for local testing or small-scale cloud testing. It is not suitable for Mainnet mining."),Object(a.b)("h3",{id:"gpu-mine"},"GPU Mine"),Object(a.b)("p",null,"This mode will be enabled if either ",Object(a.b)("inlineCode",{parentName:"p"},"CUDA_GPU_MINE")," or ",Object(a.b)("inlineCode",{parentName:"p"},"OPENCL_GPU_MINE")," is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in ",Object(a.b)("inlineCode",{parentName:"p"},"constants.xml"),". It uses GPU to do PoW. There are more parameters available for this mode in the ",Object(a.b)("inlineCode",{parentName:"p"},"GPU")," section in ",Object(a.b)("inlineCode",{parentName:"p"},"constants.xml"),". This mode uses GPU to generate the DAG, and the DAG is saved in GPU RAM. It requires that the GPU have at least 1GB RAM. Because a GPU has thousands of cores, the mining speed can be much faster than CPU mining. It is suitable for Mainnet mining, but only during the bootstrap phase; now the Mainnet difficulty is too high for a single machine to finish PoW within the required time. Hence it is now suitable only for test purposes."),Object(a.b)("h3",{id:"getwork-server-mine"},"Getwork Server Mine"),Object(a.b)("p",null,"This mode will be enabled if ",Object(a.b)("inlineCode",{parentName:"p"},"GETWORK_SERVER_MINE")," is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in ",Object(a.b)("inlineCode",{parentName:"p"},"constants.xml"),". The Zilliqa node will be used as a mining server, and other GPU machines can get work from this server and submit the result if the node's GPU machine can find a result. This mode can combine the hash power of multiple GPU machines together to finish a high-difficulty PoW job. But this setup is not easy to maintain if there are multiple Zilliqa nodes using this mode."),Object(a.b)("h3",{id:"remote-mine"},"Remote Mine"),Object(a.b)("p",null,"This mode will be enabled if ",Object(a.b)("inlineCode",{parentName:"p"},"REMOTE_MINE")," is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in ",Object(a.b)("inlineCode",{parentName:"p"},"constants.xml"),". Also, ",Object(a.b)("inlineCode",{parentName:"p"},"MINING_PROXY_URL")," needs to be set to the address of the mining proxy. In this mode, multiple Zilliqa nodes can send PoW work requests to the mining proxy, and the mining proxy dispatches the work packages to multiple mining machines. If a mining machine finds a result, it sends it to the mining proxy, and the mining proxy in turn sends it to the Zilliqa node. This mode can support multiple Zilliqa nodes and mining machines, but it requires running a mining proxy server separately."),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Ethash"}),"Ethash")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/DurianStallSingapore/Zilliqa-Mining-Proxy"}),"Mining Proxy"))))}d.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,p=h["".concat(r,".").concat(u)]||h[u]||m[u]||a;return n?o.a.createElement(p,s(s({ref:t},c),{},{components:n})):o.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);