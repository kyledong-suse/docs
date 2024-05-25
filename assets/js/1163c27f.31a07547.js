"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6356],{53833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(74848),s=t(28453);const r={title:"REST API and Automation",taxonomy:{category:"docs"},slug:"/automation/automation"},a=void 0,i={id:"automation/automation/automation",title:"REST API and Automation",description:"NeuVector Automation",source:"@site/docs/11.automation/02.automation/02.automation.md",sourceDirName:"11.automation/02.automation",slug:"/automation/automation",permalink:"/next/automation/automation",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/11.automation/02.automation/02.automation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"REST API and Automation",taxonomy:{category:"docs"},slug:"/automation/automation"},sidebar:"tutorialSidebar",previous:{title:"NeuVector Workflow",permalink:"/next/automation/ci_workflow"},next:{title:"12. Troubleshooting",permalink:"/next/troubleshooting"}},l={},c=[{value:"NeuVector Automation",id:"neuvector-automation",level:3},{value:"REST API",id:"rest-api",level:4},{value:"Expose REST API in Kubernetes",id:"expose-rest-api-in-kubernetes",level:4},{value:"Authentication for REST API",id:"authentication-for-rest-api",level:4},{value:"Trigger Vulnerability Scanning from a script",id:"trigger-vulnerability-scanning-from-a-script",level:4},{value:"Create Policy Rules Automatically",id:"create-policy-rules-automatically",level:4},{value:"Export/Import Configuration File",id:"exportimport-configuration-file",level:4},{value:"Setting or Changing User Password",id:"setting-or-changing-user-password",level:4},{value:"Starting Packet Capture on a Container",id:"starting-packet-capture-on-a-container",level:4},{value:"Check and Accept the EULA (new deployments)",id:"check-and-accept-the-eula-new-deployments",level:4},{value:"Configure Registry Scanning",id:"configure-registry-scanning",level:4},{value:"Enable Packet Capture on All Pods in a Namespace",id:"enable-packet-capture-on-all-pods-in-a-namespace",level:4},{value:"Enable Disable Container Quarantine",id:"enable-disable-container-quarantine",level:4},{value:"Enable Debugging Mode for NeuVector Support",id:"enable-debugging-mode-for-neuvector-support",level:4},{value:"Report if a vulnerability is in the base image layers",id:"report-if-a-vulnerability-is-in-the-base-image-layers",level:4},{value:"Get the CVE Database Version and Date",id:"get-the-cve-database-version-and-date",level:4},{value:"Manage Federation for Master and Remote (Worker) Clusters",id:"manage-federation-for-master-and-remote-worker-clusters",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"neuvector-automation",children:"NeuVector Automation"}),"\n",(0,o.jsx)(n.p,{children:"There are many automation features in NeuVector to support the entire CI/CD workflow, including:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Jenkins plug-in to automated scanning during build"}),"\n",(0,o.jsx)(n.li,{children:"Registry scanning to automate repository monitoring"}),"\n",(0,o.jsx)(n.li,{children:"Admission Control policies to allow/deny unauthorized deployments"}),"\n",(0,o.jsx)(n.li,{children:"CIS benchmarks automatically run on hosts"}),"\n",(0,o.jsx)(n.li,{children:"Helm chart on github for automated deployment on Kubernetes"}),"\n",(0,o.jsx)(n.li,{children:"Response rules to automate responses to security events"}),"\n",(0,o.jsx)(n.li,{children:"REST API for building automation of any NeuVector function"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"rest-api",children:"REST API"}),"\n",(0,o.jsx)(n.p,{children:"The NeuVector solution can be managed using the REST API. Below are common examples of automation using the REST API. The REST API yaml doc is best viewed in the Swagger 2.0 viewer. The REST API documentation is below in a yaml file which is best viewed in a reader such as swagger.io."}),"\n",(0,o.jsxs)(n.p,{children:["Latest update can be found ",(0,o.jsx)(n.a,{href:"https://raw.githubusercontent.com/neuvector/neuvector/main/controller/api/apis.yaml",children:"here"}),". Also in the NeuVector GitHub source code ",(0,o.jsx)(n.a,{href:"https://github.com/neuvector/neuvector/blob/main/controller/api/apis.yaml",children:"repo"}),".  The apis.yaml from the main truck can include unreleased features.  It is recommended to download the appropriate released version source code and extract the apis.yaml from the controller/api folder."]}),"\n",(0,o.jsx)(n.admonition,{title:"important",type:"warning",children:(0,o.jsx)(n.p,{children:"If you are making REST API calls with username/password, please be sure make a DELETE call against /v1/auth when done. There is a maximum of 32 concurrent sessions for each user. If this is exceeded, an authentication failure will occur."})}),"\n",(0,o.jsx)(n.p,{children:"NeuVector also support Response Rules to automate common responses to security events or vulnerabilities detected. Please see the section Security Policy -> Response Rules for more details."}),"\n",(0,o.jsx)(n.h4,{id:"expose-rest-api-in-kubernetes",children:"Expose REST API in Kubernetes"}),"\n",(0,o.jsx)(n.p,{children:"To expose the REST API for access from outside of the Kubernetes cluster, enable port 10443."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-svc-controller-api\n  namespace: neuvector\nspec:\n  ports:\n    - port: 10443\n      name: controller-api\n      protocol: TCP\n  type: LoadBalancer\n  selector:\n    app: neuvector-controller-pod\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"type: NodePort"})," can also be used instead of LoadBalancer."]})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If using type LoadBalancer, set the ",(0,o.jsx)(n.em,{children:"controllerIP"})," in the examples below to the external IP or URL for the loadbalancer."]})}),"\n",(0,o.jsx)(n.h4,{id:"authentication-for-rest-api",children:"Authentication for REST API"}),"\n",(0,o.jsx)(n.p,{children:"The REST API supports two types of authentication: username/password and token. Both can be configured in Settings -> Users, API Keys & Roles, and be associated with default or custom roles to limit access privileges. The examples below show username/password based authentication where a token is created first, then used in subsequent REST API calls. If using a token, it can be used directly in each REST API call. Note: username based connections have a limited number of concurrent sessions, so it is important to delete the username token as shown below when finished. Token based authentication does not have a limit, but expire according to the time limit selected when created."}),"\n",(0,o.jsx)(n.p,{children:"For token-based authentication, see the following screen shots and example call. Be sure to copy the secret and token once created, as there is no way to retrieve this after the screen in closed."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"token",src:t(81885).A+"",width:"1040",height:"508"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"token",src:t(89396).A+"",width:"939",height:"457"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"token",src:t(74289).A+"",width:"1110",height:"82"})}),"\n",(0,o.jsx)(n.h4,{id:"trigger-vulnerability-scanning-from-a-script",children:"Trigger Vulnerability Scanning from a script"}),"\n",(0,o.jsx)(n.p,{children:"NeuVector can be triggered automatically to scan an image for vulnerabilities. This can be done by configuring a registry/repository to be monitored, using the NeuVector Jenkins plug-in, or using the REST API. Please see the section on Scanning & Compliance for more detail."}),"\n",(0,o.jsx)(n.p,{children:"The sample script below shows how to remotely pull the container, run it, and scan it. It can be triggered from a Jenkins task (remote shell) or any CI/CD tool. A JSON parser tool (jq) is also used."}),"\n",(0,o.jsx)(n.p,{children:"Be sure to enter the controller IP address in the script and change the container image name to the one you wish to scan. Also, update the username/password fields."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'_curCase_=`echo $0 | awk -F"." \'{print $(NF-1)}\' | awk -F"/" \'{print $NF}\'`\n_DESC_="able to scan ubuntu:16.04 image"\n_ERRCODE_=0\n_ERRTYPE_=1\n_RESULT_="pass"\n\n# please remember to specify the controller ip address here\n_controllerIP_="<your_controller_ip>"\n_controllerRESTAPIPort_="10443"\n_neuvectorUsername_="admin"\n_neuvectorPassword_="admin"\n_registryURL_=""\n_registryUsername_=""\n_registryPassword_=""\n_repository_="alpine"\n_tag_="latest"\n\ncurl -k -H "Content-Type: application/json" -d \'{"password": {"username": "\'$_neuvectorUsername_\'", "password": "\'$_neuvectorPassword_\'"}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/auth" > /dev/null 2>&1 > token.json\n_TOKEN_=`cat token.json | jq -r \'.token.token\'`\necho `date +%Y%m%d_%H%M%S` scanning an image ...\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"request": {"registry": "\'$_registryURL_\'", "username": "\'$_registryUsername_\'", "password": "\'$_registryPassword_\'", "repository": "\'$_repository_\'", "tag": "\'$_tag_\'"}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/scan/repository" > /dev/null 2>&1 > scan_repository.json\n\nwhile [ `wc -c < scan_repository.json` = "0" ]; do\n    echo `date +%Y%m%d_%H%M%S` scanning is still in progress ...\n    sleep 5\n    curl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"request": {"registry": "\'$_registryURL_\'", "username": "\'$_registryUsername_\'", "password": "\'$_registryPassword_\'", "repository": "\'$_repository_\'", "tag": "\'$_tag_\'"}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/scan/repository" > /dev/null 2>&1 > scan_repository.json\ndone\n\necho `date +%Y%m%d_%H%M%S` log out\ncurl -k -X \'DELETE\' -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/auth" > /dev/null 2>&1\ncat scan_repository.json | jq .\n\nrm *.json\necho `date +%Y%m%d_%H%M%S` [$_curCase_] $_DESC_: $_RESULT_-$_ERRCODE_\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"You may need to install jq"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo yum install jq\n"})})]}),"\n",(0,o.jsx)(n.p,{children:"For Kubernetes based deployments you can set the Controller IP as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"_podNAME_=`kubectl get pod -n neuvector -o wide | grep \"allinone\\|controller\" | head -n 1 | awk '{print $1}'`\n_controllerIP_=`kubectl exec $_podNAME_ -n neuvector -- consul info | grep leader_addr | awk -F\":| \" '{print $3}'`\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"In a multiple controller deployment the requests must be sent to a single controller IP so multiple requests for status of long running image scans go to the controller performing the scan."})}),"\n",(0,o.jsx)(n.p,{children:"For scanning locally instead of in a registry:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"request": {"tag": "3.4", "repository": "nvlab/alpine", "scan_layers": true}}\' "https://$_controllerIP_:443/v1/scan/repository"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "report": {\n    "image_id": "c7fc7faf8c28d48044763609508ebeebd912ad6141a722386b89d044b62e4d45",\n    "registry": "",\n    "repository": "nvlab/alpine",\n    "tag": "3.4",\n    "digest": "sha256:2441496fb9f0d938e5f8b27aba5cc367b24078225ceed82a9a5e67f0d6738c80",\n    "base_os": "alpine:3.4.6",\n    "cvedb_version": "1.568",\n    "vulnerabilities": [\n      {\n        "name": "CVE-2018-0732",\n        "score": 5,\n        "severity": "Medium",\n        "vectors": "AV:N/AC:L/Au:N/C:N/I:N/A:P",\n        "description": "During key agreement in a TLS handshake using a DH(E) based ciphersuite a malicious server can send a very large prime value to the client. This will cause the client to spend an unreasonably long period of time generating a key for this prime resulting in a hang until the client has finished. This could be exploited in a Denial Of Service attack. Fixed in OpenSSL 1.1.0i-dev (Affected 1.1.0-1.1.0h). Fixed in OpenSSL 1.0.2p-dev (Affected 1.0.2-1.0.2o).",\n        "package_name": "openssl",\n        "package_version": "1.0.2n-r0",\n        "fixed_version": "1.0.2o-r1",\n        "link": "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-0732",\n        "score_v3": 7.5,\n        "vectors_v3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"\n      },\n                  ...\n    ],\n    "layers": [\n      {\n        "digest": "c68318b6ae6a2234d575c4b6b33844e3e937cf608c988a0263345c1abc236c14",\n        "cmds": "/bin/sh",\n        "vulnerabilities": [\n          {\n            "name": "CVE-2018-0732",\n            "score": 5,\n            "severity": "Medium",\n            "vectors": "AV:N/AC:L/Au:N/C:N/I:N/A:P",\n            "description": "During key agreement in a TLS handshake using a DH(E) based ciphersuite a malicious server can send a very large prime value to the client. This will cause the client to spend an unreasonably long period of time generating a key for this prime resulting in a hang until the client has finished. This could be exploited in a Denial Of Service attack. Fixed in OpenSSL 1.1.0i-dev (Affected 1.1.0-1.1.0h). Fixed in OpenSSL 1.0.2p-dev (Affected 1.0.2-1.0.2o).",\n            "package_name": "openssl",\n            "package_version": "1.0.2n-r0",\n            "fixed_version": "1.0.2o-r1",\n            "link": "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-0732",\n            "score_v3": 7.5,\n            "vectors_v3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"\n          },\n                                  ...\n        ],\n        "size": 5060096\n      }\n    ]\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"create-policy-rules-automatically",children:"Create Policy Rules Automatically"}),"\n",(0,o.jsx)(n.p,{children:"To create a new rule in the NeuVector policy controller, the groups for the FROM and TO fields must exist first. The following sample creates a new Group based on the container label nv-service-type=data, and another Group for label nv-service-type=website. A rule is then created to allow traffic from the wordpress container to the mysql container using only the mysql protocol."}),"\n",(0,o.jsx)(n.p,{children:"Be sure to update the username and password for access to the controller."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'#!/bin/sh\nTOKEN_JSON=$(curl -k -H "Content-Type: application/json" -d \'{"password": {"username": "admin", "password": "admin"}}\' "https://`docker inspect neuvector.allinone | jq -r \'.[0].NetworkSettings.IPAddress\'`:10443/v1/auth")\n_TOKEN_=`echo $TOKEN_JSON | jq -r \'.token.token\'`\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"config": {"name": "mydb", "criteria": [{"value": "data", "key": "nv.service.type", "op": "="}]}}\' "https://`docker inspect neuvector.allinone | jq -r \'.[0].NetworkSettings.IPAddress\'`:10443/v1/group"\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"config": {"name": "mywp", "criteria": [{"value": "website", "key": "nv.service.type", "op": "="}]}}\' "https://`docker inspect neuvector.allinone | jq -r \'.[0].NetworkSettings.IPAddress\'`:10443/v1/group"\ncurl -k -X "PATCH" -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"insert": {"rules": [{"comment": "Custom WP Rule", "from": "mywp", "applications": ["MYSQL"], "ports": "any", "to": "mydb", "action": "allow", "id": 0}], "after": 0}}\' "https://`docker inspect neuvector.allinone | jq -r \'.[0].NetworkSettings.IPAddress\'`:10443/v1/policy/rule"\ncurl -k -X "DELETE" -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" "https://`docker inspect neuvector.allinone | jq -r \'.[0].NetworkSettings.IPAddress\'`:10443/v1/auth"\n'})}),"\n",(0,o.jsx)(n.p,{children:"If the Groups already exist in NeuVector then the new rule can be created, skipping the Group creation steps. This example also removes the authentication token at the end. Note that a Rule ID number can be specified and NeuVector executes rules in numerical order lowest to highest."}),"\n",(0,o.jsx)(n.h4,{id:"exportimport-configuration-file",children:"Export/Import Configuration File"}),"\n",(0,o.jsx)(n.p,{children:"Here are samples to backup the NeuVector configuration file automatically. You can select whether to export all configuration settings (policy, users, Settings etc), or only the policy."}),"\n",(0,o.jsx)(n.admonition,{title:"important",type:"warning",children:(0,o.jsx)(n.p,{children:"These samples are provided as examples only and are not officially supported unless a specific enterprise support agreement has been put in place."})}),"\n",(0,o.jsx)(n.p,{children:"To export all configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"./config.py export -u admin -w admin -s $_controllerIP_ -p $_controllerPort_ -f $_FILENAME_ # exporting the configuration with all settings\n"})}),"\n",(0,o.jsx)(n.p,{children:"To export policy only:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"./config.py export -u admin -w admin -s $_controllerIP_ -p $_controllerPort_ -f $_FILENAME_ --section policy # exporting the configuration with policy only\n"})}),"\n",(0,o.jsx)(n.p,{children:"To import the file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"./config.py import -u admin -w admin -s $_controllerIP_ -p $_controllerPort_ -f $_FILENAME_ # importing the configuration\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)("strong",{children:"Sample python files"})," Contains config.py, client.py, and multipart.py. Download sample files: ",(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(69369).A+"",children:"ImportExport"}),". Please put all three files in one folder to run above commands. You may need install some Python modules in order to run the script."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo pip install requests six\n"})}),"\n",(0,o.jsx)(n.h4,{id:"setting-or-changing-user-password",children:"Setting or Changing User Password"}),"\n",(0,o.jsx)(n.p,{children:"Use the rest API calls for User management."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -s -k -H \'Content-Type: application/json\' -H \'X-Auth-Token: c64125decb31e6d3125da45cba0f5025\' https://127.0.0.1:10443/v1/user/admin -X PATCH -d \'{"config":{"fullname":"admin","password":"admin","new_password":"NEWPASS"}}\'\n'})}),"\n",(0,o.jsx)(n.h4,{id:"starting-packet-capture-on-a-container",children:"Starting Packet Capture on a Container"}),"\n",(0,o.jsx)(n.p,{children:"When a container exhibits suspicious behavior, start a packet capture."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'#!/bin/sh\nTOKEN_JSON=$(curl -k -H "Content-Type: application/json" -d \'{"password": {"username": "admin", "password": "admin"}}\' "https://`docker inspect neuvector.allinone | jq -r \'.[0].NetworkSettings.IPAddress\'`:10443/v1/auth")\n_TOKEN_=`echo $TOKEN_JSON | jq -r \'.token.token\'`\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"sniffer":{"file_number":1,"filter":"port 1381"}}\' "https://`docker inspect neuvector.allinone | jq -r \'.[0].NetworkSettings.IPAddress\'`:10443/v1/sniffer?f_workload=`docker inspect neuvector.allinone | jq -r .[0].Id`"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Don\u2019t forget to stop the sniffer session after some time so it doesn\u2019t run forever. Number of files to rotate has a maximum value of 50."}),"\n",(0,o.jsx)(n.h4,{id:"check-and-accept-the-eula-new-deployments",children:"Check and Accept the EULA (new deployments)"}),"\n",(0,o.jsx)(n.p,{children:"Get the authentication TOKEN as above. Also replace the controller IP address with your as appropriate."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"curl -s -k -H 'Content-Type: application/json' -H 'X-Auth-Token: $_TOKEN_' https://127.0.0.1:10443/v1/eula | jq .\n{\n  \"eula\": {\n    \"accepted\":false\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Accept EULA"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"curl -s -k -H 'Content-Type: application/json' -H 'X-Auth-Token: $_TOKEN_' -d '{\"eula\":{\"accepted\":true}}' https://127.0.0.1:10443/v1/eula\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then check the EULA again."}),"\n",(0,o.jsx)(n.h4,{id:"configure-registry-scanning",children:"Configure Registry Scanning"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"request": {"registry": "https://registry.connect.redhat.com", "username": "username", "password": "password", "tag": "latest", "repository": "neuvector/enforcer"}}\' "https://controller:port/v1/scan/repository"\n'})}),"\n",(0,o.jsx)(n.h4,{id:"enable-packet-capture-on-all-pods-in-a-namespace",children:"Enable Packet Capture on All Pods in a Namespace"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n#set -x\n\nhash curl 2>/dev/null || { echo >&2 "Required curl but it\'s not installed.  Aborting."; exit 1; }\nhash jq 2>/dev/null || { echo >&2 "Required jq but it\'s not installed.  Aborting."; exit 1;}\n\nscript="$0"\nusage() {\n    echo "Usage: $script -n [namespace] -d [pcap duration (seconds)] -l [https://nvserver:10443]" 1>&2;\n    exit 1;\n}\n\nwhile getopts ":n:d:l:h" opt; do\n    case $opt in\n        n)\n            NAMESPACE=$OPTARG\n            ;;\n        d)\n            DURATION=$OPTARG\n            ;;\n        l)  URL="$OPTARG/v1"\n            ;;\n        h)\n            usage\n            ;;\n        \\?)\n            echo "Invalid option, $OPTARG.  Try -h for help." 1>&2\n            ;;\n        :)\n            echo "Invalid option: $OPTARG requires an argument" 1>&2\n    esac\ndone\n\nif [ ! "$NAMESPACE" ] || [ ! "$DURATION" ] || [ ! "$URL" ]\nthen\n    usage\n    exit 1\nfi\n\ncount=0\nfor i in `kubectl -n $NAMESPACE get pods -o wide 2> /dev/null | tail -n +2 | awk \'{print $1}\' | sed \'s|\\(.*\\)-.*|\\1|\' | uniq`;\ndo\n    CHOICE1[count]=$i\n    count=$count+1\ndone\n\nif [ -z ${CHOICE1[0]} ]; then\n    echo "No pods found in $NAMESPACE."\n    exit 1\nelse\n    for i in "${!CHOICE1[@]}"\n    do\n        echo "$i : ${CHOICE1[$i]}"\n    done\n    read -p "Packet capture on which pod group? " -r\n    if [ -n $REPLY ]; then\n        POD_STRING=${CHOICE1[$REPLY]}\n        echo $POD_STRING " selected."\n    else\n        exit 1\n    fi\nfi\n\nsniffer_start() {\n    URI="/sniffer?f_workload=$1"\n    sniff_id=$(curl -ks --location --request POST ${URL}${URI} "${curlHeaders[@]}" --data-raw \'{ "sniffer": { "file_number": 1, "filter": "" }}\' | jq .result.id)\n    echo $sniff_id\n}\n\nsniffer_stop() {\n    URI="/sniffer/stop/${1}"\n    status_code=`curl -ks -w "%{http_code}" --location --request PATCH ${URL}${URI} "${curlHeaders[@]}"`\n    echo $status_code\n}\n\nsniffer_pcap_get() {\n    URI="/sniffer/${1}/pcap"\n    status_code=`curl -ks -w "%{http_code}" --location --request GET ${URL}${URI} "${curlHeaders[@]}" -o $1.pcap`\n    echo $status_code\n}\n\nsniffer_pcap_delete() {\n    URI="/sniffer/${1}"\n    status_code=`curl -ks -w "%{http_code}" --location --request DELETE ${URL}${URI} "${curlHeaders[@]}"`\n    echo $status_code\n}\n\nshow_menu() {\n    count=0\n    for i in "Exit script" "Start packet capture for $DURATION seconds" "Download packet capture from pods" "Delete packet capture from pods";\n    do\n        CHOICE2[count]=$i\n        count=$count+1\n    done\n        echo\n        echo "Selections:"\n    for i in "${!CHOICE2[@]}"\n    do\n        echo "$i : ${CHOICE2[$i]}"\n    done\n}\n\nget_token() {\nread -p "Enter NeuVector Username: " USER\nif [ -z $USER ]; then\n    echo "Blank username, exiting..."\n    exit 1\nfi\nread -s -p "Enter password: " PASS\nif [ -z $PASS ]; then\n    echo\n    echo "Blank password, exiting..."\n    exit 1\nfi\n\nTOKEN=`curl -ks --location --request POST ${URL}/auth \\\n--header "accept: application/json" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{"password": {"username": "\'$USER\'", "password": "\'$PASS\'"}}\'|jq .token.token`\necho $TOKEN\n}\n\nTOKEN=$(get_token)\nwhile [ "$TOKEN" = "null" ]; do\n    echo\n    echo "Authenticating failed, retry."\n    TOKEN=$(get_token)\ndone\n\nTOKEN=${TOKEN:1:${#TOKEN}-2}\necho\ndeclare -a curlHeaders=(\'-H\' "Content-Type: application/json" \'-H\' "X-Auth-Token: $TOKEN")\necho "Pulling worklods from $URL"\ndeclare -a workloads="($(\n    curl -ks --location --request GET ${URL}/workload "${curlHeaders[@]}" \\\n    | jq \'.workloads[] | select(.display_name | startswith("\'${POD_STRING}\'"))| select(.domain=="\'$NAMESPACE\'" and .cap_sniff==true) | .display_name + "::" +.id\' -r\n))"\n\nif [ ${#workloads[@]} -eq 0 ]; then\n    echo\n    echo "No pods is capable of packet capture.  Only ethernet IP part of Kubernetes CIDR can packet capture."\n    exit 1\nelse\n    echo\n    echo "List of Pods to perform capture on."\n    echo "Pod Name : ID"\n    for pods in "${workloads[@]}" ; do\n        POD_NAME="${pods%%::*}"\n        POD_ID="${pods##*::}"\n        echo "$POD_NAME : $POD_ID"\n    done\nfi\n\nwhile :; do\n    show_menu\n    read -p "Choice? " -r\n    if [ -n $REPLY ]; then\n        case "$REPLY" in\n            0)\n                exit 0;\n                ;;\n            1)  \n                counter=0\n                declare -a sniffs;\n                for pods in "${workloads[@]}"; do\n                    POD_ID="${pods##*::}"\n                    sniff_id="$(sniffer_start $POD_ID)";\n                    sniffs[$counter]=$sniff_id\n                    counter=$((counter+1))\n                done\n                echo "Running pcap for ~$DURATION seconds.";\n                sleep $DURATION;\n                for sniff_id in "${sniffs[@]}"; do\n                    sniff_id=${sniff_id:1:${#sniff_id}-2}\n                    status="$(sniffer_stop $sniff_id)";\n                done\n                ;;\n            2)\n                for sniff_id in "${sniffs[@]}"; do\n                    sniff_id=${sniff_id:1:${#sniff_id}-2}\n                    status="$(sniffer_pcap_get $sniff_id)";\n                done\n                ;;\n            3)\n                for sniff_id in "${sniffs[@]}"; do\n                    sniff_id=${sniff_id:1:${#sniff_id}-2}\n                    status="$(sniffer_pcap_delete $sniff_id)";\n                done\n                ;;\n        esac\n    else\n        exit 1\n    fi\ndone\n'})}),"\n",(0,o.jsx)(n.h4,{id:"enable-disable-container-quarantine",children:"Enable Disable Container Quarantine"}),"\n",(0,o.jsxs)(n.p,{children:["The API call to quarantine is via PATCH to /v1/workload/",":id"," with the following body. The workload id is the container/pod id."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'--data-raw \'{\n    "config": {\n        "quarantine": true,\n        "wire": "default",\n        "quarantine_reason": "violation"\n    }\n}\'\n'})}),"\n",(0,o.jsx)(n.h4,{id:"enable-debugging-mode-for-neuvector-support",children:"Enable Debugging Mode for NeuVector Support"}),"\n",(0,o.jsx)(n.p,{children:"Set access token with your IP, user, password:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'_controllerIP_="<your_controller_ip>"\n_controllerRESTAPIPort_="10443"\n_neuvectorUsername_="admin"\n_neuvectorPassword_="admin"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Get the authentication token"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -k -H "Content-Type: application/json" -d \'{"password": {"username": "\'$_neuvectorUsername_\'", "password": "\'$_neuvectorPassword_\'"}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/auth" > /dev/null 2>&1 > token.json\n_TOKEN_=`cat token.json | jq -r \'.token.token\'`\n'})}),"\n",(0,o.jsx)(n.p,{children:"Enable Debug Mode"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -X PATCH -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"config": {"controller_debug": ["cpath", "conn"]}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/system/config"  > /dev/null 2>&1   > set_debug.json\n#debug options - cpath, conn, mutex, scan, cluster , all\n'})}),"\n",(0,o.jsx)(n.p,{children:"Disable Debug on all controllers in a cluster"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -X PATCH -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"config": {"controller_debug": []}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/system/config"  > /dev/null 2>&1   > set_debug.json\n'})}),"\n",(0,o.jsx)(n.p,{children:"Check the controller debug status in a cluster"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl  -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_"  "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/system/config"  > /dev/null 2>&1   > system_setting.json\n\ncat system_setting.json | jq .config.controller_debug\n'})}),"\n",(0,o.jsx)(n.p,{children:"Logout"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'echo `date +%Y%m%d_%H%M%S` log out\ncurl -k -X \'DELETE\' -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/auth" > /dev/null 2>&1\n'})}),"\n",(0,o.jsx)(n.h4,{id:"report-if-a-vulnerability-is-in-the-base-image-layers",children:"Report if a vulnerability is in the base image layers"}),"\n",(0,o.jsx)(n.p,{children:"To identify CVE's in the base image when using REST API to scan images, the base image must be identified in the API call, as in the example below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"request": {"registry": "https://registry.hub.docker.com/", "repository": "garricktam/debian", "tag": "latest", "scan_layers": false, "base_image": "2244...../nodejs:3.2......"}}\' "https://$RESTURL/v1/scan/repository"\n{noformat}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)("strong",{children:"Limitations:"}),' If the image to be scanned is a remote image, with "registry" specified, the base image must also be a remote image, and the name must start with http or https.  If the image to be scanned is a local image, then the base image must also be a local image as well.']}),"\n",(0,o.jsx)(n.p,{children:"For example,"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{"request": {"repository": "neuvector/manager", "tag": "4.0.2", "scan_layers": true, "base_image": "alpine:3.12.0"}}\n{"request": {"registry": "https://10.1.127.12:5000/", "repository": "neuvector/manager", "tag": "4.0.0", "scan_layers": true, "base_image": "https://registry.hub.docker.com/alpine:3.12.0"}}\n{"request": {"repository": "neuvector/manager", "tag": "4.0.2", "scan_layers": true, "base_image": "10.1.127.12:5000/neuvector/manager:4.0.2\u201d}}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"get-the-cve-database-version-and-date",children:"Get the CVE Database Version and Date"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" "https://127.0.0.1:10443/v1/scan/scanner"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\t"scanners": [\n\t\t{\n\t\t\t"cvedb_create_time": "2020-07-07T10:34:04Z",\n\t\t\t"cvedb_version": "1.950",\n\t\t\t"id": "0f043705948557828ac1831ee596588a0d050950113117ddd19ecd604982f4d9",\n\t\t\t"port": 18402,\n\t\t\t"server": "127.0.0.1"\n\t\t},\n\t\t{\n\t\t\t"cvedb_create_time": "2020-07-07T10:34:04Z",\n\t\t\t"cvedb_version": "1.950",\n\t\t\t"id": "9fa02c644d603f59331c95735158d137002d32a75ed1014326f5039f38d4d717",\n\t\t\t"port": 18402,\n\t\t\t"server": "192.168.9.95"\n\t\t}\n\t]\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"manage-federation-for-master-and-remote-worker-clusters",children:"Manage Federation for Master and Remote (Worker) Clusters"}),"\n",(0,o.jsxs)(n.p,{children:["Generally, listing Federation members can use a GET to the following endpoint (see samples for specific syntax):\n",(0,o.jsx)(n.a,{href:"https://neuvector-svc-controller.neuvector:10443/v1/fed/member",children:"https://neuvector-svc-controller.neuvector:10443/v1/fed/member"})]}),"\n",(0,o.jsx)(n.p,{children:"Selected Federation Management API's:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'_masterClusterIP_=$1\n_workerClusterIP_=$2\n# this is used if one of clusters is going to be kicked by master cluster\n_CLUSTER_name_=$3\n\necho `date +%Y%m%d_%H%M%S` [$_curCase_] login as default admin user\ncurl -k -H "Content-Type: application/json" -d \'{"password": {"username": "admin", "password": "admin"}}\' "https://$_masterClusterIP_:10443/v1/auth" > /dev/null 2>&1 > ./$_LOGFOLDER_/token.json\n_TOKEN_M_=`cat ./$_LOGFOLDER_/token.json | jq -r \'.token.token\'`\n\necho `date +%Y%m%d_%H%M%S` [$_curCase_] promote to master cluster\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_M_" -d \'{"master_rest_info": {"port": 11443, "server": "\'$_masterClusterIP_\'"}, "name": "master"}\' "https://$_masterClusterIP_:10443/v1/fed/promote" > /dev/null 2>&1\necho `date +%Y%m%d_%H%M%S` [$_curCase_] idle 6 seconds for logon session timeout\nsleep 6\n\necho `date +%Y%m%d_%H%M%S` [$_curCase_] login as default admin user on master cluster\ncurl -k -H "Content-Type: application/json" -d \'{"password": {"username": "admin", "password": "admin"}}\' "https://$_masterClusterIP_:10443/v1/auth" > /dev/null 2>&1 > ./token.json\n_TOKEN_M_=`cat ./token.json | jq -r \'.token.token\'`\n\necho `date +%Y%m%d_%H%M%S` [$_curCase_] checking fed join_token on master cluster\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_M_" "https://$_masterClusterIP_:10443/v1/fed/join_token" > /dev/null 2>&1 > ./join_token.json\ncat ./join_token.json | jq -c .\n_JOIN_TOKEN_=`cat ./join_token.json | jq -r \'.join_token\'`\n\necho `date +%Y%m%d_%H%M%S` [$_curCase_] login as default admin user on worker cluster\ncurl -k -H "Content-Type: application/json" -d \'{"password": {"username": "admin", "password": "admin"}}\' "https://$_workerClusterIP_:10443/v1/auth" > /dev/null 2>&1 > ./token.json\n_TOKEN_W_=`cat ./token.json | jq -r \'.token.token\'`\n\necho `date +%Y%m%d_%H%M%S` [$_curCase_] joining the cluster\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_W_" -d \'{"join_token": "\'$_JOIN_TOKEN_\'", "name": "worker", "joint_rest_info": {"port": 10443, "server": "\'$_workerClusterIP_\'"}}\' "https://$_workerClusterIP_:10443/v1/fed/join" > /dev/null 2>&1\necho `date +%Y%m%d_%H%M%S` [$_curCase_] idle 9 seconds for events\nsleep 9\n\n########## whenever there is a change on cluster such as a cluster is kicked/left/joined, run this to check the status ############\necho `date +%Y%m%d_%H%M%S` [$_curCase_] checking fed member on master cluster\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_M_" "https://$_masterClusterIP_:10443/v1/fed/member" > /dev/null 2>&1 > ./fedMember.json\ncat ./fedMember.json | jq -c .\n\necho `date +%Y%m%d_%H%M%S` [$_curCase_] checking fed member on worker cluster\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_W_" "https://$_workerClusterIP_:10443/v1/fed/member" > /dev/null 2>&1 > ./fedMember.json\ncat ./fedMember.json | jq -c .\n_CLUSTER_id_=`cat ./fedMember.json | jq -r --arg _CLUSTER_name_ "$_CLUSTER_name_" \'.joint_clusters[] | select(.name == $_CLUSTER_name_).id\'`\n###################################################################################################################################\n\n########## for ur information to leave or kick the cluster ############\necho `date +%Y%m%d_%H%M%S` [$_curCase_] requesting to leave on worker cluster\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_W_" -d \'{"force": false}\' "https://$_workerClusterIP_:10443/v1/fed/leave" > /dev/null 2>&1\necho `date +%Y%m%d_%H%M%S` [$_curCase_] idle 9 seconds for events\nsleep 9\n\necho `date +%Y%m%d_%H%M%S` [$_curCase_] requesting to kick on master cluster, $_CLUSTER_id_\ncurl -k -X "DELETE" -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_M_" "https://$_masterClusterIP_:10443/v1/fed/cluster/$_CLUSTER_id_" > /dev/null 2>&1\necho `date +%Y%m%d_%H%M%S` [$_curCase_] idle 9 seconds for events\nsleep 9\n#######################################################################\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},69369:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/ImportExport-2e9976d25606bf04094c2e589955066d.zip"},89396:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/5_2_api_created-fc1219aacfc054ecad213638b0d3620b.png"},81885:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/5_2_api_key-6a4f8ec0c2cf954b54b35110fc240e21.png"},74289:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/5_2_api_key_header-76edb46b0219f0765293dcb32d6d7921.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);