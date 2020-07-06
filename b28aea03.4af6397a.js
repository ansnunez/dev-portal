(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),r=(n(0),n(237)),o={id:"core-gossip",title:"Gossip"},s={id:"core-gossip",isDocsHomePage:!1,title:"Gossip",description:"A RumorManager library is available in the Zilliqa core to support message gossiping between nodes.",source:"@site/docs/core-gossip.md",permalink:"/dev-portal/docs/core-gossip",editUrl:"https://github.com/Zilliqa/dev-portal/docs/core-gossip.md",sidebar:"someSidebar5",previous:{title:"Multisignatures",permalink:"/dev-portal/docs/core-multisignatures"},next:{title:"Broadcasting",permalink:"/dev-portal/docs/core-broadcasting"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Interfaces",id:"interfaces",children:[{value:"InitializeRumorManager",id:"initializerumormanager",children:[]},{value:"SpreadRumor",id:"spreadrumor",children:[]},{value:"SpreadForeignRumor",id:"spreadforeignrumor",children:[]},{value:"StopRounds",id:"stoprounds",children:[]}]},{value:"Rumor State Machine",id:"rumor-state-machine",children:[]},{value:"Gossip Message Format",id:"gossip-message-format",children:[]},{value:"Optimized Pull-Push Mechanism",id:"optimized-pull-push-mechanism",children:[]},{value:"Message Subscription",id:"message-subscription",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"RumorManager")," library is available in the Zilliqa core to support message gossiping between nodes."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The goal is to provide an alternative communication method to broadcasting, particularly in large-scale clusters."),Object(r.b)("li",{parentName:"ul"},"The broadcasting implemented in ",Object(r.b)("inlineCode",{parentName:"li"},"P2PComm::SendBroadcastMessage")," is resource-hungry; it sends ",Object(r.b)("inlineCode",{parentName:"li"},"O(n^2)")," messages, requires a lot of threads, and opens too many TCP connections."),Object(r.b)("li",{parentName:"ul"},"The gossip algorithm, described in detail in this ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://zoo.cs.yale.edu/classes/cs426/2013/bib/karp00randomized.pdf"}),"paper"),", provides a method to spread a message in ",Object(r.b)("inlineCode",{parentName:"li"},"O(logn)")," rounds and ",Object(r.b)("inlineCode",{parentName:"li"},"O(ln(ln(n)))")," rumor messages (where ",Object(r.b)("inlineCode",{parentName:"li"},"n")," is the number of peers participating in the gossip)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RumorManager")," plays the role of managing all the gossips/rumors and their states.")),Object(r.b)("h2",{id:"interfaces"},"Interfaces"),Object(r.b)("p",null,"The following interfaces are exposed for a node to enable gossiping messages in the network."),Object(r.b)("h3",{id:"initializerumormanager"},"InitializeRumorManager"),Object(r.b)("p",null,"Every node in the network intializes ",Object(r.b)("inlineCode",{parentName:"p"},"RumorManager")," with the list of peers from their own shard or committee at the start of a new DS epoch (or after a successful view change)."),Object(r.b)("p",null,"Initialization involves the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Storing peer list"),Object(r.b)("li",{parentName:"ul"},"Storing public keys of the peers in the peer list, the DS committee members, and lookup nodes"),Object(r.b)("li",{parentName:"ul"},"Storing the node's own peer information and key pair"),Object(r.b)("li",{parentName:"ul"},"Starting of rounds (that runs a loop every ",Object(r.b)("inlineCode",{parentName:"li"},"ROUND_TIME_IN_MS")," ms), which includes:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Checking the state of every rumor in ",Object(r.b)("inlineCode",{parentName:"li"},"RumorHolder")," and sending to ",Object(r.b)("inlineCode",{parentName:"li"},"MAX_NEIGHBORS_PER_ROUND")," random peers (if the rumor is not old enough)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RumorHolder")," monitors/changes the state of each rumor it holds using the Median Counter algorithm (as explained in Section 3 of the whitepaper) for every round.")))),Object(r.b)("h3",{id:"spreadrumor"},"SpreadRumor"),Object(r.b)("p",null,"This enables the node to initiate the rumor to be gossiped with its peer list. It will basically add the rumor to ",Object(r.b)("inlineCode",{parentName:"p"},"RumorHolder"),", which in turn manages its states and further gossiping."),Object(r.b)("h3",{id:"spreadforeignrumor"},"SpreadForeignRumor"),Object(r.b)("p",null,'This enables the node to initiate spreading of the rumor received from a node that is not part of its peer list (hence, "foreign"). It verifies the sender node against all the public keys stored during the initialization of ',Object(r.b)("inlineCode",{parentName:"p"},"RumorManager"),"."),Object(r.b)("h3",{id:"stoprounds"},"StopRounds"),Object(r.b)("p",null,"Stops the gossip round, thereby stopping the gossiping of rumors to peers."),Object(r.b)("h2",{id:"rumor-state-machine"},"Rumor State Machine"),Object(r.b)("p",null,"The rumor state machine is managed by ",Object(r.b)("inlineCode",{parentName:"p"},"RumorHolder"),"."),Object(r.b)("p",null,"Every rumor will be in one of following states at any time:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"NEW"),": The peer ",Object(r.b)("inlineCode",{parentName:"li"},"v")," knows ",Object(r.b)("inlineCode",{parentName:"li"},"r")," and ",Object(r.b)("inlineCode",{parentName:"li"},"counter(v,r) = m")," (age/round)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"KNOWN"),": Cooling state; stay in this state for ",Object(r.b)("inlineCode",{parentName:"li"},"m_maxRounds")," rounds, and participate in rumor spreading"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"OLD"),": Final state; member stops participating in rumor spreading")),Object(r.b)("p",null,"Every rumor starts in the ",Object(r.b)("inlineCode",{parentName:"p"},"NEW")," state. It either stays in this state, or moves on to ",Object(r.b)("inlineCode",{parentName:"p"},"KNOWN")," or ",Object(r.b)("inlineCode",{parentName:"p"},"OLD")," state immediately or in successive rounds based on the algorithm mentioned in the whitepaper. Every rumor is tied up with the round (consider it as the rumor age)."),Object(r.b)("p",null,"A rumor is configured to stay in ",Object(r.b)("inlineCode",{parentName:"p"},"NEW")," and ",Object(r.b)("inlineCode",{parentName:"p"},"KNOWN")," state for a maximum of ",Object(r.b)("inlineCode",{parentName:"p"},"<MAX_ROUNDS_IN_BSTATE>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<MAX_ROUNDS_IN_CSTATE>"),", respectively.\nThe total rounds is configured to not exceed ",Object(r.b)("inlineCode",{parentName:"p"},"<MAX_TOTAL_ROUNDS>"),", after which the rumor is marked as ",Object(r.b)("inlineCode",{parentName:"p"},"OLD"),". These settings are found in the node's constants file, like thus:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<gossip_custom_rounds>\n  <MAX_ROUNDS_IN_BSTATE>2</MAX_ROUNDS_IN_BSTATE>\n  <MAX_ROUNDS_IN_CSTATE>3</MAX_ROUNDS_IN_CSTATE>\n  <MAX_TOTAL_ROUNDS>6</MAX_TOTAL_ROUNDS>\n</gossip_custom_rounds>\n")),Object(r.b)("h2",{id:"gossip-message-format"},"Gossip Message Format"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"START_BYTE_GOSSIP (0x33)"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"HDR"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"GOSSIP_MSGTYPE"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"GOSSIP_ROUND"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"GOSSIP_SNDR_PORT"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PUB_KEY_SIZE"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"SIGNATURE"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Payload Message"))),Object(r.b)("tbody",{parentName:"table"})),Object(r.b)("h2",{id:"optimized-pull-push-mechanism"},"Optimized Pull-Push Mechanism"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"GOSSIP_MSGTYPE")," can refer to any of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PUSH (0x01)"),": The response to a ",Object(r.b)("inlineCode",{parentName:"li"},"PULL")," request. The payload contains the raw message. It is sent out to the requesting peer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PULL (0x02)"),": The request for the raw message for a given hash. The payload contains the hash. It is sent out in response to the node who sent ",Object(r.b)("inlineCode",{parentName:"li"},"LAZY_PUSH")," or ",Object(r.b)("inlineCode",{parentName:"li"},"LAZY_PULL"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EMPTY_PUSH (0x03)"),": This is sent out at every round to random neighbors if the node does not have any active rumors in its store. It indicates asking for any rumors from the node's neighbors. The payload contains unused dummy data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EMPTY_PULL (0x04)"),": This is sent out to the sender of ",Object(r.b)("inlineCode",{parentName:"li"},"EMPTY_PULL")," or ",Object(r.b)("inlineCode",{parentName:"li"},"LAZY_PULL")," to indicate that it doesn't have any active rumors either. The payload contains unused dummy data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FORWARD (0x05)"),": A special type that indicates that the message being sent out is from a foreign peer. This means the sender does not belong to the current shard or committee. Normally it is sent from a lookup to a shard or DS committee node, or between a shard node and DS committee node (in either direction)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LAZY_PUSH (0x06)"),": This is sent out at every round to random neighbors for each active rumor in its store. The payload contains the hash of the raw message intended to be gossiped."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LAZY_PULL (0x07)"),": The response to the sender if it is the first time that sender has sent a ",Object(r.b)("inlineCode",{parentName:"li"},"LAZY_PUSH"),"/",Object(r.b)("inlineCode",{parentName:"li"},"EMPTY_PUSH")," message during this round. The payload contains the hash of the raw message.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE:")," Every gossip message is signed, and the signature is verified before being accepted.")),Object(r.b)("p",null,"Through the messages above, the standard Push-Pull mechanism is optimized by gossiping the hashes using ",Object(r.b)("inlineCode",{parentName:"p"},"EMPTY_*")," and ",Object(r.b)("inlineCode",{parentName:"p"},"LAZY_*")," and fetching the actual raw messages using ",Object(r.b)("inlineCode",{parentName:"p"},"PUSH")," and ",Object(r.b)("inlineCode",{parentName:"p"},"PULL"),"."),Object(r.b)("p",null,"So, ",Object(r.b)("inlineCode",{parentName:"p"},"LAZY_PUSH")," and ",Object(r.b)("inlineCode",{parentName:"p"},"LAZY_PULL")," are the backbone for gossiping of hashes, and are the only gossip messages that have a valid ",Object(r.b)("inlineCode",{parentName:"p"},"GOSSIP_ROUND")," for their underlying rumor (i.e., the hash). For the other message types, ",Object(r.b)("inlineCode",{parentName:"p"},"GOSSIP_ROUND")," is just set to -1 since it has no use in these types."),Object(r.b)("h2",{id:"message-subscription"},"Message Subscription"),Object(r.b)("p",null,"Due to the nature of quick gossip, it's possible that a node might have just the hash and not the raw message yet at a particular point in time. In such cases, if the node receives a ",Object(r.b)("inlineCode",{parentName:"p"},"PULL")," message for that hash, it adds that node to a subscription list. As soon as the node receives the raw message for that hash, it then sends it out to all the peers in the subscription list."))}b.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,s(s({ref:t},c),{},{components:n})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);