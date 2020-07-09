(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(9),r=(n(0),n(241)),l={id:"core-view-change",title:"View Change"},c={id:"contributors/core-view-change",isDocsHomePage:!1,title:"View Change",description:"---",source:"@site/docs/contributors/core-view-change.md",permalink:"/dev-portal/docs/contributors/core-view-change",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/contributors/core-view-change.md",sidebar:"ContributorsSidebar",previous:{title:"Rejoin Mechanism",permalink:"/dev-portal/docs/contributors/core-rejoin-mechanism"},next:{title:"Diagnostic Data",permalink:"/dev-portal/docs/contributors/core-diagnostic-data"}},i=[{value:"Terminology",id:"terminology",children:[]},{value:"Trigger Conditions",id:"trigger-conditions",children:[]},{value:"Procedure",id:"procedure",children:[]}],s={rightToc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("p",null,"In the event of a network stall, the core protocol falls back to a view change. This process occurs within the DS committee, and involves the selection of a new DS committee leader to pick the blockchain's progress back up at the point just before the stall."),Object(r.b)("p",null,"The general steps are as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The DS committee consensus stalls for some reason"),Object(r.b)("li",{parentName:"ol"},"The network enters into a view change state"),Object(r.b)("li",{parentName:"ol"},"A candidate leader from the DS committee leads the view change consensus using PBFT"),Object(r.b)("li",{parentName:"ol"},"The DS backups validate the candidate leader's announcement"),Object(r.b)("li",{parentName:"ol"},"View change consensus is reached"),Object(r.b)("li",{parentName:"ol"},"The DS committee resumes the stalled consensus")),Object(r.b)("h3",{id:"terminology"},"Terminology"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Candidate leader: The proposed leader who will lead the view change consensus round"),Object(r.b)("li",{parentName:"ol"},"Faulty leader(s): The current leader prior to the stall, and any candidate leaders who could not successfully complete the view change consensus"),Object(r.b)("li",{parentName:"ol"},"Ejection: Placement of all faulty leader(s) to the back of the DS committee. This means those nodes will be prioritized for removal from the DS committee after the next DS consensus")),Object(r.b)("h3",{id:"trigger-conditions"},"Trigger Conditions"),Object(r.b)("p",null,"These are the conditions that can cause a view change to occur:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Node entered ",Object(r.b)("inlineCode",{parentName:"li"},"RunConsensusOnDSBlock()")," but DS block consensus did not complete within the time stipulated"),Object(r.b)("li",{parentName:"ol"},"Node entered ",Object(r.b)("inlineCode",{parentName:"li"},"RunConsensusOnFinalBlock()")," but Tx block consensus did not complete within the time stipulated"),Object(r.b)("li",{parentName:"ol"},"Node entered ",Object(r.b)("inlineCode",{parentName:"li"},"RunConsensusOnViewChange()")," but VC block consensus did not complete within the time stipulated")),Object(r.b)("h3",{id:"procedure"},"Procedure"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Any trigger condition is satisfied and view change begins")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"DS nodes perform view change pre-check:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Contact lookup to ask for new blocks (DS or Tx)"),Object(r.b)("li",{parentName:"ol"},"If no new block is obtained, proceed with view change"),Object(r.b)("li",{parentName:"ol"},"If a new block is obtained, rejoin as a DS node"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"All nodes calculate the new candidate leader index using ",Object(r.b)("inlineCode",{parentName:"p"},"CalculateNewLeaderIndex()"),", which uses this algorithm"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"H(finalblock or vc block hash, vc counter) % size (or num of DS guard)\n\nIf a previous vc block (for current consensus) exists, use vc block hash. Else use Tx block hash. If new candidate leader index is current faulty leader, re-calculate using\nH(H(finalblock or vc block hash, vc counter)) repeatedly till an index is not the current faulty leader.\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Candidate leader and backups proceed with view change consensus until completion or stall"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"If stalled, wait for timeout and re-run view change consensus with a new candidate leader"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"All nodes remove faulty leaders (found in the VC block header's list) from DS Committee")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"All nodes add faulty leaders to the back of DS Committee (unless those are ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-portal/docs/contributors/core-guard-mode"}),"DS guards"),")")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"All nodes recalculate ",Object(r.b)("inlineCode",{parentName:"p"},"m_consensusMyID")," and ",Object(r.b)("inlineCode",{parentName:"p"},"m_consensusLeaderID")," according to the updated DS committee")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"All nodes store the VC block to persistent storage")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If stalled consensus is at Tx block consensus:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"VC block(s) is sent to the lookup and shard nodes"),Object(r.b)("li",{parentName:"ol"},"Lookups and shard nodes use the VC block(s) to update the DS committee composition similarly"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If stalled consensus is at DS block consensus:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"DS nodes cache all VC block(s) generated during the view change(s)"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"All nodes re-run the stalled consensus (DS block or Tx block consensus) prior to view change"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"If the re-run consensus is for Tx block, the gas limit will be adjusted using exponential backoff algorithm"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Consensus runs to completion (or, fails and triggers another stall)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If completed consensus is for DS block:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"DS nodes append the cached VC block(s) to the newly generated DS block"),Object(r.b)("li",{parentName:"ol"},"DS block (together with the VC block(s)) is sent to the lookup and shard nodes"),Object(r.b)("li",{parentName:"ol"},"Lookups and shard nodes use the VC block(s) to update the DS committee composition similarly")))))}b.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);