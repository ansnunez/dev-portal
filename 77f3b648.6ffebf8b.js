(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(9),i=(a(0),a(241)),o={id:"staking-faq",title:"Frequently asked question (FAQ)"},s={id:"exchanges/staking-faq",isDocsHomePage:!1,title:"Frequently asked question (FAQ)",description:"---",source:"@site/docs/exchanges/staking-faq.md",permalink:"/dev-portal/docs/exchanges/staking-faq",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/exchanges/staking-faq.md",sidebar:"ExchangesSidebar",previous:{title:"SSN Maintenance",permalink:"/dev-portal/docs/exchanges/staking-ssn-maintenance"}},l=[{value:"How do I track my users\u2019 rewards?",id:"how-do-i-track-my-users-rewards",children:[]},{value:"Why are my accumulated rewards less than the expected amount?",id:"why-are-my-accumulated-rewards-less-than-the-expected-amount",children:[]},{value:"Why is my seed node not shown on the seed node monitoring status page?",id:"why-is-my-seed-node-not-shown-on-the-seed-node-monitoring-status-page",children:[]},{value:"Can I make multiple deposits into the stake deposit?",id:"can-i-make-multiple-deposits-into-the-stake-deposit",children:[]},{value:"Can I make multiple withdrawals from the stake deposit?",id:"can-i-make-multiple-withdrawals-from-the-stake-deposit",children:[]},{value:"Can I make multiple withdrawals from the staked rewards?",id:"can-i-make-multiple-withdrawals-from-the-staked-rewards",children:[]}],d={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"how-do-i-track-my-users-rewards"},"How do I track my users\u2019 rewards?"),Object(i.b)("p",null,"This is out of the scope at the staking implementation layer. Staked seed node operators will need to provide facilities for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allowing user to deposit stake "),Object(i.b)("li",{parentName:"ul"},"Allowing user to withdraw stake "),Object(i.b)("li",{parentName:"ul"},"Distribution of stake rewards")),Object(i.b)("h2",{id:"why-are-my-accumulated-rewards-less-than-the-expected-amount"},"Why are my accumulated rewards less than the expected amount?"),Object(i.b)("p",null,"There are several situations where an SSN may be assigned less than the expected rewards after a certain period of operation, such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Downtime of the Zilliqa network (e.g., for maintenance and upgrades), in which case the network does not progress and the number of DS blocks mined for the year falls below the expected number. This reduced DS block count in turn results in fewer reward cycles for the year, and thus less accumulated rewards."),Object(i.b)("li",{parentName:"ul"},"The staked seed node didn\u2019t perform well and may have failed one or more of the checks performed by the Verifier during the reward cycle.")),Object(i.b)("h2",{id:"why-is-my-seed-node-not-shown-on-the-seed-node-monitoring-status-page"},"Why is my seed node not shown on the seed node monitoring status page?"),Object(i.b)("p",null,"This is an indication that your seed node is not currently active. It may either exist in the contract as an inactive node or it has yet to be added to the contract."),Object(i.b)("h2",{id:"can-i-make-multiple-deposits-into-the-stake-deposit"},"Can I make multiple deposits into the stake deposit?"),Object(i.b)("p",null,"Yes, you may do so at any time, but take note of these items:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The staked seed node remains inactive until the accumulated stake deposit reaches the minimum stake amount (10,000,000 ZIL)"),Object(i.b)("li",{parentName:"ul"},"Incremental deposits are buffered and excluded from the reward calculation until the next rewarding cycle (i.e,. every 15th DS epoch) has passed")),Object(i.b)("h2",{id:"can-i-make-multiple-withdrawals-from-the-stake-deposit"},"Can I make multiple withdrawals from the stake deposit?"),Object(i.b)("p",null,"Yes, you may do so at any time, but take note of these items:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The staked seed node remains active (and eligible for rewards) until the stake deposit falls below the minimum stake amount (10,000,000 ZIL)"),Object(i.b)("li",{parentName:"ul"},"Incremental withdrawals are immediately deducted from the stake deposit and will affect the amount of rewards the seed node will receive for the current rewarding cycle"),Object(i.b)("li",{parentName:"ul"},"A withdrawal that zeroes out the stake deposit (with rewards not fully withdrawn) also automatically removes the staked seed node from the smart contract")),Object(i.b)("h2",{id:"can-i-make-multiple-withdrawals-from-the-staked-rewards"},"Can I make multiple withdrawals from the staked rewards?"),Object(i.b)("p",null,"Yes, you may do so at any time, but take note of these items:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A withdrawal that zeroes out the rewards (with stake deposit also fully withdrawn) also automatically removes the staked seed node from the smart contract")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"More FAQs for staking are available on the Zilliqa website at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.zilliqa.com/faq"}),"https://www.zilliqa.com/faq")))))}c.isMDXComponent=!0},241:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,p=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return a?r.a.createElement(p,s(s({ref:t},d),{},{components:a})):r.a.createElement(p,s({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);