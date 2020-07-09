(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),i=(n(0),n(241)),o={id:"core-message-dispatch",title:"Message Dispatch and Processing"},c={id:"contributors/core-message-dispatch",isDocsHomePage:!1,title:"Message Dispatch and Processing",description:"---",source:"@site/docs/contributors/core-message-dispatch.md",permalink:"/dev-portal/docs/contributors/core-message-dispatch",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/contributors/core-message-dispatch.md",sidebar:"ContributorsSidebar",previous:{title:"Messaging Limits",permalink:"/dev-portal/docs/contributors/core-messaging-limits"},next:{title:"Message Queues and Jobs",permalink:"/dev-portal/docs/contributors/core-message-queues"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"src/cmd/main.cpp"),", we assign ",Object(i.b)("inlineCode",{parentName:"p"},"Zilliqa::Dispatch")," as the dispatcher inside ",Object(i.b)("inlineCode",{parentName:"p"},"P2PComm::StartMessagePump"),". Every message that is read from a socket by ",Object(i.b)("inlineCode",{parentName:"p"},"P2PComm")," then gets sent to ",Object(i.b)("inlineCode",{parentName:"p"},"Zilliqa::Dispatch"),"."),Object(i.b)("p",null,"When Zilliqa starts to process a message, it will call ",Object(i.b)("inlineCode",{parentName:"p"},"Zilliqa::ProcessMessage"),". The first byte of any message defines the ",Object(i.b)("strong",{parentName:"p"},"message type"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The \u201cfirst byte\u201d here refers to the payload part of a socket message. At the ",Object(i.b)("inlineCode",{parentName:"p"},"P2PComm")," level, each socket message consists of a predefined header plus the payload."))),Object(i.b)("p",null,"Depending on the type, ",Object(i.b)("inlineCode",{parentName:"p"},"Zilliqa::ProcessMessage")," will forward the message to the appropriate handler for it. The list of message types can be found in ",Object(i.b)("inlineCode",{parentName:"p"},"enum MessageType")," inside ",Object(i.b)("inlineCode",{parentName:"p"},"src/common/Messages.h"),"."),Object(i.b)("p",null,"Any class that inherits from ",Object(i.b)("inlineCode",{parentName:"p"},"Executable")," will be a message handler. For example, type ",Object(i.b)("inlineCode",{parentName:"p"},"0x01")," means ",Object(i.b)("inlineCode",{parentName:"p"},"DIRECTORY"),", and this message will be handled by ",Object(i.b)("inlineCode",{parentName:"p"},"libDirectoryService"),". If you go into ",Object(i.b)("inlineCode",{parentName:"p"},"libDirectoryService"),", you will find a function ",Object(i.b)("inlineCode",{parentName:"p"},"DirectoryService::Execute"),"."),Object(i.b)("p",null,"All classes that inherit from ",Object(i.b)("inlineCode",{parentName:"p"},"Executable")," will first check the second byte in the message, which defines the ",Object(i.b)("strong",{parentName:"p"},"instruction type"),". The list of instruction types can be found in ",Object(i.b)("inlineCode",{parentName:"p"},"src/common/Messages.h"),"."),Object(i.b)("p",null,"From there, ",Object(i.b)("inlineCode",{parentName:"p"},"Execute()")," will further forward the message to a private function inside the class, and these functions are all named ",Object(i.b)("inlineCode",{parentName:"p"},"ProcessXXX"),"."))}l.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||i;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);