---
title: Process Profile Rules
taxonomy:
    category: docs
---

### Policy -> Groups -> Process Profile Rules



####Process Rules for Nodes
The special reserved group 'nodes' can be configured to enforce process profile rules on each node (host) in the cluster. Select the group 'nodes' and review the process rules, editing if required. Then switch the protection mode to Monitor or Protect. The 'local' (learned) process rule list is a combination of all processes from all nodes in the cluster while in Discover mode.

####Process Rules for Custom Groups
For user defined custom Groups, process rules, if desired, must be manually added. Custom Groups do not learn process rules automatically.


####Process Rules Precedence
Process rules can exist for user defined custom Groups as well as auto-learned Groups. Rules created for custom Groups take precedence over rules for auto-learned Groups.

For the process rule list within any Group, the rule order in the console determines its precedence. The top rules listed are matched first before the ones below it.

Process rules with name and path both containing wildcards take precedence over other rules to Allow action. A Deny action is not allowed with both wildcards to avoid blocking all processes.

Process rules with a Deny action and wildcard in the name will take precedence over Allow actions with wildcard in the name.

 All new processed are profiled with action allow
 Users can change the action into 'deny' for generating alert or blocking when same new process is started
 Users can create a profile for a process with either allow or deny
 Process profile rules can contain name and/or path
+ Wildcards &#42; can be used to match all for name or path

Note:  A suspicious process (built-in detect), such as nmap, ncat. etc., is reported as a suspicious process event and will NOT be learned. If a service needs this process, the process needs to be added with an 'allow' profile rule explicitly.

 Every new process generates an alert
 Process profile rules can contain name and/or path
+ Wildcards &#42; can be used to match all for name or path

If a) process matches a deny rule, or b) process is not in the list of allow rules, then:
+ In Monitor mode, alerts will be generated
+ In Protect mode, processes will be blocked and alerts generated

Note:  Container platforms with the AUFS storage driver will introduce a delay in blocking mechanism due to the driver’s limitations. 

Note:  In Protect mode, system containers such as Kubernetes ones, will not enable the block action but will generate a process violation event if there is a process violation. 

Multiple rules can be created for the same process. The rules are executed sequentially and the first matching rule will be executed.

 Click Add rule (+) from process profile rules tab
+ Process profile rules can contain name and/or path
+ Wildcards &#42; can be used to match all for name or path

![pingRule](ping.png)


####Built-in Suspicious Process Detection
The following built-in detections are automatically enabled in NeuVector.

| Process | Direction | Reported name |
| ------- | ----------- | -------------- |
| nmap | outgoing | port scanner |
| nc | outgoing | netcat process |
| ncat | outgoing | netcat process |
| netcat| outgoing | netcat process |
| sshd | incoming | ssh from remote |
| ssh | outgoing | ssh to remote |
| scp | outgoing | secure copy |
| telnet | outgoing | telnet to remote |
| in.telnetd | incoming | telnet from remote |
| iodine | outgoing | dns tunneling |
| iodined | incoming | dns tunneling |
| dnscat |outgoing | dns tunneling |
| dns2tcpc | outgoing | dns tunneling |
| dns2tcpd | incoming | dns tunneling |
| socat | outgoing | relay process |
 
In addition the following detections are enabled:
+ docker cp
+ root privilege escalation (user role into root role)
+ tunnel: reverse shell (triggered when stdin and stdout are redirected to the same socket)

Suspicious processes are alerted when in Discover or Monitor mode, and blocked when in Protect mode. Detection applies to containers as well as hosts, with the exception of 'sshd' which is not considered suspicious on hosts. Processes listed above can be added to the Allow List for containers (Groups) including hosts if it should be allowed.