(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),i=(n(0),n(239)),o={id:"mining-zilclient",title:"Running the Zilliqa Client"},l={id:"miners/mining-zilclient",isDocsHomePage:!1,title:"Running the Zilliqa Client",description:"Hardware Requirements",source:"@site/docs/miners/mining-zilclient.md",permalink:"/dev-portal/docs/miners/mining-zilclient",editUrl:"https://github.com/Zilliqa/dev-portal/docs/miners/mining-zilclient.md",sidebar:"MinersSidebar",previous:{title:"Getting Started",permalink:"/dev-portal/docs/miners/mining-getting-started"},next:{title:"Running ZILMiner for Mining Rigs",permalink:"/dev-portal/docs/miners/mining-zilminer"}},c=[{value:"Hardware Requirements",id:"hardware-requirements",children:[]},{value:"Network Setup for Zilliqa Client",id:"network-setup-for-zilliqa-client",children:[{value:"Option 1a",id:"option-1a",children:[]},{value:"Option 1b",id:"option-1b",children:[]}]},{value:"Mining Steps",id:"mining-steps",children:[]},{value:"Monitoring Progress",id:"monitoring-progress",children:[]},{value:"Checking Your Generated Keypairs",id:"checking-your-generated-keypairs",children:[]},{value:"Checking Your ZIL Balance",id:"checking-your-zil-balance",children:[]},{value:"Stopping the Mining Process",id:"stopping-the-mining-process",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hardware-requirements"},"Hardware Requirements"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/zilliqa"}),Object(i.b)("strong",{parentName:"a"},"Zilliqa Client"))," is only officially supported on Ubuntu 16.04 OS."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"minimum")," requirements for running the ",Object(i.b)("strong",{parentName:"p"},"Zilliqa Client")," are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"x64 Linux operating system (e.g Ubuntu 16.04.05)"),Object(i.b)("li",{parentName:"ul"},"Recent dual-core processor @ 2.2 GHZ. Examples:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Intel Core i5 or i7 (Skylake)"),Object(i.b)("li",{parentName:"ul"},"Intel Xeon (Skylake)"),Object(i.b)("li",{parentName:"ul"},"AMD Ryzen"))),Object(i.b)("li",{parentName:"ul"},"4GB DRR3 RAM or higher"),Object(i.b)("li",{parentName:"ul"},"NAT environment ",Object(i.b)("strong",{parentName:"li"},"OR")," Public IP address"),Object(i.b)("li",{parentName:"ul"},"Any GPUs with at least 2 GB RAM")),Object(i.b)("h2",{id:"network-setup-for-zilliqa-client"},"Network Setup for Zilliqa Client"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE:")," If you are using a home router, you are most probably in a NAT environment.")),Object(i.b)("p",null,"If you are in a NAT environment, you can either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do single port forwarding using ",Object(i.b)("strong",{parentName:"li"},"Option 1a"),". This should be your ",Object(i.b)("strong",{parentName:"li"},"DEFAULT OPTION"),"."),Object(i.b)("li",{parentName:"ul"},"Enable UPnP mode using ",Object(i.b)("strong",{parentName:"li"},"Option 1b")," if your router does support UPnP.")),Object(i.b)("p",null,"If you have a public IP address, you can skip this network setup section entirely."),Object(i.b)("h3",{id:"option-1a"},"Option 1a"),Object(i.b)("p",null,"Port forward to port ",Object(i.b)("inlineCode",{parentName:"p"},"33133")," for both external port (port range) and internal port (local port). You will also have to select the option for ",Object(i.b)("strong",{parentName:"p"},"BOTH")," TCP and UDP protocol in your router menu when port forwarding. ",Object(i.b)("br",null),"An example of this process can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linksys.com/us/support-article?articleNum=136711"}),Object(i.b)("strong",{parentName:"a"},"HERE")),". After port forwarding, you may check if you have successfully port forwarded with this ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.yougetsignal.com/tools/open-ports/"}),Object(i.b)("strong",{parentName:"a"},"Open Port Check Tool")),"."),Object(i.b)("h3",{id:"option-1b"},"Option 1b"),Object(i.b)("p",null,"Enable UPnP mode on your home router. Please Google how to access your home router setting to enable UPnP, an example can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://routerguide.net/how-to-enable-upnp-for-rt-ac66u/"}),Object(i.b)("strong",{parentName:"a"},"HERE")),". You can check if you have enabled it UPnP by installing the following tool:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"sudo apt-get install miniupnpc\n")),Object(i.b)("p",null,"Then type the following in the command line:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"upnpc -s\n")),Object(i.b)("p",null,"You should get a message showing either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'"List of UPNP devices found on the network : ..."'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"OR"),' "No IGD UPnP Device found on the network !".')),Object(i.b)("p",null,"The first message means UPnP mode has been enabled successfully, while the latter means the enabling of UPnP mode has failed. If you receive the latter message, proceed with using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#option-1a"}),Object(i.b)("strong",{parentName:"a"},"Option 1a"))," instead."),Object(i.b)("h2",{id:"mining-steps"},"Mining Steps"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a single local or remote CPU node instance with Ubuntu 16.04 OS installed following instructions ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://releases.ubuntu.com/xenial/"}),Object(i.b)("strong",{parentName:"a"},"HERE")),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install Docker CE for Ubuntu on your CPU node instance by following instructions ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"}),Object(i.b)("strong",{parentName:"a"},"HERE")),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make a new directory in your Desktop and change directory to it:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd ~/Desktop && mkdir join && cd join\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get the joining configuration files:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"wget https://mainnet-join.zilliqa.com/configuration.tar.gz\ntar zxvf configuration.tar.gz\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Find out your current IP address in the command prompt and record it down:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl https://ipinfo.io/ip\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"}," Note:")," Please consult the previous section if you are in a NAT environment.")),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit your ",Object(i.b)("em",{parentName:"p"},"constant.xml")," file in your configuration folder:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set ",Object(i.b)("inlineCode",{parentName:"p"},"GETWORK_SERVER_MINE")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set ",Object(i.b)("inlineCode",{parentName:"p"},"GETWORK_SERVER_PORT")," to the port you will be using to GetWork. (default is ",Object(i.b)("inlineCode",{parentName:"p"},"4202"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the following mining parameters to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"<CUDA_GPU_MINE>false</CUDA_GPU_MINE>\n<FULL_DATASET_MINE>false</FULL_DATASET_MINE>\n<OPENCL_GPU_MINE>false</OPENCL_GPU_MINE>\n<REMOTE_MINE>false</REMOTE_MINE>\n"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the python dependencies:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"sudo apt install python-pip\nexport LC_ALL=C\npip install request requests clint futures\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the shell script in your command prompt to launch your docker image:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"./launch_docker.sh\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You will be prompted to enter some information as shown below:"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE:")," ",Object(i.b)("strong",{parentName:"p"},"DO NOT")," duplicate your IP address and use different ports to create different CPU nodes. You will be blacklisted by the network and hence not be able to receive any rewards.")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Assign a name to your container (default: zilliqa):")," ",Object(i.b)("br",null)," ","[Press ",Object(i.b)("strong",{parentName:"p"},"Enter")," to skip if using default]")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Enter your IP address ('NAT' or *.*.*.*):")," ",Object(i.b)("br",null)," [Key in your IP address as found in step 5 ",Object(i.b)("strong",{parentName:"p"},"OR")," ",Object(i.b)("inlineCode",{parentName:"p"},"NAT")," if you chose ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mining-initial-setup#option-1b"}),"Option 1b")," for network setup]")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Enter your listening port (default: 33133):")," ",Object(i.b)("br",null)," ","[Press ",Object(i.b)("strong",{parentName:"p"},"Enter")," to skip if using default]"))))),Object(i.b)("h2",{id:"monitoring-progress"},"Monitoring Progress"),Object(i.b)("p",null,"You are now a miner in the Zilliqa Mainnet. You can monitor your progress on your CPU node by using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"tail -f zilliqa-00001-log.txt\n")),Object(i.b)("h2",{id:"checking-your-generated-keypairs"},"Checking Your Generated Keypairs"),Object(i.b)("p",null,"To check your locally generated public and private key pairs in your ",Object(i.b)("em",{parentName:"p"},"mykey.txt")," file, you can enter the following in your command prompt on your CPU node:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"less mykey.txt\n")),Object(i.b)("p",null,"The first hex string is your ",Object(i.b)("strong",{parentName:"p"},"public key"),", and the second hex string is your ",Object(i.b)("strong",{parentName:"p"},"private key"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE:")," This key pair is generated locally on your disk. Do remember to keep your private key somewhere safe!")),Object(i.b)("h2",{id:"checking-your-zil-balance"},"Checking Your ZIL Balance"),Object(i.b)("p",null,"To check your balance for mining, input the address located in your ",Object(i.b)("em",{parentName:"p"},"myaddr.txt")," file in the search bar of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://viewblock.io/zilliqa"}),"https://viewblock.io/zilliqa"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"less myaddr.txt\n")),Object(i.b)("h2",{id:"stopping-the-mining-process"},"Stopping the Mining Process"),Object(i.b)("p",null,"To stop the mining client, stop the docker container running the ",Object(i.b)("strong",{parentName:"p"},"Zilliqa Client")," on the CPU node:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"sudo docker stop zilliqa\n")))}p.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,O=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(O,l(l({ref:t},b),{},{components:n})):r.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);