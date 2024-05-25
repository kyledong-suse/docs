"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7664],{4189:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=a(74848),t=a(28453);const r={title:"Parallel & Standalone Scanners",taxonomy:{category:"docs"},slug:"/scanning/scanners"},o=void 0,i={id:"scanning/scanners/scanners",title:"Parallel & Standalone Scanners",description:"Increase Scanner Scalability with Multiple Scanners",source:"@site/docs/06.scanning/06.scanners/06.scanners.md",sourceDirName:"06.scanning/06.scanners",slug:"/scanning/scanners",permalink:"/next/scanning/scanners",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/06.scanning/06.scanners/06.scanners.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Parallel & Standalone Scanners",taxonomy:{category:"docs"},slug:"/scanning/scanners"},sidebar:"tutorialSidebar",previous:{title:"Updating the CVE Database",permalink:"/next/scanning/updating"},next:{title:"7. Reporting",permalink:"/next/reporting"}},l={},c=[{value:"Increase Scanner Scalability with Multiple Scanners",id:"increase-scanner-scalability-with-multiple-scanners",level:3},{value:"Auto-scaling of Scanner Pods",id:"auto-scaling-of-scanner-pods",level:4},{value:"Operations and Debugging",id:"operations-and-debugging",level:4},{value:"Performance Planning",id:"performance-planning",level:3},{value:"Standalone Scanner for Local Scanning",id:"standalone-scanner-for-local-scanning",level:3},{value:"Host Scanning in Standalone Mode",id:"host-scanning-in-standalone-mode",level:4},{value:"Manual Deployment of Multiple Scanners on Kubernetes",id:"manual-deployment-of-multiple-scanners-on-kubernetes",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"increase-scanner-scalability-with-multiple-scanners",children:"Increase Scanner Scalability with Multiple Scanners"}),"\n",(0,s.jsx)(n.p,{children:"To increase scanner performance and scalability, NeuVector supports deploying multiple scanner pods which can, in parallel, scan images in registries. The controller assigns scanning tasks to each available scanner pod. Scanner pods can be scaled up or down easily as needed using Kubernetes."}),"\n",(0,s.jsx)(n.p,{children:"Scanner pods should be deployed to separate nodes to spread the workload across different host resources. Remember that a scanner requires enough memory to pull and expand the image, so it should have available to it more than the largest image size to be scanned. If necessary, scanners can be placed on specific nodes or avoid placing multiple pods on one node using standard Kubernetes node labels, taints/tolerations, or node affinity configurations."}),"\n",(0,s.jsx)(n.p,{children:"By default, NeuVector deploys 2 scanner pods, as part of the sample deployments in the section Deploying NeuVector. These replicasets can be scaled up or down as needed."}),"\n",(0,s.jsxs)(n.p,{children:["The scanner container the latest CVE database and is regularly updated (with 'latest' tag) by NeuVector. The updater redeploys the scanner, forcing a pull of the latest scanner image in order to get the latest CVE database. See the section ",(0,s.jsx)(n.a,{href:"/scanning/updating",children:"Updating the CVE Database"})," for more details on the updater."]}),"\n",(0,s.jsx)(n.p,{children:"Please note that in initial releases the presence and status of multiple scanners is only visible in Kubernetes with 'kubectl get pods -n neuvector' and will not be displayed in the web console."}),"\n",(0,s.jsx)(n.p,{children:"Scan results from all scanners are shown in the Assets -> Registries menu. Additional scanner monitoring features will be added in future releases."}),"\n",(0,s.jsx)(n.h4,{id:"auto-scaling-of-scanner-pods",children:"Auto-scaling of Scanner Pods"}),"\n",(0,s.jsx)(n.p,{children:"Scanner pods can be configured to auto-scale based on certain criteria. This will ensure that scanning jobs are handled quickly and efficiently, especially if there are thousands of images to be scanned or re-scanned. There are three possible settings: delayed, immediate,  and disabled. When images are queued for scanning by the controller, it keeps a 'task count' of the queue size."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Delayed strategy:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'When lead controller continuously sees "task count" > 0 for > 90 seconds, a new scanner pod is started if maxScannerPods is not reached yet'}),"\n",(0,s.jsx)(n.li,{children:'When lead controller continuously sees "task count" is 0 for > 180 seconds, it scales down one scanner pod if minScannerPods is not reached yet'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Immediate strategy:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Every time when lead controller sees "task count" > 0, a new scanner pod is started if maxScannerPods is not reached yet'}),"\n",(0,s.jsx)(n.li,{children:'When lead controller continuously sees "task count" is 0 for > 180 seconds, it scales down one scanner pod if minScannerPods is not reached yet'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Scanner auto-scaling is configured in Settings -> Configuration. The minimumScannerPods setting sets the minimum scanner pods running at any time, while the maxScannerPods sets the maximum number of pods that the auto-scaling strategy can scale up to. NOTE: Setting a minimum value will not adjust the original scanner deployment replicaset value. The minimum value will be applied during the first scale up/down event."}),"\n",(0,s.jsx)(n.admonition,{title:"important",type:"warning",children:(0,s.jsx)(n.p,{children:"Scanner auto-scaling is not supported when scanner is deployed with an OpenShift operator, as the operator will always change the number of pods to its configured value."})}),"\n",(0,s.jsx)(n.h4,{id:"operations-and-debugging",children:"Operations and Debugging"}),"\n",(0,s.jsx)(n.p,{children:"Each scanner pod will query the registries to be scanned to pull down the complete list of available images and other data. Each scanner will then be assigned an image to pull and scan from the registry."}),"\n",(0,s.jsx)(n.p,{children:"To inspect the scanner behavior, logs from each scanner pod can be examined using"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl logs <scanner-pod-name> -n neuvector\n"})}),"\n",(0,s.jsx)(n.h3,{id:"performance-planning",children:"Performance Planning"}),"\n",(0,s.jsx)(n.p,{children:"Experiment with varying numbers of scanners on registries with a large number of images to observe the scan completion time behavior in your environment. 2-5 scanners as the replica setting should be sufficient for most cases."}),"\n",(0,s.jsx)(n.p,{children:"When a scan task is assigned to a scanner, it pulls the image from the registry (after querying the registry for the list of available images). The amount of time it takes to pull the image (download) typically consumes the most time. Multiple scanners can be pulling images from the same registry in parallel, so the performance may be limited by registry or network bandwidth."}),"\n",(0,s.jsx)(n.p,{children:"Large images will take more time to pull as well as need to be expanded to scan them, consuming more memory. Make sure each scanner has enough memory allocated to it to handle more than the largest expected image (10% more minimum)."}),"\n",(0,s.jsx)(n.p,{children:"Multiple scanner pods can be deployed to the same host/node, but considerations should be made to ensure the host has enough memory, CPU, and network bandwidth for maximizing scanner performance."}),"\n",(0,s.jsx)(n.h3,{id:"standalone-scanner-for-local-scanning",children:"Standalone Scanner for Local Scanning"}),"\n",(0,s.jsx)(n.p,{children:"NeuVector supports standalone scanner deployments for local image scanning (which does not require a Controller). In the sample docker run below, the local image will be scanned and the results stored at the /var/neuvector locally. For local scanning, the image must be able to be accessed through the mounted docker.sock, otherwise a registry can be specified."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name neuvector.scanner --rm -e SCANNER_REPOSITORY=ubuntu -e SCANNER_TAG=16.04 -e SCANNER_ON_DEMAND=true -v /var/run/docker.sock:/var/run/docker.sock -v /var/neuvector:/var/neuvector  neuvector/scanner\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following scanner environment variables can be used in the docker run command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SCANNER_REGISTRY= url of the registry (optional instead of local scan)"}),"\n",(0,s.jsx)(n.li,{children:"SCANNER_REPOSITORY= repository to scan"}),"\n",(0,s.jsx)(n.li,{children:"SCANNER_TAG= version tag"}),"\n",(0,s.jsx)(n.li,{children:"SCANNER_REGISTRY_USERNAME= user (optional instead of local scan)"}),"\n",(0,s.jsx)(n.li,{children:"SCANNER_REGISTRY_PASSWORD= password (optional instead of local scan)"}),"\n",(0,s.jsx)(n.li,{children:"SCANNER_SCAN_LAYERS= true or false (to return layered scan results)"}),"\n",(0,s.jsx)(n.li,{children:"SCANNER_ON_DEMAND=true (required)"}),"\n",(0,s.jsx)(n.li,{children:"CLUSTER_JOIN_ADDR (optional), CLUSTER_JOIN_PORT (optional) - to send results to controller for use in Admission control rules (Kubernetes deployed controller)."}),"\n",(0,s.jsx)(n.li,{children:"CLUSTER_ADVERTISED_ADDR (optional) - if scanner is on different host than controller, to send results for use in Admission control rules (Kubernetes deployed controller)."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"host-scanning-in-standalone-mode",children:"Host Scanning in Standalone Mode"}),"\n",(0,s.jsx)(n.p,{children:"Use the following command to scan the host."}),"\n",(0,s.jsx)(n.admonition,{title:"caution",type:"danger",children:(0,s.jsx)(n.p,{children:"Requires privileged mode!"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run --rm --privileged --pid=host neuvector/scanner -n neuvector\n"})}),"\n",(0,s.jsx)(n.h4,{id:"manual-deployment-of-multiple-scanners-on-kubernetes",children:"Manual Deployment of Multiple Scanners on Kubernetes"}),"\n",(0,s.jsx)(n.p,{children:"To manually deploy scanners as part of an existing Kubernetes deployment, create a new role binding:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create rolebinding neuvector-admin --clusterrole=admin --serviceaccount=neuvector:default -n neuvector\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or for OpenShift"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"oc adm policy add-role-to-user admin system:serviceaccount:neuvector:default -n neuvector\n"})}),"\n",(0,s.jsx)(n.p,{children:"Use the file below to deploy multiple scanners. Edit the replicas to increase or decrease the number of scanners running in parallel."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: neuvector-scanner-pod\n  namespace: neuvector\nspec:\n  selector:\n    matchLabels:\n      app: neuvector-scanner-pod\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        app: neuvector-scanner-pod\n    spec:\n      containers:\n        - name: neuvector-scanner-pod\n          image: neuvector/scanner\n          imagePullPolicy: Always\n          env:\n            - name: CLUSTER_JOIN_ADDR\n              value: neuvector-svc-controller.neuvector\n# Commented out sections are required only for local build-phase scanning\n#            - name: SCANNER_DOCKER_URL\n#              value: tcp://192.168.1.10:2376\n#          volumeMounts:\n#            - mountPath: /var/run/docker.sock\n#              name: docker-sock\n#              readOnly: true\n#      volumes:\n#        - name: docker-sock\n#          hostPath:\n#            path: /var/run/docker.sock\n      restartPolicy: Always\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, create or update the CVE database updater cron job. This will update the CVE database nightly."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: neuvector-updater-pod\n  namespace: neuvector\nspec:\n  schedule: "0 0 * * *"\n  jobTemplate:\n    spec:\n      template:\n        metadata:\n          labels:\n            app: neuvector-updater-pod\n        spec:\n          containers:\n          - name: neuvector-updater-pod\n            image: neuvector/updater\n            imagePullPolicy: Always\n            command:\n            - /bin/sh\n            - -c\n            - TOKEN=`cat /var/run/secrets/kubernetes.io/serviceaccount/token`; /usr/bin/curl -kv -X PATCH -H "Authorization:Bearer $TOKEN" -H "Content-Type:application/strategic-merge-patch+json" -d \'{"spec":{"template":{"metadata":{"annotations":{"kubectl.kubernetes.io/restartedAt":"\'`date +%Y-%m-%dT%H:%M:%S%z`\'"}}}}}\' \'https://kubernetes.default/apis/apps/v1/namespaces/neuvector/deployments/neuvector-scanner-pod\'\n          restartPolicy: Never\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var s=a(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);