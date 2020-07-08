(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(2),i=r(9),a=(r(0),r(239)),o={id:"mining-zilminer",title:"Running ZILMiner for Mining Rigs"},l={id:"miners/mining-zilminer",isDocsHomePage:!1,title:"Running ZILMiner for Mining Rigs",description:"Hardware Requirements",source:"@site/docs/miners/mining-zilminer.md",permalink:"/dev-portal/docs/miners/mining-zilminer",editUrl:"https://github.com/Zilliqa/dev-portal/docs/miners/mining-zilminer.md",sidebar:"MinersSidebar",previous:{title:"Running the Zilliqa Client",permalink:"/dev-portal/docs/miners/mining-zilclient"},next:{title:"Proxy Mining",permalink:"/dev-portal/docs/miners/mining-proxy"}},p=[{value:"Hardware Requirements",id:"hardware-requirements",children:[]},{value:"GPU Driver Setup for ZilMiner",id:"gpu-driver-setup-for-zilminer",children:[{value:"OpenCL Driver Setup (for AMD/Nvidia GPUs)",id:"opencl-driver-setup-for-amdnvidia-gpus",children:[]},{value:"CUDA Driver Setup (for Nvidia GPUs only)",id:"cuda-driver-setup-for-nvidia-gpus-only",children:[]}]},{value:"Mining Steps",id:"mining-steps",children:[]},{value:"Stopping the Mining Process",id:"stopping-the-mining-process",children:[]}],c={rightToc:p};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hardware-requirements"},"Hardware Requirements"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/DurianStallSingapore/ZILMiner"}),Object(a.b)("strong",{parentName:"a"},"ZilMiner"))," software is officially supported on both Ubuntu and Windows OS."),Object(a.b)("p",null,"Both ",Object(a.b)("strong",{parentName:"p"},"AMD")," (with OpenCL) and ",Object(a.b)("strong",{parentName:"p"},"Nvidia")," (with OpenCL or CUDA) GPUs are supported for the Zilliqa PoW process."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"minimum")," requirements for running ",Object(a.b)("strong",{parentName:"p"},"ZilMiners")," are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"x64 Operating system (Ubuntu or Windows)"),Object(a.b)("li",{parentName:"ul"},"Dual-core processor or later"),Object(a.b)("li",{parentName:"ul"},"4GB DDR3 RAM or higher"),Object(a.b)("li",{parentName:"ul"},"Any GPUs with at least 2 GB RAM")),Object(a.b)("h2",{id:"gpu-driver-setup-for-zilminer"},"GPU Driver Setup for ZilMiner"),Object(a.b)("h3",{id:"opencl-driver-setup-for-amdnvidia-gpus"},"OpenCL Driver Setup (for AMD/Nvidia GPUs)"),Object(a.b)("p",null,"If you wish to use OpenCL supported GPUs for PoW, please run the following to install the OpenCL developer package:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sudo apt install ocl-icd-opencl-dev\n")),Object(a.b)("p",null,"You may need to reboot your PC for the installation to take effect. After reboot, check if your drivers are installed properly with the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"clinfo\n")),Object(a.b)("h3",{id:"cuda-driver-setup-for-nvidia-gpus-only"},"CUDA Driver Setup (for Nvidia GPUs only)"),Object(a.b)("p",null,"If you wish to use CUDA supported GPU for PoW, please download and install CUDA package from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.nvidia.com/cuda-downloads"}),Object(a.b)("strong",{parentName:"a"},"NVIDIA official webpage")),". You may need to reboot your PC for the installation to take effect."),Object(a.b)("h2",{id:"mining-steps"},"Mining Steps"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install ",Object(a.b)("strong",{parentName:"p"},"ZilMiner")," on your GPU rigs:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"For Windows OS:")," ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/DurianStallSingapore/ZILMiner/releases/"}),Object(a.b)("strong",{parentName:"a"},"DOWNLOAD THE LASTEST RELEASE HERE"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"For Ubuntu OS:")," ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/DurianStallSingapore/ZILMiner/releases/"}),Object(a.b)("strong",{parentName:"a"},"DOWNLOAD THE LASTEST RELEASE HERE"))))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Setup your ",Object(a.b)("strong",{parentName:"p"},"ZilMiner")," on your GPU rigs with the following command:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"zilminer -P zil://wallet_address.worker_name@zil_node_ip:get_work_port\n")),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"NOTE:")," You have to change the ",Object(a.b)("em",{parentName:"p"},"wallet_address"),", ",Object(a.b)("em",{parentName:"p"},"worker_name"),", ",Object(a.b)("em",{parentName:"p"},"zil_node_ip"),", and ",Object(a.b)("em",{parentName:"p"},"get_work_port")," accordingly.")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("inlineCode",{parentName:"li"},"wallet_address")," : You can input any arbitrary Zilliqa address. This is only used by the pool master for accounting purposes. If you are mining solo, you can ignore this parameter."),Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("inlineCode",{parentName:"li"},"worker_name")," : You can input any arbitrary worker name you desire."),Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("inlineCode",{parentName:"li"},"zil_node_ip")," : Please input the IP address of the CPU node running the Zilliqa Client."),Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("inlineCode",{parentName:"li"},"get_work_port")," : Please input the port used in ",Object(a.b)("inlineCode",{parentName:"li"},"GETWORK_SERVER_PORT"),". Default is ",Object(a.b)("inlineCode",{parentName:"li"},"4202"),".")))),Object(a.b)("h2",{id:"stopping-the-mining-process"},"Stopping the Mining Process"),Object(a.b)("p",null,"To stop mining, you will need to kill your ",Object(a.b)("strong",{parentName:"p"},"ZilMiner")," process on your GPU rigs."))}b.isMDXComponent=!0},239:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||a;return r?i.a.createElement(d,l(l({ref:t},c),{},{components:r})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);