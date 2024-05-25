"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6710],{59498:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=i(74848),t=i(28453);const a={title:"Bamboo",taxonomy:{category:"docs"},slug:"/scanning/build/bamboo"},s=void 0,l={id:"scanning/build/bamboo/bamboo",title:"Bamboo",description:"Scan for Vulnerabilities during Bamboo Build Pipeline",source:"@site/versioned_docs/version-5.2/06.scanning/03.build/02.bamboo/02.bamboo.md",sourceDirName:"06.scanning/03.build/02.bamboo",slug:"/scanning/build/bamboo",permalink:"/5.2/scanning/build/bamboo",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/06.scanning/03.build/02.bamboo/02.bamboo.md",tags:[],version:"5.2",sidebarPosition:2,frontMatter:{title:"Bamboo",taxonomy:{category:"docs"},slug:"/scanning/build/bamboo"},sidebar:"tutorialSidebar",previous:{title:"Jenkins Details",permalink:"/5.2/scanning/build/jenkins"},next:{title:"CircleCI",permalink:"/5.2/scanning/build/circleci"}},r={},c=[{value:"Scan for Vulnerabilities during Bamboo Build Pipeline",id:"scan-for-vulnerabilities-during-bamboo-build-pipeline",level:3},{value:"Configure Global Settings",id:"configure-global-settings",level:4},{value:"Configure the Repository and Build Policy",id:"configure-the-repository-and-build-policy",level:4},{value:"Review Results",id:"review-results",level:4}];function d(e){const n={a:"a",h3:"h3",h4:"h4",img:"img",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"scan-for-vulnerabilities-during-bamboo-build-pipeline",children:"Scan for Vulnerabilities during Bamboo Build Pipeline"}),"\n",(0,o.jsxs)(n.p,{children:["The Bamboo plug-in for NeuVector can be used to scan for vulnerabilities in the Bamboo pipeline. The plug-in can be downloaded from the Admin -> Add-ons menu in Bamboo. Use Find New Apps to search for NeuVector. The plug-in is also described in the ",(0,o.jsx)(n.a,{href:"https://marketplace.atlassian.com/apps/1221199/neuvector",children:"Atlassian Marketplace"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Deploy the NeuVector Allinone or Controller container if you haven't already done so on a host reachable by Bamboo. Make a note of the IP address of the host where the Allinone or Controller is running."}),"\n",(0,o.jsx)(n.p,{children:"In addition, make sure there is a NeuVector scanner container deployed and configured to connect to the Allinone or Controller. In 4.0 and later, the neuvector/scanner container must be deployed separate from the allinone or controller."}),"\n",(0,o.jsx)(n.h4,{id:"configure-global-settings",children:"Configure Global Settings"}),"\n",(0,o.jsxs)(n.p,{children:["Configure settings for the NeuVector Controller/Allinone including the NeuVector authentication as well as the registry authentication.\n",(0,o.jsx)(n.img,{alt:"global-image",src:i(27626).A+"",width:"1654",height:"1224"})]}),"\n",(0,o.jsx)(n.h4,{id:"configure-the-repository-and-build-policy",children:"Configure the Repository and Build Policy"}),"\n",(0,o.jsxs)(n.p,{children:["Create a task and enter the repository and tag to scan as well as the build policy to fail the build if vulnerabilities are detected. Enable layered scanning if the results should contain an analysis of vulnerabilities for each layer in the image.\n",(0,o.jsx)(n.img,{alt:"local-image",src:i(28355).A+"",width:"2860",height:"1340"})]}),"\n",(0,o.jsx)(n.h4,{id:"review-results",children:"Review Results"}),"\n",(0,o.jsxs)(n.p,{children:["Review the results in the scan logs, including the scan summary, reason for failing if appropriate, and details for each CVE detected.\n",(0,o.jsx)(n.img,{alt:"fail-image",src:i(66224).A+"",width:"2838",height:"1296"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},27626:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/bamboo_nv_global_config-9dcc1bce77892f0fab5edc3645d6c95f.png"},28355:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/bamboo_nv_local_config_2-d0adffce9568335cfc91fcff37d267c3.png"},66224:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/bamboo_set_criteria_to_fail_3-c0210516e929f7a1276b5e149bc7ee60.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(96540);const t={},a=o.createContext(t);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);