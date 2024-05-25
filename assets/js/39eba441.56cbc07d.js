"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8400],{62045:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(74848),n=t(28453);const r={title:"Modes: Discover, Monitor, Protect",slug:"/policy/modes"},s=void 0,c={id:"policy/modes/modes",title:"Modes: Discover, Monitor, Protect",description:"NeuVector Modes",source:"@site/docs/05.policy/02.modes/02.modes.md",sourceDirName:"05.policy/02.modes",slug:"/policy/modes",permalink:"/next/policy/modes",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/05.policy/02.modes/02.modes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Modes: Discover, Monitor, Protect",slug:"/policy/modes"},sidebar:"tutorialSidebar",previous:{title:"Security Policy Overview",permalink:"/next/policy/overview"},next:{title:"Admission Controls",permalink:"/next/policy/admission"}},l={},d=[{value:"NeuVector Modes",id:"neuvector-modes",level:3},{value:"Discover",id:"discover",level:5},{value:"Monitor",id:"monitor",level:5},{value:"Protect",id:"protect",level:5},{value:"Switching Between Modes",id:"switching-between-modes",level:3},{value:"New Service Mode",id:"new-service-mode",level:5},{value:"Network Service Policy Mode",id:"network-service-policy-mode",level:4},{value:"Automated Promotion of Group Modes",id:"automated-promotion-of-group-modes",level:4},{value:"Conflict Resolution Between Services In Different Modes",id:"conflict-resolution-between-services-in-different-modes",level:5}];function a(e){const o={a:"a",admonition:"admonition",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h3,{id:"neuvector-modes",children:"NeuVector Modes"}),"\n",(0,i.jsxs)(o.p,{children:["The NeuVector Violation Detection module has three modes: Discover, Monitor, and Protect. At any point in time, any Group (beginning with 'nv', or the 'Nodes' group) can be in any of these modes. The mode can be switched from the Groups menu, Network Activity view, or the Dashboard. Container Groups can have Process/File rules in a different mode than Network rules, as described ",(0,i.jsx)(o.a,{href:"/policy/modes#network-service-policy-mode",children:"here"}),"."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Modes",src:t(55003).A+"",width:"1091",height:"572"})}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"Custom created groups don't have a Protection mode. This is because they may contain containers from different underlying groups, each of which may be in a different mode, causing confusion about the behavior."})}),"\n",(0,i.jsx)(o.h5,{id:"discover",children:"Discover"}),"\n",(0,i.jsx)(o.p,{children:"By default, NeuVector starts in Discover mode. In this mode, NeuVector:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Discovers your container infrastructure, including containers, nodes, and hosts."}),"\n",(0,i.jsx)(o.li,{children:"Learns your applications and behaviors by observing conversations (network connections) between containers."}),"\n",(0,i.jsx)(o.li,{children:"Identifies separate services and applications running."}),"\n",(0,i.jsx)(o.li,{children:"Automatically builds a whitelist of Network Rules to protect normal application network behavior."}),"\n",(0,i.jsx)(o.li,{children:"Baselines the processes running in containers for each service and creates whitelist Process Profile Rules."}),"\n"]}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"To determine how long to run a service in Discover mode, run test traffic through the application and review all rules for completeness. Several hours should be sufficient, but some applications may require a few days to be fully exercised. When in doubt, switch to Monitor mode and check for violations, which can then be converted to whitelist rules before moving to Protect mode."})}),"\n",(0,i.jsx)(o.h5,{id:"monitor",children:"Monitor"}),"\n",(0,i.jsx)(o.p,{children:"In Monitor mode NeuVector monitors conversations and detects run-time violations of your Security Policy. In this mode, no new rules are created by NeuVector, but rules can manually be added at any time."}),"\n",(0,i.jsx)(o.p,{children:"When violations are detected, they are visible in the Network Activity map visually by a red line. Violations are also logged and displayed in the Notifications tab. Process profile rule and file access violations are logged into Notifications -> Security Events."}),"\n",(0,i.jsx)(o.p,{children:"In the Network map you can click on any conversation (green, yellow, red line) to display more details about the type of connection and protocol last monitored. You can also use the Search and Filter by Group buttons in the lower right to narrow the display of your containers."}),"\n",(0,i.jsx)(o.h5,{id:"protect",children:"Protect"}),"\n",(0,i.jsx)(o.p,{children:"In Protect mode, NeuVector enforcers will block (deny) any network violations and attacks detected. Violations are shown in the Network map with a red \u2018x\u2019 in them, meaning they have been blocked. Unauthorized processes and file access will also be blocked in Protect mode. DLP sensors which match will block network connections."}),"\n",(0,i.jsx)(o.h3,{id:"switching-between-modes",children:"Switching Between Modes"}),"\n",(0,i.jsx)(o.p,{children:"You can easily switch NeuVector Groups from one mode to another. Remember that in Discover mode, NeuVector is building a Security Policy for allowed, normal container behavior. You can see these rules in the Policy -> Groups tab or in detail in the Policy -> Network Rules menu."}),"\n",(0,i.jsx)(o.p,{children:"When you switch from Discover to Monitor mode, NeuVector will flag all violations of normal behavior not explicitly allowed. Because NeuVector enforces policy based on applications and groups with similar attributes, it\u2019s typically not necessary to add or edit rules when scaling up or scaling down containers."}),"\n",(0,i.jsx)(o.p,{children:"Please ensure that, before introducing new updates that result in new types of connections between containers, you switch the affected Service(s) to Discover mode to learn these new behaviors. Alternatively, you can manually add new rules while in any mode, or edit the CRD used to create the rules to add new behaviors."}),"\n",(0,i.jsx)(o.h5,{id:"new-service-mode",children:"New Service Mode"}),"\n",(0,i.jsx)(o.p,{children:"If new services are discovered by NeuVector, for example a previously unknown container starts running, it can be set to a default mode. In Discover mode, NeuVector will start to learn its behavior and build Rules. In Monitor, a violation will be generated when connections to the new service are detected. In Protect, all connections to the new service will be blocked unless the rules have been created prior."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"NewServiceMode",src:t(93201).A+"",width:"722",height:"354"})}),"\n",(0,i.jsx)(o.h4,{id:"network-service-policy-mode",children:"Network Service Policy Mode"}),"\n",(0,i.jsx)(o.p,{children:"There is a global setting available in Settings -> Configuration to separately set the network protection mode for enforcement of network rules. Enabling this (default is disabled), causes all network rules to be in the protection mode selected (Discover, Monitor, Protect), while process/file rules remain in the protection mode for that Group, as displayed in the Policy -> Groups screen. In this way, network rules can be set to Protect (blocking), while process/file policy can be set to Monitor, or vice versa."}),"\n",(0,i.jsx)(o.h4,{id:"automated-promotion-of-group-modes",children:"Automated Promotion of Group Modes"}),"\n",(0,i.jsx)(o.p,{children:"Promotes a Group\u2019s protection Mode based on elapsed time and criteria. This automation does not apply to CRD created Groups. This features allows a new application to run in Discover for some time period, learning the behavior and NeuVector creating allow-list rules for Network and Process, then automatically moving to Monitor, then Protect mode."}),"\n",(0,i.jsx)(o.p,{children:"The criterion for moving from Discover to Monitor mode is: elapsed time for learning all network and process activity of at least one live pod in the Group. For example, if this is set to 7 days, then 7 days after a running pod for the group is detected, the mode will be automatically promoted to Monitor."}),"\n",(0,i.jsx)(o.p,{children:"The criterion for moving from Monitor to Protect mode is: there are no security events (network, process etc) for the timeframe set for the Group. For example, if this is set to 14 days, then if no violations (network, process, file) are triggered for 14 days (e.g. the quiet period), then the mode is automatically promoted to Protect. If there are no running pods in the group, the promotion will not occur."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Promotion",src:t(70763).A+"",width:"2278",height:"718"})}),"\n",(0,i.jsx)(o.h5,{id:"conflict-resolution-between-services-in-different-modes",children:"Conflict Resolution Between Services In Different Modes"}),"\n",(0,i.jsx)(o.p,{children:"For network connections between containers in different service groups, if their policy modes are different, the following table shows how the system resolves the conflicts."}),"\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Source"}),(0,i.jsx)(o.th,{children:"Destination"}),(0,i.jsx)(o.th,{children:"Effective Mode"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Discover"}),(0,i.jsx)(o.td,{children:"Monitor"}),(0,i.jsx)(o.td,{children:"Discover"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Discover"}),(0,i.jsx)(o.td,{children:"Protect"}),(0,i.jsx)(o.td,{children:"Discover"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Monitor"}),(0,i.jsx)(o.td,{children:"Discover"}),(0,i.jsx)(o.td,{children:"Discover"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Monitor"}),(0,i.jsx)(o.td,{children:"Protect"}),(0,i.jsx)(o.td,{children:"Monitor"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Protect"}),(0,i.jsx)(o.td,{children:"Discover"}),(0,i.jsx)(o.td,{children:"Discover"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Protect"}),(0,i.jsx)(o.td,{children:"Monitor"}),(0,i.jsx)(o.td,{children:"Monitor"})]})]})]}),"\n",(0,i.jsx)(o.p,{children:"As you can see, the effective mode always defaults to the least restrictive policy mode."}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"The above applies only for Network Rules"})})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},93201:(e,o,t)=>{t.d(o,{A:()=>i});const i=t.p+"assets/images/newservices-c81418559e968b149ceb5095bed9426f.png"},70763:(e,o,t)=>{t.d(o,{A:()=>i});const i=t.p+"assets/images/policy_promotion-973c7fe3874d6af080e24388d2b43761.png"},55003:(e,o,t)=>{t.d(o,{A:()=>i});const i=t.p+"assets/images/switchmodes-b222841f883bf152621366985c51c2ed.png"},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>c});var i=t(96540);const n={},r=i.createContext(n);function s(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);