"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5739],{92021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(74848),a=t(28453);const s={title:"Evaluating and Testing NeuVector",taxonomy:{category:"docs"},slug:"/testing/testing"},i=void 0,r={id:"testing/testing/testing",title:"Evaluating and Testing NeuVector",description:"Sample Applications",source:"@site/docs/09.testing/01.testing/01.testing.md",sourceDirName:"09.testing/01.testing",slug:"/testing/testing",permalink:"/next/testing/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/09.testing/01.testing/01.testing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Evaluating and Testing NeuVector",taxonomy:{category:"docs"},slug:"/testing/testing"},sidebar:"tutorialSidebar",previous:{title:"9. Testing NeuVector",permalink:"/next/testing"},next:{title:"10. Updating NeuVector",permalink:"/next/updating"}},l={},c=[{value:"Sample Applications",id:"sample-applications",level:3},{value:"Kubernetes Test Plan",id:"kubernetes-test-plan",level:3},{value:"Generating Network Violations on Kubernetes",id:"generating-network-violations-on-kubernetes",level:4},{value:"Generate a Threat/Attack",id:"generate-a-threatattack",level:5},{value:"Process and File Protection Tests",id:"process-and-file-protection-tests",level:4},{value:"Registry Scanning and Admission Control",id:"registry-scanning-and-admission-control",level:4},{value:"Deploy Another App",id:"deploy-another-app",level:5},{value:"Docker-native Test Plan",id:"docker-native-test-plan",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"sample-applications",children:"Sample Applications"}),"\n",(0,o.jsx)(n.p,{children:"After you\u2019ve deployed the NeuVector components you can evaluate it using the sample test applications we provide. These are located in the \u2019nvbeta\u2019 repository on docker hub."}),"\n",(0,o.jsx)(n.p,{children:"A typical Kubernetes-based test environment would have a master node and two to three worker nodes. You can control if application pods and NeuVector containers are deployed on a master node (off by default)."}),"\n",(0,o.jsx)(n.h3,{id:"kubernetes-test-plan",children:"Kubernetes Test Plan"}),"\n",(0,o.jsx)(n.p,{children:"To deploy a multi-tier application using Nginx, Nodejs, and Redis, use the samples below (in the order below). These may need to be edited for deployment on OpenShift, Rancher and other Kubernetes based tools."}),"\n",(0,o.jsx)(n.p,{children:"Create a demo namespace"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl create namespace demo\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The sample below use apiVersion: apps/v1 required by Kubernetes 1.16+."})}),"\n",(0,o.jsx)(n.p,{children:"Create the Redis service and deployment using this yaml:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: redis\n  namespace: demo\nspec:\n  ports:\n  - port: 6379\n    protocol: "TCP"\n    name: "cluster-tcp-6379"\n  clusterIP: None\n  selector:\n    app: redis-pod\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: redis-pod\n  namespace: demo\nspec:\n  selector:\n    matchLabels:\n      app: redis-pod\n  template:\n    metadata:\n      labels:\n        app: redis-pod\n    spec:\n      containers:\n      - name: redis-pod\n        image: redis\n'})}),"\n",(0,o.jsx)(n.p,{children:"Create the Nodejs service and deployment using this yaml:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: node\n  namespace: demo\nspec:\n  ports:\n  - port: 8888\n    protocol: "TCP"\n    name: "cluster-tcp-8888"\n  clusterIP: None\n  selector:\n    app: node-pod\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: node-pod\n  namespace: demo\nspec:\n  selector:\n    matchLabels:\n      app: node-pod\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: node-pod\n    spec:\n      containers:\n      - name: node-pod\n        image: nvbeta/node\n'})}),"\n",(0,o.jsx)(n.p,{children:"Create the Nginx service and deployment using this yaml:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-webui\n  namespace: demo\nspec:\n  ports:\n    - port: 80\n      name: webui\n      protocol: TCP\n  type: NodePort\n  selector:\n    app: nginx-pod\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-pod\n  namespace: demo\nspec:\n  selector:\n    matchLabels:\n      app: nginx-pod\n  template:\n    metadata:\n      labels:\n        app: nginx-pod\n    spec:\n      containers:\n      - name: nginx-pod\n        image: nvbeta/swarm_nginx\n        ports:\n        - containerPort: 80\n          protocol: TCP\n"})}),"\n",(0,o.jsx)(n.p,{children:"To access the Nginx-webui service externally, find the random port assigned to it (mapped to port 80) by the NodePort:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl get svc -n demo\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then connect to the public IP address/port for one of the kubernetes nodes, e.g. \u2018http://(public_IP):(NodePort)\u2019"}),"\n",(0,o.jsx)(n.p,{children:"After deploying NeuVector, you can run test traffic through the demo applications to generate the whitelist rules, and then move all services to Monitor or Protect mode to see violations and attacks."}),"\n",(0,o.jsx)(n.h4,{id:"generating-network-violations-on-kubernetes",children:"Generating Network Violations on Kubernetes"}),"\n",(0,o.jsx)(n.p,{children:"To generate a violation from a nodejs pod, find a pod:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl get pod -n demo\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then try some violations (replace node-pod-name):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl exec node-pod-name curl www.google.com -n demo\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or find the internal IP address of another node pod, like 172.30.2.21 in the example below, to connect from one node to another:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl exec node-pod-name curl 172.30.2.21:8888 -n demo\n"})}),"\n",(0,o.jsx)(n.h5,{id:"generate-a-threatattack",children:"Generate a Threat/Attack"}),"\n",(0,o.jsx)(n.p,{children:"To simulate an attack, log into a container, then try a ping attack:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl exec -it node-pod-name bash -n demo\n"})}),"\n",(0,o.jsx)(n.p,{children:"Use the internal IP of another node pod:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ping 172.30.2.21 -s 40000\n"})}),"\n",(0,o.jsx)(n.p,{children:"For all of the above, you can view the security events in the NeuVector console Network Activity map, as well as the Notifications tab."}),"\n",(0,o.jsx)(n.h4,{id:"process-and-file-protection-tests",children:"Process and File Protection Tests"}),"\n",(0,o.jsx)(n.p,{children:"Try various process and file activity by exec'ing into a container and running commands such as apt-get update, ssh, scp or others. Any process activity or file access not allowed will generate alerts in Notifications."}),"\n",(0,o.jsx)(n.h4,{id:"registry-scanning-and-admission-control",children:"Registry Scanning and Admission Control"}),"\n",(0,o.jsx)(n.p,{children:"A popular test is to configure image scanning of a registry in Assets -> Registries. After the scan is complete, configure an Admission Control rule in Policy. Be sure to enable Admission Controls and set a rule to Deny when there are high vulnerabilities in an image. Then pick an image that has high vulnerabilities and try to deploy it in Kubernetes. The deployment will be blocked in Protect mode and you will see an event in Notifications -> Security Risks."}),"\n",(0,o.jsx)(n.p,{children:"More advanced admission control testing can be done using different criteria in rules, or combining criteria."}),"\n",(0,o.jsx)(n.h5,{id:"deploy-another-app",children:"Deploy Another App"}),"\n",(0,o.jsx)(n.p,{children:"The Kubernetes Guestbook demo application can also be deployed on Kubernetes. It is recommended to deploy it into its own namespace so you can see namespace based filtering in the NeuVector console."}),"\n",(0,o.jsx)(n.h3,{id:"docker-native-test-plan",children:"Docker-native Test Plan"}),"\n",(0,o.jsx)(n.p,{children:"After deploying the NeuVector components and the sample application(s) you\u2019ll be able to Discover, Monitor and Protect running containers. The test plan below provides suggestions for generating run-time violations of allowed application behavior and scanning containers for vulnerabilities."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(2606).A+"",children:"NeuVector Test Plan"})}),"\n",(0,o.jsxs)(n.p,{children:["If the link above does not work, you can ",(0,o.jsx)(n.a,{href:"http://neuvector.com/sample-applications-test-plan/",children:"download"})," it from our website using password nv1851blvd."]}),"\n",(0,o.jsx)(n.p,{children:"NeuVector can also detect threats to your containers such as DDOS attacks. If you run a tool to generate such attacks on your containers, these results will show in Network Activity and in the Dashboard."}),"\n",(0,o.jsx)(n.p,{children:"For example, a simple ping command with high payload will show the Ping.Death attack in the console. To try this, do the following to the IP address of one of the containers (internal IP of the container)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ping <container_ip> -s 40000\n"})}),"\n",(0,o.jsx)(n.p,{children:"In Kubernetes you can do this from any node including the master. In other environments you may need to be logged into the node where the container is running."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2606:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/testplan-7bc546250eced53a527d67bebaeb09f0.pdf"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(96540);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);