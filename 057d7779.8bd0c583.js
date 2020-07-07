(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(9),o=(n(0),n(237)),r={id:"exchange-getting-started",title:"Getting Started"},l={id:"exchange-getting-started",isDocsHomePage:!1,title:"Getting Started",description:"---",source:"@site/docs/exchange-getting-started.md",permalink:"/dev-portal/docs/exchange-getting-started",editUrl:"https://github.com/Zilliqa/dev-portal/docs/exchange-getting-started.md",sidebar:"someSidebar4",next:{title:"Account Management",permalink:"/dev-portal/docs/exchange-account-management"}},c=[{value:"IP whitelisting",id:"ip-whitelisting",children:[]},{value:"Minimum Hardware Requirements",id:"minimum-hardware-requirements",children:[]},{value:"Preparing the machine",id:"preparing-the-machine",children:[{value:"Docker setup",id:"docker-setup",children:[]},{value:"Native setup",id:"native-setup",children:[]}]},{value:"Configuring the Node",id:"configuring-the-node",children:[]},{value:"Joining the Network",id:"joining-the-network",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"$ZIL Disclaimer")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please read ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.zilliqa.com/disclaimer"}),"$ZIL disclaimer")," before proceeding. "))),Object(o.b)("h1",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"To interact with Zilliqa network, you can either"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"interact with endpoints provided by Zilliqa"),Object(o.b)("li",{parentName:"ul"},"host an endpoint within your infrastructure")),Object(o.b)("p",null,"These endpoints are known as Seed Node in Zilliqa network. They store the full historical\ninformation about Zilliqa broadcast and forward transactions into the network."),Object(o.b)("p",null,"This section will walk you through the basic steps needed to get up and running."),Object(o.b)("h2",{id:"ip-whitelisting"},"IP whitelisting"),Object(o.b)("p",null,"As seed nodes do not draw data directly from lookup or shard nodes,exchanges must be\nwhitelisted by Zilliqa to receive data broadcasts about the blockchain and its state.\nThis requires a static, public IP address with minimally two open ports (inbound and\noutbound) at which it can be reached."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Note on whitelisting process")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Whitelisting of seed node is currently granted based on a need-by basis.\nThe Zilliqa core team will assess each request before whitelisting."))),Object(o.b)("h2",{id:"minimum-hardware-requirements"},"Minimum Hardware Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"x64 Linux operating system (e.g Ubuntu 16.04.05)"),Object(o.b)("li",{parentName:"ul"},"Recent dual-core processor @ 2.2 GHz. Examples:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Intel Core i5 or i7 (Skylake)"),Object(o.b)("li",{parentName:"ul"},"Intel Xeon (Skylake)"))),Object(o.b)("li",{parentName:"ul"},"8GB DRR3 RAM or higher"),Object(o.b)("li",{parentName:"ul"},"Public IP address"),Object(o.b)("li",{parentName:"ul"},"500GB Solid State Drive"),Object(o.b)("li",{parentName:"ul"},"100MB/s upload and download bandwidth")),Object(o.b)("h2",{id:"preparing-the-machine"},"Preparing the machine"),Object(o.b)("p",null,"Before you start, please choose and note down a port you wish to reserve for\nyour seed node to communicate on. This step is critical, as failing to provide\nthe correct port will result in failure."),Object(o.b)("h3",{id:"docker-setup"},"Docker setup"),Object(o.b)("p",null,"We highly recommend using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docker.com"}),"Docker")," to set up a seed node,\nas we provide a tested, production-ready image for your use. If you have not\nyet setup docker, please follow the instructions on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"official documentation"),"."),Object(o.b)("p",null,"Once you have set up Docker, you may proceed to download the configuration\ntarball for the mainnet:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# create a directory\n$ mkdir my_seed && cd my_seed\n# download the seed node configuration files\n$ curl -O https://mainnet-join.zilliqa.com/seed-configuration.tar.gz\n$ tar -zxvf seed-configuration.tar.gz\n\n# Contents:\n#\n# launch.sh\n# constants.xml\n# launch_docker.sh\n# dsnodes.xml\n# download_and_verify.sh\n# fetchHistorical.py\n# fetchHistorical.sh\n# config.xml\n")),Object(o.b)("p",null,"Once you have successfully uncompressed the tarball, you should generate a new\nkeypair, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ ./launch_docker.sh --genkeypair\n")),Object(o.b)("h3",{id:"native-setup"},"Native setup"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this approach has only been tested on ",Object(o.b)("strong",{parentName:"p"},"Ubuntu 16.04")," and involves compiling\nC++. We strongly recommend you consider using the Docker image provided above.")),Object(o.b)("p",null,"If you cannot or do not wish to use Docker, you may also build the Zilliqa\nbinary from source and run it as such."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# clone Zilliqa source files\n$ git clone https://github.com/Zilliqa/Zilliqa.git && cd Zilliqa && git checkout\n<<commit_sha>> && cd Zilliqa\n\n# install system dependencies\n$ sudo apt-get update && sudo apt-get install \\\n    git \\\n    libboost-system-dev \\\n    libboost-filesystem-dev \\\n    libboost-test-dev \\\n    libssl-dev \\\n    libleveldb-dev \\\n    libjsoncpp-dev \\\n    libsnappy-dev \\\n    cmake \\\n    libmicrohttpd-dev \\\n    libjsonrpccpp-dev \\\n    build-essential \\\n    pkg-config \\\n    libevent-dev \\\n    libminiupnpc-dev \\\n    libcurl4-openssl-dev \\\n    libboost-program-options-dev \\\n    libboost-python-dev \\\n    python3-dev         \\\n    python3-setuptools  \\\n    python3-pip         \\\n    gawk\n\n$ sudo apt install python-pip\n$ export LC_ALL=C\n$ pip install request requests clint futures\n$ pip3 install requests clint futures\n\n# build the binary. this may take awhile.\n$ ./build.sh\n")),Object(o.b)("p",null,"The build should exit with no errors. Once it is complete, download the\nconfiguration tarball, and generate a keypair:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# make a separate folder for keys and configuration\n$ cd ../ && mkdir my_seed && cd my_seed\n# download the seed node configuration files\n$ curl -O https://mainnet-join.zilliqa.com/seed-configuration.tar.gz\n$ tar -zxvf seed-configuration.tar.gz\n\n# generate a keypair\n$ ../Zilliqa/build/bin/genkeypair > mykey.txt\n")),Object(o.b)("h2",{id:"configuring-the-node"},"Configuring the Node"),Object(o.b)("p",null,"The node requires some configuration before it can successfully join the\nnetwork. Most configuration is contained in ",Object(o.b)("inlineCode",{parentName:"p"},"constants.xml"),", which should be\nin the directory we extracted ",Object(o.b)("inlineCode",{parentName:"p"},"configuration.tar.gz")," to. Minimally, the\nfollowing changes are required:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Change the value of ",Object(o.b)("inlineCode",{parentName:"li"},"SEED_PORT")," to ",Object(o.b)("inlineCode",{parentName:"li"},"33133")," (default), or a port of your choice (if\nany). Be sure to note this down for a subsequent step, if you do not select\n",Object(o.b)("inlineCode",{parentName:"li"},"33133"),"."),Object(o.b)("li",{parentName:"ul"},"Change the value of ",Object(o.b)("inlineCode",{parentName:"li"},"ENABLE_WEBSOCKET")," to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," if your seed node will support\nwebsockets (refer to the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Zilliqa/dev-portal/tree/master/docs/api-websocket.md"}),"Zilliqa Websocket Server")," documentation).")),Object(o.b)("h2",{id:"joining-the-network"},"Joining the Network"),Object(o.b)("p",null,"Once the preliminary steps have been completed, join the network is relatively\nstraightforward."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# NOTE: run only ONE of the following.\n# for Docker setup\n$ ./launch_docker.sh\n# for native setup\n$ ./launch.sh\n")),Object(o.b)("p",null,"You will be asked a series of questions. When asked to enter your IP address\nand listening port, please enter the values you provided us when you submitted\nthe KYC form. This is crucial, as your node ",Object(o.b)("strong",{parentName:"p"},"will not work")," with anything\nelse."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"If you have completed the above steps, you should have\na functioning seed node that exposes an RPC API on ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:4201"),". You may\nfurther check the logs at ",Object(o.b)("inlineCode",{parentName:"p"},"zilliqa-00001-log.txt"),"."),Object(o.b)("p",null,"The following articles in this series will demonstrate a simple set of\nfunctions that can be used as a starting point for exchange developers to implement\ntheir custom business logic around the Zilliqa blockchain. You may find\nthe full source code of the example app in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/dev-portal/tree/master/examples/exchange"}),"same repository"),"."))}d.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,h=b["".concat(r,".").concat(p)]||b[p]||u[p]||o;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);