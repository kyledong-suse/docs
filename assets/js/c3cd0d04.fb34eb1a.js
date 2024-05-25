"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8804],{56519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453);const r={title:"Connect to Manager, REST API server",taxonomy:{category:"docs"},slug:"/configuration/console"},i=void 0,a={id:"configuration/console/console",title:"Connect to Manager, REST API server",description:"Connect to UI",source:"@site/docs/03.configuration/01.console/01.console.md",sourceDirName:"03.configuration/01.console",slug:"/configuration/console",permalink:"/next/configuration/console",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/03.configuration/01.console/01.console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Connect to Manager, REST API server",taxonomy:{category:"docs"},slug:"/configuration/console"},sidebar:"tutorialSidebar",previous:{title:"3. Initial Configuration & Console Login",permalink:"/next/configuration"},next:{title:"Replacing Self-Signed Certificate",permalink:"/next/configuration/console/replacecert"}},c={},l=[{value:"Connect to UI",id:"connect-to-ui",level:3},{value:"Connect to REST API Server",id:"connect-to-rest-api-server",level:3},{value:"Default username and password",id:"default-username-and-password",level:3},{value:"Creating Additional Users",id:"creating-additional-users",level:3},{value:"Connection Timeout Setting",id:"connection-timeout-setting",level:3},{value:"Enabling HTTP for Manager",id:"enabling-http-for-manager",level:3},{value:"Enabling Access from Corporate Network Which Blocks 8443",id:"enabling-access-from-corporate-network-which-blocks-8443",level:3},{value:"Using SSL Passthrough Instead of Redirect",id:"using-ssl-passthrough-instead-of-redirect",level:4},{value:"Replacing the NeuVector Self-signed Certificates",id:"replacing-the-neuvector-self-signed-certificates",level:3},{value:"Configuring AWS ALB with Certificate ARN",id:"configuring-aws-alb-with-certificate-arn",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{TabItem:r,Tabs:i}=n;return r||u("TabItem",!0),i||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"connect-to-ui",children:"Connect to UI"}),"\n",(0,s.jsx)(n.p,{children:"Open a browser window, connect to the manager using HTTPS. After accepting the EULA, the user is able to access the UI."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Depending of the deployment method you chose, the manager address will be as follow"}),(0,s.jsxs)(i,{children:[(0,s.jsx)(r,{value:"Docker",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"https://<manager_host_ip>:8443\n"})})}),(0,s.jsx)(r,{value:"Kubernetes without LoadBalancer or Ingress",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"https://<node_host_ip>:<NodePort>\n"})})}),(0,s.jsx)(r,{value:"LoadBalancer or Ingress configured",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"https://<FQDN|IP>/\n"})})})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Navigation",src:t(54514).A+"",width:"1415",height:"836"})}),"\n",(0,s.jsx)(n.p,{children:"You can manage NeuVector from the Console or by using the REST API."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"See below for cases where your corporate firewall blocks 8443."})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If your Chrome browser blocks the NeuVector self-signed certificate, see the next section on Chrome Certificate Upload."})}),"\n",(0,s.jsx)(n.h3,{id:"connect-to-rest-api-server",children:"Connect to REST API Server"}),"\n",(0,s.jsxs)(n.p,{children:["All operations in NeuVector can be invoked through the REST API instead of the console. The REST API server is part of the Controller/Allinone container. For details on the REST API, please see the section on Workflow and ",(0,s.jsx)(n.a,{href:"/automation/automation",children:"Automation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"default-username-and-password",children:"Default username and password"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["admin",":admin"]})}),"\n",(0,s.jsx)(n.p,{children:"After successful login, the admin user should update the account with a more secure password."}),"\n",(0,s.jsx)(n.h3,{id:"creating-additional-users",children:"Creating Additional Users"}),"\n",(0,s.jsx)(n.p,{children:"New users can be added from the Settings -> Users & Roles menu. There are predefined global roles in NeuVector:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Admin. Able to perform all actions except Federated policies."}),"\n",(0,s.jsxs)(n.li,{children:["Federated Admin. Able to perform all actions, including setting up Master/Remote clusters and Federated policies (rules). Only visible if ",(0,s.jsx)(n.a,{href:"/navigation/multicluster",children:"Multi-cluster"})," is enabled."]}),"\n",(0,s.jsx)(n.li,{children:"View Only (reader). No actions allowed, just viewing."}),"\n",(0,s.jsx)(n.li,{children:"CI Integration (ciops). Able to perform CI/CD scanning integration tasks such as image scanning.  This user role is recommended for use in build-phase scanning plug-ins such as Jenkins, Bamboo etc and for use in the REST API calls. It is limited to scanning functions and will not be able to do any actions in the console."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Users can be restricted to one or more namespaces using the Advanced Settings."}),"\n",(0,s.jsxs)(n.p,{children:["See the section ",(0,s.jsx)(n.a,{href:"/configuration/users",children:"Users & Roles"})," for advanced user management and creation of custom roles."]}),"\n",(0,s.jsx)(n.h3,{id:"connection-timeout-setting",children:"Connection Timeout Setting"}),"\n",(0,s.jsx)(n.p,{children:"You can set the number of seconds which the console will timeout in the upper right of the console in My Profile -> Session timeout. The default is 5 minutes and the maximum is 3600 seconds (1 hour)."}),"\n",(0,s.jsx)(n.h3,{id:"enabling-http-for-manager",children:"Enabling HTTP for Manager"}),"\n",(0,s.jsx)(n.p,{children:"To disable HTTPS and enable HTTP access, add this to the Manager or Allinone yaml section in the environment variables section. For example, in Kubernetes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- name: MANAGER_SSL\n  value: \u201coff\u201d\n"})}),"\n",(0,s.jsx)(n.p,{children:"For OpenShift, also remove this setting from the Route section of the yaml:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"tls:\n    termination: passthrough\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is useful if putting the manager behind a load balancer."}),"\n",(0,s.jsx)(n.h3,{id:"enabling-access-from-corporate-network-which-blocks-8443",children:"Enabling Access from Corporate Network Which Blocks 8443"}),"\n",(0,s.jsx)(n.p,{children:"If your corporate network does not allow access on port 8443 to the Manager console, you can create an ingress service to map it and allow access."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The NeuVector UI console is running as non-root user in the container, so it cannot listen on a port less than 1024. This is why it can't be changed to 443."})}),"\n",(0,s.jsx)(n.p,{children:"If you are trying to access the console from your corporate network. Here is the way to use the ClusterIP service and ingress HTTPS redirect to achieve that."}),"\n",(0,s.jsx)(n.p,{children:"First, create a certificate for HTTPS termination. Here is an example,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=mycloud.domain.com"\nkubectl create secret tls neuvector-ingress-tls -n neuvector --key="tls.key" --cert="tls.crt"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then, use the following yaml file to expose the 443 port that redirects the HTTPS connection to the manager."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-cluster-webui\n  namespace: neuvector\nspec:\n  ports:\n  - port: 443\n    targetPort: 8443\n    protocol: TCP\n  type: ClusterIP\n  selector:\n    app: neuvector-manager-pod\n\n---\n\napiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: neuvector-ingress-webui\n  namespace: neuvector\n  annotations:\n    ingress.mycloud.net/ssl-services: ssl-service=neuvector-cluster-webui\nspec:\n  tls:\n  - hosts:\n    - cloud.neuvector.com\n    secretName: neuvector-ingress-tls\n  rules:\n  - host: cloud.neuvector.com\n    http:\n      paths:\n      - path:\n        backend:\n          serviceName: neuvector-cluster-webui\n          servicePort: 443\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will need to change the annotation for the ingress address from ingress.mycloud.net to your appropriate address."}),"\n",(0,s.jsxs)(n.p,{children:["This example uses the URL cloud.neuvector.com. After the ingress service is created, you can find it's external IP. You then can configure the hosts file to point cloud.neuvector.com to that IP. After that, you should be able to browse to ",(0,s.jsx)(n.a,{href:"https://cloud.neuvector.com",children:"https://cloud.neuvector.com"})," (the url you choose to use)."]}),"\n",(0,s.jsx)(n.h4,{id:"using-ssl-passthrough-instead-of-redirect",children:"Using SSL Passthrough Instead of Redirect"}),"\n",(0,s.jsx)(n.p,{children:"To use TLS/SSL passthrough instead of the redirect example above (supported on some ingress controllers such as nginx), make sure the ingress controller is configured appropriated for passthrough, and the appropriate annotation is added to the ingress. For example,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'  annotations:\n    ingress.kubernetes.io/ssl-passthrough: "true"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"replacing-the-neuvector-self-signed-certificates",children:"Replacing the NeuVector Self-signed Certificates"}),"\n",(0,s.jsxs)(n.p,{children:["Please see the next section ",(0,s.jsx)(n.a,{href:"/configuration/console/replacecert",children:"Replacing the Self-Signed Certificates"})," for details. The certificate must be replaced in both the Manager and Controller/Allinone yamls."]}),"\n",(0,s.jsx)(n.h3,{id:"configuring-aws-alb-with-certificate-arn",children:"Configuring AWS ALB with Certificate ARN"}),"\n",(0,s.jsx)(n.p,{children:"Here is a sample ingress configuration using the AWS load balancer with the certificate ARN (actual ARN obfuscated)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    # https://kubernetes-sigs.github.io/aws-alb-ingress-controller/guide/ingress/annotation/#healthcheck-path\n    alb.ingress.kubernetes.io/backend-protocol: HTTPS\n    alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-west-2:596810101010:certificate/380b6abc-1234-408d-axyz-651710101010\n    alb.ingress.kubernetes.io/healthcheck-path: /\n    alb.ingress.kubernetes.io/healthcheck-protocol: HTTPS\n    alb.ingress.kubernetes.io/listen-ports: \'[{"HTTPS":443}]\'\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/success-codes: "301"\n    alb.ingress.kubernetes.io/target-type: instance\n    external-dns.alpha.kubernetes.io/hostname: eks.neuvector.com\n    kubernetes.io/ingress.class: alb\n  labels:\n    app: neuvector-webui-ingress\n  name: neuvector-webui-ingress\n  namespace: neuvector\nspec:\n  tls:\n  - hosts:\n    - eks.neuvector.com\n  rules:\n  - http:\n      paths:\n      - backend:\n          serviceName: neuvector-service-webui\n          servicePort: 8443\n        path: /*\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},54514:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/3_0_Dashboard-f38f519a0516b5ac567b19334fe20452.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);