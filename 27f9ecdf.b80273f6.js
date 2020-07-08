(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(239)),o={id:"contribute-guidelines",title:"Contribution Guidelines"},l={id:"contributors/contribute-guidelines",isDocsHomePage:!1,title:"Contribution Guidelines",description:"Development Process",source:"@site/docs/contributors/contribute-guidelines.md",permalink:"/dev-portal/docs/contributors/contribute-guidelines",editUrl:"https://github.com/Zilliqa/dev-portal/docs/contributors/contribute-guidelines.md",sidebar:"ContributorsSidebar",previous:{title:"Building Zilliqa",permalink:"/dev-portal/docs/contributors/contribute-buildzil"},next:{title:"Protocol Standards",permalink:"/dev-portal/docs/contributors/contribute-standards"}},c=[{value:"Development Process",id:"development-process",children:[]},{value:"CI/CD Pipeline and Release Management",id:"cicd-pipeline-and-release-management",children:[]},{value:"Testing",id:"testing",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"development-process"},"Development Process"),Object(i.b)("p",null,"We keep our development process fairly simple and enforce any hard rules through automation."),Object(i.b)("p",null,"Before beginning, please familiarize yourself with these documents:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Zilliqa/Zilliqa/blob/master/CODE_OF_CONDUCT.md"}),"Code of Conduct")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Zilliqa/Zilliqa/blob/master/CODING_STYLE.md"}),"Coding Style")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Zilliqa/Zilliqa/blob/master/CONTRIBUTING.md"}),"Coding and Review Guidelines"))),Object(i.b)("p",null,"These are the basic things to consider when contributing to the project:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch is the main development branch of the Zilliqa repository. All new work must be created on a new branch off of the ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch."),Object(i.b)("li",{parentName:"ol"},"When compiling code changes, use ",Object(i.b)("inlineCode",{parentName:"li"},"./build.sh style")," instead of just ",Object(i.b)("inlineCode",{parentName:"li"},"./build.sh")," in order for clang-format to automatically fix the code formatting."),Object(i.b)("li",{parentName:"ol"},"Write or perform any tests for your code changes. The different supported tests are described in the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#testing"}),"section")," below."),Object(i.b)("li",{parentName:"ol"},"When submitting a pull request, fill in the details requested in the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Zilliqa/Zilliqa/blob/master/.github/PULL_REQUEST_TEMPLATE.md"}),"template"),".")),Object(i.b)("h2",{id:"cicd-pipeline-and-release-management"},"CI/CD Pipeline and Release Management"),Object(i.b)("p",null,"Pull requests must get approval from at least 2 reviewers before they can be merged into the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch."),Object(i.b)("p",null,"Additionally, pull requests must pass the automated checks on the code changes. These are done by Travis CI build jobs along both the branch and the merge with ",Object(i.b)("inlineCode",{parentName:"p"},"master"),". These checks include:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Code build"),Object(i.b)("li",{parentName:"ol"},"clang-format"),Object(i.b)("li",{parentName:"ol"},"clang-tidy"),Object(i.b)("li",{parentName:"ol"},"Code coverage")),Object(i.b)("p",null,"New releases are periodically created, and these can be accessed by checking out release tags (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"git checkout tags/v6.2.0"),").\nThese releases are accompanied by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa/releases"}),"release notes")," detailing the fixes, improvements, and any new features."),Object(i.b)("p",null,"Releases are also automatically made available as Docker images on our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/repository/docker/zilliqa/zilliqa"}),"Docker Hub repository"),".\nNode operators who are not on our officially supported operating systems may choose to run their nodes on these images instead."),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"There are several ways to test out the core protocol:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Writing ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Zilliqa/Zilliqa/tree/master/tests"}),"unit tests")," targeted at specific parts of the code. Most unit tests are executed as part of the CI/CD pipeline to ensure non-regression."),Object(i.b)("li",{parentName:"ol"},"Booting up a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Zilliqa/Zilliqa#boot-up-a-local-testnet-for-development"}),"local testnet")," to simulate the Zilliqa network on a local machine."),Object(i.b)("li",{parentName:"ol"},"Launching a cloud-based testnet that approximates the actual Zilliqa Mainnet. Currently this method is available only to the Zilliqa Research team. Please coordinate with the team should your code changes require testing using this method.")))}b.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);