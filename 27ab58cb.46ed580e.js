(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(9),i=(n(0),n(241)),r={id:"core-rejoin-mechanism",title:"Rejoin Mechanism"},c={id:"contributors/core-rejoin-mechanism",isDocsHomePage:!1,title:"Rejoin Mechanism",description:"---",source:"@site/docs/contributors/core-rejoin-mechanism.md",permalink:"/dev-portal/docs/contributors/core-rejoin-mechanism",editUrl:"https://github.com/Zilliqa/dev-portal/tree/v1-portal/docs/contributors/core-rejoin-mechanism.md",sidebar:"ContributorsSidebar",previous:{title:"Guard Mode",permalink:"/dev-portal/docs/contributors/core-guard-mode"},next:{title:"View Change",permalink:"/dev-portal/docs/contributors/core-view-change"}},l=[{value:"New Node Joining",id:"new-node-joining",children:[{value:"<code>Node::StartSynchronization()</code>",id:"nodestartsynchronization",children:[]},{value:"<code>Node::RejoinAsNormal()</code>",id:"noderejoinasnormal",children:[]}]},{value:"DS Node Joining",id:"ds-node-joining",children:[{value:"<code>DirectoryService::RejoinAsDS()</code>",id:"directoryservicerejoinasds",children:[]},{value:"<code>DirectoryService::StartSynchronization()</code>",id:"directoryservicestartsynchronization",children:[]},{value:"Other Conditions That Trigger DS Node Rejoining",id:"other-conditions-that-trigger-ds-node-rejoining",children:[]}]},{value:"Seed Node Joining",id:"seed-node-joining",children:[{value:"<code>Lookup::InitSync()</code>",id:"lookupinitsync",children:[]},{value:"<code>Lookup::RejoinAsNewlookup()</code>",id:"lookuprejoinasnewlookup",children:[]},{value:"<code>Lookup::StartSynchronization()</code>",id:"lookupstartsynchronization",children:[]}]},{value:"Lookup Node Rejoining",id:"lookup-node-rejoining",children:[{value:"<code>Lookup::RejoinAsLookup()</code>",id:"lookuprejoinaslookup",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"The sections below explain the joining and rejoining process for the different types of nodes."),Object(i.b)("p",null,"Some terms used are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Launch script"),": This refers to either of the scripts supplied in the Mainnet joining page (i.e., ",Object(i.b)("inlineCode",{parentName:"li"},"launch_docker.sh")," and ",Object(i.b)("inlineCode",{parentName:"li"},"launch.sh"),") or ",Object(i.b)("inlineCode",{parentName:"li"},"start.sh")," for guard nodes"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Upper seed"),": A seed node that the node can query for blockchain data. One or more upper seeds are normally listed in ",Object(i.b)("inlineCode",{parentName:"li"},"constants.xml"))),Object(i.b)("p",null,"The joining or rejoining process relies on a ",Object(i.b)("inlineCode",{parentName:"p"},"m_syncType")," setting, which can be any of these values:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"SyncType"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"(0) NO_SYNC")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Indicates that a node is fully synced")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"(1) NEW_SYNC")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"New node (possibly sharded) joining or rejoining")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"(2) NORMAL_SYNC")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"New node (unsharded) joining")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"(3) DS_SYNC")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DS node rejoining")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"(4) LOOKUP_SYNC")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Lookup node rejoining")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"(5) RECOVERY_ALL_SYNC")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Launching entire network from existing blockchain")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"(6) NEW_LOOKUP_SYNC")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"New lookup node joining")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"(7) GUARD_DS_SYNC")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DS guard node rejoining")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Guard-specific sequences have been omitted to simplify the sections below."))),Object(i.b)("h2",{id:"new-node-joining"},"New Node Joining"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This also applies to existing shard nodes who attempt to rejoin using the launch script."))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Launch script downloads the latest persistence from AWS S3 ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dev-portal/docs/contributors/core-incremental-db"}),"incremental DB")," using ",Object(i.b)("inlineCode",{parentName:"li"},"download_incr_db.py")),Object(i.b)("li",{parentName:"ol"},"Launch script starts the node (i.e., the ",Object(i.b)("inlineCode",{parentName:"li"},"zilliqa")," process) with ",Object(i.b)("inlineCode",{parentName:"li"},"m_syncType = NEW_SYNC")),Object(i.b)("li",{parentName:"ol"},"The node reads out the local ",Object(i.b)("inlineCode",{parentName:"li"},"persistence")," which was updated by the launch script"),Object(i.b)("li",{parentName:"ol"},"The node recreates the current state using the base state and state deltas fetched from incremental DB"),Object(i.b)("li",{parentName:"ol"},"Since ",Object(i.b)("inlineCode",{parentName:"li"},"m_syncType")," is not ",Object(i.b)("inlineCode",{parentName:"li"},"NO_SYNC"),", the node blocks some messages that will normally be processed by a synced node"),Object(i.b)("li",{parentName:"ol"},"The node starts synchronization using ",Object(i.b)("inlineCode",{parentName:"li"},"Node::StartSynchronization()"))),Object(i.b)("h3",{id:"nodestartsynchronization"},Object(i.b)("inlineCode",{parentName:"h3"},"Node::StartSynchronization()")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Send request to all upper seeds to remove the node's IP address from their ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dev-portal/docs/contributors/core-blacklist#relaxed-blacklist"}),"relaxed blacklist")),Object(i.b)("li",{parentName:"ol"},"Fetch the more recent DS blocks and Tx blocks from a random upper seed"),Object(i.b)("li",{parentName:"ol"},"Separate threads process Tx blocks upon receipt, fetching the corresponding state deltas and calculating the current state for each one"),Object(i.b)("li",{parentName:"ol"},"If the latest Tx block is for a non-vacuous epoch:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Fetch the latest sharding structure from a random upper seed and check if this node is already part of a shard"),Object(i.b)("li",{parentName:"ol"},"If it's not part of any shard, then it's considered a new miner, in which case continue to fetch recent blocks according to the earlier step"),Object(i.b)("li",{parentName:"ol"},"If it's already part of a shard",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Set the shard parameters (members and ID)"),Object(i.b)("li",{parentName:"ol"},"Change ",Object(i.b)("inlineCode",{parentName:"li"},"m_syncType")," to ",Object(i.b)("inlineCode",{parentName:"li"},"NO_SYNC")," and stop blocking messages"),Object(i.b)("li",{parentName:"ol"},"Send request to shard peers for removal from relaxed blacklist"),Object(i.b)("li",{parentName:"ol"},"Start next Tx epoch by initializing node variables (e.g., ",Object(i.b)("inlineCode",{parentName:"li"},"m_consensusID"),", ",Object(i.b)("inlineCode",{parentName:"li"},"m_consensusLeaderID"),", etc.), checking current role (i.e., shard leader or backup), initializing Rumor Manager, and proceeding with microblock consensus"),Object(i.b)("li",{parentName:"ol"},"At this point the node has successfully rejoined the network as an existing shard node"))))),Object(i.b)("li",{parentName:"ol"},"If the latest Tx block is for a vacuous epoch:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Move state updates to disk after calculating the state"),Object(i.b)("li",{parentName:"ol"},"Fetch latest DS committee information, and send request to a random upper seed to let this node know when to start PoW mining"),Object(i.b)("li",{parentName:"ol"},"Start mining upon receiving the notification from the upper seed"),Object(i.b)("li",{parentName:"ol"},"If the next DS block includes this node in the sharding information:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Change ",Object(i.b)("inlineCode",{parentName:"li"},"m_syncType")," to ",Object(i.b)("inlineCode",{parentName:"li"},"NO_SYNC")," and stop blocking messages"),Object(i.b)("li",{parentName:"ol"},"At this point the node has successfully joined the network as a new shard node"))),Object(i.b)("li",{parentName:"ol"},"If the node fails to receive the next DS block in time:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Fetch the latest DS block from a random upper seed"),Object(i.b)("li",{parentName:"ol"},"If a new DS block was in fact created, it means this node lost PoW. Continue syncing until next vacuous epoch as done above"),Object(i.b)("li",{parentName:"ol"},"If the node fails to get a new DS block from the upper seed, set ",Object(i.b)("inlineCode",{parentName:"li"},"syncType = NORMAL_SYNC")," and trigger ",Object(i.b)("inlineCode",{parentName:"li"},"Node::RejoinAsNormal"))))))),Object(i.b)("p",null,"The node maintains a while loop within ",Object(i.b)("inlineCode",{parentName:"p"},"Node::StartSynchronization()")," while all the steps above are performed (except the relaxed blacklist removal request). It exits the while loop when ",Object(i.b)("inlineCode",{parentName:"p"},"m_syncType")," becomes ",Object(i.b)("inlineCode",{parentName:"p"},"NO_SYNC"),"."),Object(i.b)("h3",{id:"noderejoinasnormal"},Object(i.b)("inlineCode",{parentName:"h3"},"Node::RejoinAsNormal()")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"SyncType = NORMAL_SYNC")),Object(i.b)("li",{parentName:"ol"},"Download latest persistence from AWS S3 incremental DB"),Object(i.b)("li",{parentName:"ol"},"Retrieve the downloaded persistent storage"),Object(i.b)("li",{parentName:"ol"},"Recreate the current state using the base state and state deltas fetched from incremental DB"),Object(i.b)("li",{parentName:"ol"},"Since ",Object(i.b)("inlineCode",{parentName:"li"},"m_syncType")," is not ",Object(i.b)("inlineCode",{parentName:"li"},"NO_SYNC"),", block some messages that will normally be processed by a synced node"),Object(i.b)("li",{parentName:"ol"},"Start synchronization using ",Object(i.b)("inlineCode",{parentName:"li"},"Node::StartSynchronization()"))),Object(i.b)("h2",{id:"ds-node-joining"},"DS Node Joining"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This also applies to existing DS nodes who attempt to rejoin using the launch script."))),Object(i.b)("p",null,"This procedure mirrors that of new node joining, with some differences:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"After recreating the current state, check if the node is part of the current DS committee. If yes:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Recreate the coinbase for all Tx blocks and microblocks from the start of the latest DS epoch"),Object(i.b)("li",{parentName:"ol"},"Fetch missing cosignatures (needed for coinbase recreation) from a random upper seed"),Object(i.b)("li",{parentName:"ol"},"Send request to all upper seeds for removal from relaxed blacklist"),Object(i.b)("li",{parentName:"ol"},"Trigger ",Object(i.b)("inlineCode",{parentName:"li"},"DirectoryService::StartSynchronization()")))),Object(i.b)("li",{parentName:"ol"},"If the node is not part of the current DS committee, trigger ",Object(i.b)("inlineCode",{parentName:"li"},"Node::RejoinAsNormal()"))),Object(i.b)("h3",{id:"directoryservicerejoinasds"},Object(i.b)("inlineCode",{parentName:"h3"},"DirectoryService::RejoinAsDS()")),Object(i.b)("p",null,"This procedure mirrors ",Object(i.b)("inlineCode",{parentName:"p"},"Node::RejoinAsNormal()"),", with some differences:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"SyncType = DS_SYNC")),Object(i.b)("li",{parentName:"ol"},"Start synchronization using ",Object(i.b)("inlineCode",{parentName:"li"},"DirectoryService::StartSynchronization()"))),Object(i.b)("h3",{id:"directoryservicestartsynchronization"},Object(i.b)("inlineCode",{parentName:"h3"},"DirectoryService::StartSynchronization()")),Object(i.b)("p",null,"This procedure mirrors ",Object(i.b)("inlineCode",{parentName:"p"},"Node::StartSynchronization()"),", with some differences:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The node doesn't need to check for shard membership. However, after recreating current state, if the node is no longer part of DS committee, then trigger ",Object(i.b)("inlineCode",{parentName:"li"},"Node::RejoinAsNormal()")),Object(i.b)("li",{parentName:"ol"},"After recreating current state, if a new DS epoch has started, then fetch the updated sharding structure again"),Object(i.b)("li",{parentName:"ol"},"Start next Tx epoch by initializing node variables (e.g., ",Object(i.b)("inlineCode",{parentName:"li"},"m_consensusID"),", ",Object(i.b)("inlineCode",{parentName:"li"},"m_consensusLeaderID"),", etc.), checking current role (i.e., DS leader or backup), initializing Rumor Manager, and proceeding with microblock consensus"),Object(i.b)("li",{parentName:"ol"},"If the latest Tx block is for a non-vacuous epoch, set state to ",Object(i.b)("inlineCode",{parentName:"li"},"MICROBLOCK_SUBMISSION")),Object(i.b)("li",{parentName:"ol"},"If the latest Tx block is for a vacuous epoch, set state to ",Object(i.b)("inlineCode",{parentName:"li"},"POW_SUBMISSION")),Object(i.b)("li",{parentName:"ol"},"At this point the node has successfully rejoined the network as an existing DS node")),Object(i.b)("h3",{id:"other-conditions-that-trigger-ds-node-rejoining"},"Other Conditions That Trigger DS Node Rejoining"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"When a view change occurs, DS nodes initially perform a pre-check. One of the reasons pre-check can fail is if a new DS block or Tx block was mined during the pre-check and this particular node failed to participate in the consensus for that block. This will cause the node to invoke ",Object(i.b)("inlineCode",{parentName:"li"},"DirectoryService::RejoinAsDS()")),Object(i.b)("li",{parentName:"ol"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"Node::Install()")," fails for whatever reason, the DS node checks if it is still part of the DS committee. If it is, it triggers ",Object(i.b)("inlineCode",{parentName:"li"},"RejoinAsDS()"),". If not, it triggers ",Object(i.b)("inlineCode",{parentName:"li"},"RejoinAsNormal()")),Object(i.b)("li",{parentName:"ol"},"If the node is started with ",Object(i.b)("inlineCode",{parentName:"li"},"SyncType")," of ",Object(i.b)("inlineCode",{parentName:"li"},"DS_GUARD_SYNC"),", it triggers ",Object(i.b)("inlineCode",{parentName:"li"},"RejoinAsDS()"))),Object(i.b)("h2",{id:"seed-node-joining"},"Seed Node Joining"),Object(i.b)("p",null,"This procedure mirrors that of new node joining, with some differences:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Launch script starts the node with ",Object(i.b)("inlineCode",{parentName:"li"},"m_syncType = NEW_LOOKUP_SYNC")),Object(i.b)("li",{parentName:"ol"},"The node starts synchronization using ",Object(i.b)("inlineCode",{parentName:"li"},"Lookup::InitSync()"))),Object(i.b)("h3",{id:"lookupinitsync"},Object(i.b)("inlineCode",{parentName:"h3"},"Lookup::InitSync()")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Fetch the more recent DS blocks and Tx blocks from a random upper seed"),Object(i.b)("li",{parentName:"ol"},"Separate threads process Tx blocks upon receipt, fetching the corresponding state deltas and calculating the current state for each one"),Object(i.b)("li",{parentName:"ol"},"If the latest Tx block is for a vacuous epoch:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Move state updates to disk after calculating the state"))),Object(i.b)("li",{parentName:"ol"},"Fetch any microblocks from a random upper seed for newly received Tx blocks as well as for the last ",Object(i.b)("inlineCode",{parentName:"li"},"N")," Tx blocks read out from persistence"),Object(i.b)("li",{parentName:"ol"},"Fetch the latest sharding structure from a random upper seed"),Object(i.b)("li",{parentName:"ol"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"syncType = NO_SYNC")),Object(i.b)("li",{parentName:"ol"},"At this point the node has successfully rejoined the network as a seed node")),Object(i.b)("p",null,"The node maintains a while loop within ",Object(i.b)("inlineCode",{parentName:"p"},"Lookup::InitSync()")," while all the steps above are performed. It exits the while loop when ",Object(i.b)("inlineCode",{parentName:"p"},"m_syncType")," becomes ",Object(i.b)("inlineCode",{parentName:"p"},"NO_SYNC"),"."),Object(i.b)("h3",{id:"lookuprejoinasnewlookup"},Object(i.b)("inlineCode",{parentName:"h3"},"Lookup::RejoinAsNewlookup()")),Object(i.b)("p",null,"A seed node can potentially miss receiving a Tx block or DS block, in which case it goes out of sync and triggers ",Object(i.b)("inlineCode",{parentName:"p"},"RejoinAsNewlookup")," to rejoin."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"syncType = NEW_LOOKUP_SYNC")),Object(i.b)("li",{parentName:"ol"},"If the number of missing Tx blocks exceeds ",Object(i.b)("inlineCode",{parentName:"li"},"NUM_FINAL_BLOCK_PER_POW"),":",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Download latest persistence from AWS S3 incremental DB"),Object(i.b)("li",{parentName:"ol"},"Retrieve the downloaded persistent storage"),Object(i.b)("li",{parentName:"ol"},"Start synchronization using ",Object(i.b)("inlineCode",{parentName:"li"},"Lookup::InitSync()")))),Object(i.b)("li",{parentName:"ol"},"If the number of missing Tx blocks does not exceed ",Object(i.b)("inlineCode",{parentName:"li"},"NUM_FINAL_BLOCK_PER_POW"),":",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Start synchronization using ",Object(i.b)("inlineCode",{parentName:"li"},"Lookup::StartSynchronization()"))))),Object(i.b)("h3",{id:"lookupstartsynchronization"},Object(i.b)("inlineCode",{parentName:"h3"},"Lookup::StartSynchronization()")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Fetch the more recent DS blocks and Tx blocks from a random upper seed"),Object(i.b)("li",{parentName:"ol"},"Separate threads process Tx blocks upon receipt, fetching the corresponding state deltas and calculating the current state for each one"),Object(i.b)("li",{parentName:"ol"},"If the latest Tx block is for a vacuous epoch:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Move state updates to disk after calculating the state"))),Object(i.b)("li",{parentName:"ol"},"Fetch any microblocks from a random upper seed for newly received Tx blocks as well as for the last ",Object(i.b)("inlineCode",{parentName:"li"},"N")," Tx blocks read out from persistence"),Object(i.b)("li",{parentName:"ol"},"Fetch the latest DS committee information from a random upper seed"),Object(i.b)("li",{parentName:"ol"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"syncType = NO_SYNC")),Object(i.b)("li",{parentName:"ol"},"At this point the node has successfully rejoined the network as a seed node")),Object(i.b)("h2",{id:"lookup-node-rejoining"},"Lookup Node Rejoining"),Object(i.b)("p",null,"A lookup node can potentially miss receiving a Tx block or DS block, in which case it goes out of sync and triggers ",Object(i.b)("inlineCode",{parentName:"p"},"RejoinAsLookup")," to rejoin."),Object(i.b)("h3",{id:"lookuprejoinaslookup"},Object(i.b)("inlineCode",{parentName:"h3"},"Lookup::RejoinAsLookup()")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"syncType = LOOKUP_SYNC")),Object(i.b)("li",{parentName:"ol"},"Start synchronization using ",Object(i.b)("inlineCode",{parentName:"li"},"Lookup::StartSynchronization()"))))}s.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,j=d["".concat(r,".").concat(m)]||d[m]||p[m]||i;return n?o.a.createElement(j,c(c({ref:t},b),{},{components:n})):o.a.createElement(j,c({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);