
let listenArr = [
    // Basic Configuration: Basic Router Configuration
    ['basicRouterConfHostname', 'hostname'],
    ['basicRouterConfPword1', 'password1'],
    ['basicRouterConfPword2', 'password2'],
    ['basicRouterConfBanner', 'banner'],

    // Basic Configuration: Router interface configuration IPv4
    ['ConfigureRouterInterfacesName', 'name'],
    ['ConfigureRouterInterfacesIp', 'ip'],
    ['ConfigureRouterInterfacesSubnet', 'subnet'],
    ['ConfigureRouterInterfacesDesc', 'desc'],

    // Basic Configuration: Router interface configuration IPv6
    ['InterfaceConfV6Interface', 'int'],
    ['InterfaceConfV6IP', 'ip'],
    ['InterfaceConfV6Prefix', 'prefix'],
    ['InterfaceConfV6LinkLocal', 'link'],
    ['InterfaceConfV6Desc', 'desc'],

    // Basic Configuration: DHCP
    ['DHCPExStart', 'exStart'],
    ['DHCPExEnd', 'exEnd'],
    ['DHCPStart', 'start'],
    ['DHCPSubnet', 'subnet'],
    ['DHCPDomain', 'domain'],
    ['DHCPPool', 'pool'],
    ['DHCPRouter', 'router'],
    ['DHCPLease', 'lease'],

    // Static Route IPv4
    ['StaticRouteIp', 'ip'],
    ['StaticRouteSubnet', 'subnet'],
    ['StaticRouteDest', 'dest'],

    // Static Route IPv6
    ['StaticRouteV6Ip', 'ip'],
    ['StaticRouteV6Prefix', 'prefix'],
    ['StaticRouteV6Int', 'interface'],
    ['StaticRouteV6Dest', 'dest'],
    ['StaticRouteV6Dist', 'dist'],

    // Vlan: Create VLAN
    ['vlanConfigurationID', 'id'],
    ['vlanConfigurationName', 'name'],

    // Vlan: VLAN Port Assignment
    ['vlanPortAssignmentInt', 'interface'],
    ['vlanPortAssignmentMode', 'mode'],
    ['vlanPortAssignmentId', 'id'],

    // VLAN: VLAN Access
    ['VLANAccessInt', 'int'],
    ['VLANAccessVLAN', 'vlan'],
    ['VLANAccessDesc', 'desc'],
    ['VLANAccessIP', 'ip'],
    ['VLANAccessSubnet', 'subnet'],
    ['VLANAccessEnc', 'enc'],

    // Port Security: Enable Port Security
    ['enablePortSecurityInterface', 'interface'],

    // Port Security: Limit MAC Addresses
    ['LimitMACAddressInterface', 'interface'],
    ['LimitMACAddressMax', 'max'],
    ['LimitMACAddressMac', 'mac'],

    // Port Security: Aging
    ['PortSecurityAgingTime', 'time'],
    ['PortSecurityAgingType', 'type'],

    // Port Security: Set Violation Mode
    ['SetViolationModeInterface', 'interface'],
    ['SetViolationModeMode', 'mode'],

    // Port Security: DHCP Snooping
    ['DHCPSnoopingTrustedInterface', 'trustedInterface'],
    ['DHCPSnoopingUnTrustedInterface', 'untrustedInterface'],
    ['DHCPSnoopingVLANs', 'vlans'],
    ['DHCPSnoopingLimit', 'limit'],

    // Port Security: PortFast (Interface)
    ['ConfigurePortFastInterface', 'interface'],

    // Port Security: BPDU Guard (Interface)
    ['ConfigureBPDUGuardInterface', 'interface']
];

function toggle(elem) {
    let container = elem.parentElement.getElementsByClassName('card');
    container[0].style.display = container[0].style.display == "block" ? "none" : "block";
    
    if(container[0].style.display == 'block') saveToClipboard(elem.parentElement.getElementsByTagName('div')[0]);
}

function setValue(c, v) {
    for(let i = 0; i < c.length; i++) {
        let tmp = DOMPurify.sanitize(v.value);
        c[i].innerHTML = tmp;
    }

    //navigator.clipboard.writeText(v.parentElement.parentElement.getElementsByTagName('p')[0].innerText);
}

function setListener(formField, resultField){
    formField.addEventListener('input', () => {
        let par = formField.parentElement.parentElement;
        let children = par.getElementsByClassName(resultField);
        
        setValue(children, formField);
    })
}

function saveToClipboard(elem) {
    //navigator.clipboard.writeText(elem.getElementsByTagName('p')[0].innerText);
}

for(let i = 0; i < listenArr.length; i++) {
    let elem = document.getElementById(listenArr[i][0]);
    setListener(elem, listenArr[i][1]);
}


// --

document.getElementById('ConfigureBPDUGuardInterface').addEventListener('input', () => {
    let arr = arr2;
    let elemValue = document.getElementById('ConfigureBPDUGuardInterface').value;
    if(elemValue == "") {
        document.getElementById('t').innerHTML = "configure terminal<br>interface <span class='interface'>INTERFACE</span><br>spanning-tree bpduguard enable<br>end";
        return;
    }

    let tmp = "";
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][0].includes(elemValue)) {
            for(let o = 0; o < arr[i][1].length; o++) {
                tmp += `${o} -> ${arr[i][1][o]}<br>`;
            }
        }
    }
    document.getElementById('t').innerHTML = tmp;
});

let arr1 = [
    ['Which two traffic types use the Real-Time Transport Protocol (RTP)? (Choose two.)', ['video','voice']],
    ['Which wireless technology has low-power and data rate requirements making it popular in home automation applications?', ['ZigBee']],
    ['Which layer of the TCP/IP model provides a route to forward messages through an internetwork?', ['internet']],
    ['Which type of server relies on record types such as A, NS, AAAA, and MX in order to provide services?', ['DNS']],
    ['What are proprietary protocols?', ['protocols developed by organizations who have control over their definition and operation']],
    ['What service is provided by DNS?', ['Resolves domain names',' such as cisco.com',' into IP addresses.']],
    ['A client packet is received by a server. The packet has a destination port number of 110. What service is the client requesting?', ['POP3']],
    ['What command can be used on a Windows PC to see the IP configuration of that computer?', ['ipconfig']],
    ['A wired laser printer is attached to a home computer. That printer has been shared so that other computers on the home network can also use the printer. What networking model is in use?', ['peer-to-peer (P2P)']],
    ['What characteristic describes a virus?', ['malicious software or code running on an end device']],
    ['Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?', ['audio conference',' financial transactions',' web page']],
    ['Refer to the exhibit. If Host1 were to transfer a file to the server, what layers of the TCP/IP model would be used?', ['application',' transport',' Internet',' and network access layers']],
    ['Refer to the exhibit. The IP address of which device interface should be used as the default gateway setting of host H1?', ['R1: G0/0']],
    ['What service is provided by Internet Messenger?', ['An application that allows real-time chatting among remote users.']],
    ['Refer to the exhibit. Which protocol was responsible for building the table that is shown?', ['ARP']],
    ['A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed in the ceiling close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion and data corruption? (Choose two.)', ['RFI​','EMI']],
    ['A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?(A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in the ARP cache. How will the device obtain a destination MAC address?)', ['It will send an ARP request for the MAC address of the default gateway.']],
    ['A client packet is received by a server. The packet has a destination port number of 53. What service is the client requesting?', ['DNS']],
    ['A network administrator is adding a new LAN to a branch office. The new LAN must support 25 connected devices. What is the smallest network mask that the network administrator can use for the new network?', ['255.255.255.224']],
    ['What characteristic describes a Trojan horse?', ['malicious software or code running on an end device']],
    ['What service is provided by HTTPS?', ['Uses encryption to secure the exchange of text',' graphic images',' sound',' and video on the web.']],
    ['A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?', ['The data flow is being tracked based on the source port number that is used by each application.']],
    ['A network administrator is adding a new LAN to a branch office. The new LAN must support 61 connected devices. What is the smallest network mask that the network administrator can use for the new network?', ['255.255.255.192']],
    ['What characteristic describes a DoS attack?', ['an attack that slows or crashes a device or network service']],
    ['What service is provided by SMTP?', ['Allows clients to send email to a mail server and the servers to send email to other servers.']],
    ['Which scenario describes a function provided by the transport layer?', ['A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.']],
    ['What does the term “attenuation” mean in data communication?', ['loss of signal strength as distance increases']],
    ['Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?', ['The administrator must first enter privileged EXEC mode before issuing the command.']],
    ['Which two protocols operate at the top layer of the TCP/IP protocol suite? (Choose two.)', ['POP','DNS']],
    ['A company has a file server that shares a folder named Public. The network security policy specifies that the Public folder is assigned Read-Only rights to anyone who can log into the server while the Edit rights are assigned only to the network admin group. Which component is addressed in the AAA network service framework?', ['authorization']],
    ['What three requirements are defined by the protocols used in network communcations to allow message transmission across a network? (Choose three.)', ['message size','message encoding','delivery options']],
    ['What are two characteristics of IP? (Choose two.)', ['does not require a dedicated end-to-end connection ','operates independently of the network media']],
    ['An employee of a large corporation remotely logs into the company using the appropriate username and password. The employee is attending an important video conference with a customer concerning a large sale. It is important for the video quality to be excellent during the meeting. The employee is unaware that after a successful login, the connection to the company ISP failed. The secondary connection, however, activated within seconds. The disruption was not noticed by the employee or other employees.What three network characteristics are described in this scenario? (Choose three.)', ['security','quality of service','fault tolerance']],
    ['What are two common causes of signal degradation when using UTP cabling? (Choose two.)', ['improper termination','low-quality cable or connectors']],
    ['Which subnet would include the address 192.168.1.96 as a usable host address?', ['192.168.1.64/26']],
    ['Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.)', ['There are 4 hops between this device and the device at 192.168.100.1.','There is connectivity between this device and the device at 192.168.100.1.']],
    ['Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)', ['Capture traffic during peak utilization times to get a good representation of the different traffic types.','Perform the capture on different network segments.']],
    ['What is the consequence of configuring a router with the <em>ipv6 unicast-routing </em>global configuration command?​', ['The IPv6 enabled router interfaces begin sending ICMPv6 Router Advertisement messages.']],
    ['Which three layers of the OSI model map to the application layer of the TCP/IP model? (Choose three.)', ['application','session','presentation']],
    ['Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?', ['remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0']],
    ['What will happen if the default gateway address is incorrectly configured on a host?', ['The host cannot communicate with hosts in other networks.']],
    ['What are two features of ARP? (Choose two.)', ['If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination',' it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address',' it responds with an ARP reply.']],
    ['A network administrator is adding a new LAN to a branch office. The new LAN must support 90 connected devices. What is the smallest network mask that the network administrator can use for the new network?', ['255.255.255.128']],
    ['What are two ICMPv6 messages that are not present in ICMP for IPv4? (Choose two.)', ['Neighbor Solicitation','Router Advertisement']],
    ['A client packet is received by a server. The packet has a destination port number of 80. What service is the client requesting?', ['HTTP']],
    ['What is an advantage for small organizations of adopting IMAP instead of POP?', ['Messages are kept in the mail servers until they are manually deleted from the email client.']],
    ['A technician can ping the IP address of the web server of a remote company but cannot successfully ping the URL address of the same web server. Which software utility can the technician use to diagnose the problem?', ['nslookup']],
    ['Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)', ['enables IPv4 and IPv6 to utilize the same physical medium','places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame']],
    ['The global configuration command <em>ip default-gateway 172.16.100.1 </em>is applied to a switch. What is the effect of this command?', ['The switch can be remotely managed from a host on another network.']],
    ['What happens when the <em>transport input ssh </em>command is entered on the switch vty lines?', ['Communication between the switch and remote users is encrypted.']],
    ['A disgruntled employee is using some free wireless networking tools to determine information about the enterprise wireless networks. This person is planning on using this information to hack the wireless network. What type of attack is this?', ['reconnaissance']],
    ['What service is provided by HTTP?', ['A basic set of rules for exchanging text',' graphic images',' sound',' video',' and other multimedia files on the web.']],
    ['A client packet is received by a server. The packet has a destination port number of 67. What service is the client requesting?', ['DHCP']],
    ['What are two problems that can be caused by a large number of ARP request and reply messages? (Choose two.)', ['The ARP request is sent as a broadcast',' and will flood the entire subnet.','All ARP request messages must be processed by all nodes on the local network.']],
    ['A group of Windows PCs in a new subnet has been added to an Ethernet network. When testing the connectivity, a technician finds that these PCs can access local network resources but not the Internet resources. To troubleshoot the problem, the technician wants to initially confirm the IP address and DNS configurations on the PCs, and also verify connectivity to the local router. Which three Windows CLI commands and utilities will provide the necessary information? (Choose three.)', ['ping','ipconfig','nslookup']],
    ['During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?', ['switch the packet to the directly connected interface']],
    ['What characteristic describes antispyware?', ['applications that protect end devices from becoming infected with malicious software']],
    ['A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?', ['SSH']],
    ['What are the two most effective ways to defend against malware? (Choose two.)', ['Update the operating system and other application software.','Install and update antivirus software.']],
    ['Which type of security threat would be responsible if a spreadsheet add-on disables the local software firewall?', ['Trojan horse']],
    ['Which frame field is created by a source node and used by a destination node to ensure that a transmitted data signal has not been altered by interference, distortion, or signal loss?', ['frame check sequence field']],
    ['A network administrator is adding a new LAN to a branch office. The new LAN must support 4 connected devices. What is the smallest network mask that the network administrator can use for the new network?', ['255.255.255.248']],
    ['What service is provided by POP3?', ['Retrieves email from the server by downloading the email to the local mail application of the client.']],
    ['What two security solutions are most likely to be used only in a corporate environment? (Choose two.)', ['virtual private networks','intrusion prevention systems']],
    ['What characteristic describes antivirus software?', ['applications that protect end devices from becoming infected with malicious software']],
    ['What mechanism is used by a router to prevent a received IPv4 packet from traveling endlessly on a network?', ['It decrements the value of the TTL field by 1 and if the result is 0',' it discards the packet and sends a Time Exceeded message to the source host.']],
    ['A client packet is received by a server. The packet has a destination port number of 69. What service is the client requesting?', ['TFTP']],
    ['An administrator defined a local user account with a secret password on router R1 for use with SSH. Which three additional steps are required to configure R1 to accept only encrypted SSH connections? (Choose three.)', ['Configure the IP domain name on the router.','Generate the SSH keys.','Enable inbound vty SSH sessions.']],
    ['Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)', ['implements trailer with frame check sequence for error detection','implements a process to delimit fields within an Ethernet 2 frame']],
    ['An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?​', ['all IPv6 configured routers on the local link​']],
    ['What are the three parts of an IPv6 global unicast address? (Choose three.)', ['subnet ID','global routing prefix','interface ID']],
    ['A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)', ['interference','security','coverage area']],
    ['A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?', ['Exit privileged EXEC mode and press Enter .']],
    ['What method is used to manage contention-based access on a wireless network?', ['CSMA/CA']],
    ['What is a function of the data link layer?', ['provides for the exchange of frames over a common local media']],
    ['What is the purpose of the TCP sliding window?', ['to request that a source decrease the rate at which it transmits data']],
    ['What characteristic describes spyware?', ['software that is installed on a user device and collects information about the user']],
    ['Which switching method drops frames that fail the FCS check?', ['store-and-forward switching']],
    ['Which range of link-local addresses can be assigned to an IPv6-enabled interface?', ['FE80::/10']],
    ['What service is provided by FTP?', ['Allows for data transfers between a client and a file server.']],
    ['A user is attempting to access http://www.cisco.com/ without success. Which two configuration values must be set on the host to allow this access? (Choose two.)', ['DNS server','default gateway']],
    ['Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)', ['NAT introduces problems for some applications that require end-to-end connectivity.','NAT provides a solution to slow down the IPv4 address depletion.']],
    ['What would be the interface ID of an IPv6 enabled interface with a MAC address of 1C-6F-65-C2-BD-F8 when the interface ID is generated by using the EUI-64 process?', ['1E6F:65FF:FEC2:BDF8']],
    ['Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?', ['PC2 will send an ARP reply with the PC2 MAC address.']],
    ['What service is provided by BOOTP?', ['Legacy application that enables a diskless workstation to discover its own IP address and find a BOOTP server on the network.']],
    ['What characteristic describes adware?', ['software that is installed on a user device and collects information about the user']],
    ['When a switch configuration includes a user-defined error threshold on a per-port basis, to which switching method will the switch revert when the error threshold is reached?', ['store-and-forward']],
    ['What are two primary responsibilities of the Ethernet MAC sublayer? (Choose two.)', ['accessing the media','data encapsulation']],
    ['Refer to the exhibit. What three facts can be determined from the viewable output of the show ip interface brief command? (Choose three.)', ['The switch can be remotely managed.','One device is attached to a physical interface.','The default SVI has been configured.']],
    ['What is the subnet ID associated with the IPv6 address 2001:DA48:FC5:A4:3D1B::1/64?', ['2001:DA48:FC5:A4::/64​']],
    ['Users are reporting longer delays in authentication and in accessing network resources during certain time periods of the week. What kind of information should network engineers check to find out if this situation is part of a normal network behavior?', ['the network performance baseline']],
    ['How does the service password-encryption command enhance password security on Cisco routers and switches?', ['It encrypts passwords that are stored in router or switch configuration files.']],
    ['Which two statements are correct in a comparison of IPv4 and IPv6 packet headers? (Choose two.)', [' The Source Address field name from IPv4 is kept in IPv6.','The Time-to-Live field from IPv4 has been replaced by the Hop Limit field in IPv6.']],
    ['The network administrator has deemed that 192.168.10.0/24 is to be the network used at this site. Which single subnet mask would make the most efficient use of the available addresses to use for the four subnetworks?', ['255.255.255.224']],
    ['What characteristic describes identity theft?', ['the use of stolen credentials to access private data']],
    ['A network administrator is adding a new LAN to a branch office. The new LAN must support 200 connected devices. What is the smallest network mask that the network administrator can use for the new network?', ['255.255.255.0']],
    ['What are three commonly followed standards for constructing and installing cabling? (Choose three.)', ['cable lengths','pinouts','connector types']],
    ['Refer to the exhibit. What is wrong with the displayed termination?', ['The untwisted length of each wire is too long.']],
    ['A client packet is received by a server. The packet has a destination port number of 143. What service is the client requesting?', ['IMAP']],
    ['What are two characteristics shared by TCP and UDP? (Choose two.)', ['port numbering','use of checksum']],
    ['Refer to the exhibit. Which two network addresses can be assigned to the network containing 10 hosts? Your answers should waste the fewest addresses, not reuse addresses that are already assigned, and stay within the 10.18.10.0/24 range of addresses. (Choose two.)', ['10.18.10.208/28','10.18.10.224/28']],
    ['A client packet is received by a server. The packet has a destination port number of 21. What service is the client requesting?', ['FTP']],
    ['What attribute of a NIC would place it at the data link layer of the OSI model?', ['MAC address']],
    ['A network administrator is adding a new LAN to a branch office. The new LAN must support 10 connected devices. What is the smallest network mask that the network administrator can use for the new network?', ['255.255.255.240']],
    ['What technique is used with UTP cable to help protect against signal interference from crosstalk?', ['twisting the wires together into pairs']],
    ['Refer to the exhibit. The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?', ['IP address: 192.168.10.38 subnet mask: 255.255.255.248',' default gateway: 192.168.10.33']],
    ['Refer to the exhibit. The switches are in their default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for its default gateway. Which network hosts will receive the ARP request sent by host A?', ['only hosts B',' C',' and router R1']],
    ['Refer to the exhibit. A network engineer has been given the network address of 192.168.99.0 and a subnet mask of 255.255.255.192 to subnet across the four networks shown. How many total host addresses are unused across all four subnets?', ['200']],
    ['A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?', ['SSH']],
    ['What characteristic describes an IPS?', ['a network device that filters access and traffic coming into a network']],
    ['What service is provided by DHCP?', ['Dynamically assigns IP addresses to end and intermediary devices.']],
    ['Refer to the exhibit. The switches have a default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for the default gateway. Which network devices will receive the ARP request sent by host A?', ['only hosts B',' C',' and router R1']],
    ['Which wireless technology has low-power and low-data rate requirements making it popular in IoT environments?', ['Zigbee']],
    ['What two ICMPv6 message types must be permitted through IPv6 access control lists to allow resolution of Layer 3 addresses to Layer 2 MAC addresses? (Choose two.)', ['neighbor solicitations','neighbor advertisements']],
    ['A client is using SLAAC to obtain an IPv6 address for its interface. After an address has been generated and applied to the interface, what must the client do before it can begin to use this IPv6 address?', ['It must send an ICMPv6 Neighbor Solicitation message to ensure that the address is not already in use on the network.']],
    ['Two pings were issued from a host on a local network. The first ping was issued to the IP address of the default gateway of the host and it failed. The second ping was issued to the IP address of a host outside the local network and it was successful. What is a possible cause for the failed ping?', ['Security rules are applied to the default gateway device',' preventing it from processing ping requests.']],
    ['An organization is assigned an IPv6 address block of 2001:db8:0:ca00::/56. How many subnets can be created without using bits in the interface ID space?', ['256']],
    ['What subnet mask is needed if an IPv4 network has 40 devices that need IP addresses and address space is not to be wasted?', ['255.255.255.192']],
    ['Refer to the exhibit. If host A sends an IP packet to host B, what will the destination address be in the frame when it leaves host A?', ['BB:BB:BB:BB:BB:BB']],
    ['What is a benefit of using cloud computing in networking?', ['Network capabilities are extended without requiring investment in new infrastructure',' personnel',' or software.']],
    ['Which two statements are correct about MAC and IP addresses during data transmission if NAT is not involved? (Choose two.)', ['Destination IP addresses in a packet header remain constant along the entire path to a target host.','Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another.']],
    ['What is one main characteristic of the data link layer?', ['It shields the upper layer protocol from being aware of the physical medium to be used in the communication.']],
    ['What are three characteristics of the CSMA/CD process? (Choose three.)', ['A device listens and waits until the media is not busy before transmitting.','After detecting a collision',' hosts can attempt to resume transmission after a random time delay has expired.','All of the devices on a segment see data that passes on the network medium.']],
    ['Which information does the show startup-config command display?', ['the contents of the saved configuration file in the NVRAM']],
    ['Which two commands can be used on a Windows host to display the routing table? (Choose two.)', ['route print','netstat -r']],
    ['What are two functions that are provided by the network layer? (Choose two.)', ['directing data packets to destination hosts on other networks','providing end devices with a unique network identifier']],
    ['Which two statements describe features of an IPv4 routing table on a router? (Choose two.)​', ['It stores information about routes derived from the active router interfaces.','If a default static route is configured in the router',' an entry will be included in the routing table with source code S .']],
    ['What characteristic describes a VPN?', ['a tunneling protocol that provides remote users with secure access into the network of an organization']],
    ['Why would a Layer 2 switch need an IP address?', ['to enable the switch to be managed remotely']],
    ['A user sends an HTTP request to a web server on a remote network. During encapsulation for this request, what information is added to the address field of a frame to indicate the destination?', ['the MAC address of the default gateway']],
    ['What is an advantage to using a protocol that is defined by an open standard?', ['It encourages competition and promotes choices.']],
    ['Data is being sent from a source PC to a destination server. Which three statements correctly describe the function of TCP or UDP in this situation? (Choose three.)', ['The source port field identifies the running application or service that will handle data returning to the PC.','UDP segments are encapsulated within IP packets for transport across the network.','The UDP destination port number identifies the application or service on the server which will handle the data.']],
    ['Refer to the exhibit. A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?', ['255.255.255.128']],
    ['What single subnet mask would be appropriate to use for the three subnetworks?', ['255.255.255.240']],
    ['What two pieces of information are displayed in the output of the show ip interface brief command? (Choose two.)', ['IP addresses','Layer 1 statuses']],
    ['A user is complaining that an external web page is taking longer than normal to load.The web page does eventually load on the user machine. Which tool should the technician use with administrator privileges in order to locate where the issue is in the network?', ['tracert']],
    ['Which value, that is contained in an IPv4 header field, is decremented by each router that receives a packet?', ['Time-to-Live']],
    ['A network technician is researching the use of fiber optic cabling in a new technology center. Which two issues should be considered before implementing fiber optic media? (Choose two.)', ['Fiber optic cabling requires different termination and splicing expertise from what copper cabling requires.','Fiber optic provides higher data capacity but is more expensive than copper cabling.']],
    ['A user is executing a tracert to a remote device. At what point would a router, which is in the path to the destination device, stop forwarding the packet?', ['when the value in the TTL field reaches zero']],
    ['Users report that the network access is slow. After questioning the employees, the network administrator learned that one employee downloaded a third-party scanning program for the printer. What type of malware might be introduced that causes slow performance of the network?', ['worm']],
];

let arr2 = [
    ['Refer to the exhibit. What will router R1 do with a packet that has a destination IPv6 address of 2001:db8:cafe:5::1?', ['forward the packet out Serial0/0/0']],
    ['Refer to the exhibit. Currently router R1 uses an EIGRP route learned from Branch2 to reach the 10.10.0.0/16 network. Which floating static route would create a backup route to the 10.10.0.0/16 network in the event that the link between R1 and Branch2 goes down?', ['ip route 10.10.0.0 255.255.0.0 209.165.200.225 100']],
    ['Refer to the exhibit. R1 was configured with the static route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network 172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed to allow user traffic from the LAN to reach the Internet?', ['Change the destination network and mask to 0.0.0.0 0.0.0.0']],
    ['Which option shows a correctly configured IPv4 default static route?', ['ip route 0.0.0.0 0.0.0.0 S0/0/0']],
    ['Refer to the exhibit. Which static route command can be entered on R1 to forward traffic to the LAN connected to R2?', ['ipv6 route 2001:db8:12:10::/64 S0/0/1 fe80::2']],
    ['What is a method to launch a VLAN hopping attack?', ['introducing a rogue switch and enabling trunking']],
    ['A cybersecurity analyst is using the macof tool to evaluate configurations of switches deployed in the backbone network of an organization. Which type of LAN attack is the analyst targeting during this evaluation?', ['MAC address table overflow']],
    ['Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?', ['The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation.']],
    ['Refer to the exhibit. A network administrator configured routers R1 and R2 as part of HSRP group 1. After the routers have been reloaded, a user on Host1 complained of lack of connectivity to the Internet The network administrator issued the show standby brief command on both routers to verify the HSRP operations. In addition, the administrator observed the ARP table on Host1. Which entry should be seen in the ARP table on Host1 in order to gain connectivity to the Internet?', ['the virtual IP address and the virtual MAC address for the HSRP group 1']],
    ['Which statement is correct about how a Layer 2 switch determines how to forward frames?', ['Frame forwarding decisions are based on MAC address and port mappings in the CAM table.']],
    ['Which statement describes a result after multiple Cisco LAN switches are interconnected?', ['The broadcast domain expands to all switches.']],
    ['An administrator is trying to remove configurations from a switch. After using the command erase startup-config and reloading the switch, the administrator finds that VLANs 10 and 100 still exist on the switch. Why were these VLANs not removed?', ['Because these VLANs are stored in a file that is called vlan.dat that is located in flash memory, this file must be manually deleted.']],
    ['Refer to the exhibit. A network administrator has connected two switches together using EtherChannel technology. If STP is running, what will be the end result?', ['STP will block one of the redundant links.']],
    ['What is a secure configuration option for remote access to a network device?', ['Configure SSH.']],
    ['Which wireless encryption method is the most secure?', ['WPA2 with AES']],
    ['After attaching four PCs to the switch ports, configuring the SSID and setting authentication properties for a small office network, a technician successfully tests the connectivity of all PCs that are connected to the switch and WLAN. A firewall is then configured on the device prior to connecting it to the Internet. What type of network device includes all of the described features?', ['wireless router']],
    ['Refer to the exhibit. Host A has sent a packet to host B. What will be the source MAC and IP addresses on the packet when it arrives at host B?', ['Source MAC: 00E0.FE91.7799Source IP: 10.1.1.10']],
    ['Refer to the exhibit. In addition to static routes directing traffic to networks 10.10.0.0/16 and 10.20.0.0/16, Router HQ is also configured with the following command:', ['Packets with a destination network that is not 10.10.0.0/16 or is not 10.20.0.0/16 or is not a directly connected network will be forwarded to the Internet.']],
    ['What protocol or technology disables redundant paths to eliminate Layer 2 loops?', ['STP']],
    ['Refer to the exhibit. Based on the exhibited configuration and output, why is VLAN 99 missing?', ['because VLAN 99 has not yet been created']],
    ['Which two VTP modes allow for the creation, modification, and deletion of VLANs on the local switch? (Choose two.)', ['server','transparent']],
    ['Which three steps should be taken before moving a Cisco switch to a new VTP management domain? (Choose three.)', ['Configure the switch with the name of the new management domain.','Select the correct VTP mode and version.','Reboot the switch.']],
    ['A network administrator is preparing the implementation of Rapid PVST+ on a production network. How are the Rapid PVST+ link types determined on the switch interfaces?', ['Link types are determined automatically.']],
    ['Refer to the exhibit. All the displayed switches are Cisco 2960 switches with the same default priority and operating at the same bandwidth. Which three ports will be STP designated ports? (Choose three.)', ['fa0/13','fa0/10','fa0/21']],
    ['How will a router handle static routing differently if Cisco Express Forwarding is disabled?', ['Ethernet multiaccess interfaces will require fully specified static routes to avoid routing inconsistencies.']],
    ['Compared with dynamic routes, what are two advantages of using static routes on a router? (Choose two.)', ['They improve netw​ork security.','They use fewer router resources.']],
    ['Refer to the exhibit. Which route was configured as a static route to a specific network using the next-hop address?', ['S 10.17.2.0/24 [1/0] via 10.16.2.2']],
    ['What is the effect of entering the spanning-tree portfast configuration command on a switch?', ['It enables portfast on a specific switch interface.']],
    ['What is the IPv6 prefix that is used for link-local addresses?', ['FE80::/10']],
    ['Which two statements are characteristics of routed ports on a multilayer switch? (Choose two.)​', ['In a switched network, they are mostly configured between switches at the core and distribution layers.','They are not associated with a particular VLAN.']],
    ['Successful inter-VLAN routing has been operating on a network with multiple VLANs across multiple switches for some time. When an inter-switch trunk link fails and Spanning Tree Protocol brings up a backup trunk link, it is reported that hosts on two VLANs can access some, but not all the network resources that could be accessed previously. Hosts on all other VLANS do not have this problem. What is the most likely cause of this problem?', ['The protected edge port function on the backup trunk interfaces has been disabled.']],
    ['Which command will start the process to bundle two physical interfaces to create an EtherChannel group via LACP?', ['interface range GigabitEthernet 0/4 – 5']],
    ['What action takes place when a frame entering a switch has a multicast destination MAC address?', ['The switch will forward the frame out all ports except the incoming port.']],
    ['A junior technician was adding a route to a LAN router. A traceroute to a device on the new network revealed a wrong path and unreachable status. What should be done or checked?', ['Check the configuration of the exit interface on the new static route.']],
    ['Select the three PAgP channel establishment modes. (Choose three.)', ['auto','desirable','on']],
    ['A static route has been configured on a router. However, the destination network no longer exists. What should an administrator do to remove the static route from the routing table?', ['Remove the route using the no ip route command.']],
    ['Refer to the exhibit. What can be concluded about the configuration shown on R1?', ['R1 is configured as a DHCPv4 relay agent.']],
    ['Refer to the exhibit. R1 has been configured as shown. However, PC1 is not able to receive an IPv4 address. What is the problem?​', ['The ip helper-address command was applied on the wrong interface.']],
    ['What two default wireless router settings can affect network security? (Choose two.)', ['The SSID is broadcast.','A well-known administrator password is set.']],
    ['A network administrator is adding a new WLAN on a Cisco 3500 series WLC. Which tab should the administrator use to create a new VLAN interface to be used for the new WLAN?', ['CONTROLLER']],
    ['A network administrator is configuring a WLAN. Why would the administrator change the default DHCP IPv4 addresses on an AP?', ['to reduce outsiders intercepting data or accessing the wireless network by using a well-known address range']],
    ['Which two functions are performed by a WLC when using split media access control (MAC)? (Choose two.)', ['frame translation to other protocols','association and re-association of roaming clients']],
    ['On what switch ports should BPDU guard be enabled to enhance STP stability?', ['all PortFast-enabled ports']],
    ['Which network attack is mitigated by enabling BPDU guard?', ['rogue switches on a network']],
    ['Refer to the exhibit. Router R1 has an OSPF neighbor relationship with the ISP router over the 192.168.0.32 network. The 192.168.0.36 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/0/1 100 was issued on R1 and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?​', ['Change the administrative distance to 120.']],
    ['Refer to the exhibit. What is the metric to forward a data packet with the IPv6 destination address 2001:DB8:ACAD:E:240:BFF:FED4:9DD2?', ['2682112']],
    ['A network administrator is configuring a new Cisco switch for remote management access. Which three items must be configured on the switch for the task? (Choose three.)', ['IP address','vty lines','default gateway']],
    ['Refer to the exhibit. Which statement shown in the output allows router R1 to respond to stateless DHCPv6 requests?', ['ipv6 nd other-config-flag​']],
    ['A technician is troubleshooting a slow WLAN and decides to use the split-the-traffic approach. Which two parameters would have to be configured to do this? (Choose two.)', ['Configure the 5 GHz band for streaming multimedia and time sensitive traffic.','Configure the 2.4 GHz band for basic internet traffic that is not time sensitive.']],
    ['A company has just switched to a new ISP. The ISP has completed and checked the connection from its site to the company. However, employees at the company are not able to access the internet. What should be done or checked?', ['Ensure that the old default route has been removed from the company edge routers.']],
    ['Which information does a switch use to populate the MAC address table?', ['the source MAC address and the incoming port']],
    ['Refer to the exhibit. A network administrator is reviewing the configuration of switch S1. Which protocol has been implemented to group multiple physical ports into one logical link?', ['PAgP']],
    ['Which type of static route is configured with a greater administrative distance to provide a backup route to a route learned from a dynamic routing protocol?', ['floating static route']],
    ['What action takes place when a frame entering a switch has a unicast destination MAC address appearing in the MAC address table?', ['The switch forwards the frame out of the specified port.']],
    ['The exhibit shows two PCs called PC A and PC B, two routes called R1 and R2, and two switches. PC A has the address 172.16.1.1/24 and is connected to a switch and into an interface on R1 that has the IP address 172.16.1.254. PC B has the address 172.16.2.1/24 and is connected to a switch that is connected to another interface on R1 with the IP address 172.16.2.254. The serial interface on R1 has the address 172.16.3.1 and is connected to the serial interface on R2 that has the address 172.16.3.2/24. R2 is connected to the internet cloud. Which command will create a static route on R2 in order to reach PC B?', ['R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1']],
    ['What protocol or technology allows data to transmit over redundant switch links?', ['EtherChannel']],
    ['Refer to the exhibit. Which three hosts will receive ARP requests from host A, assuming that port Fa0/4 on both switches is configured to carry traffic for multiple VLANs? (Choose three.)', ['host C','host D','host F']],
    ['Refer to the exhibit. The network administrator configures both switches as displayed. However, host C is unable to ping host D and host E is unable to ping host F. What action should the administrator take to enable this communication?', ['Configure either trunk port in the dynamic desirable mode.']],
    ['What is the effect of entering the shutdown configuration command on a switch?', ['It disables an unused port.']],['69. What would be the primary reason an attacker would launch a MAC address overflow attack?', ['so that the attacker can see frames that are destined for other hosts']],
    ['During the AAA process, when will authorization be implemented?', ['Immediately after successful authentication against an AAA data source']],
    ['A company security policy requires that all MAC addressing be dynamically learned and added to both the MAC address table and the running configuration on each switch. Which port security configuration will accomplish this?', ['sticky secure MAC addresses']],
    ['Which three Wi-Fi standards operate in the 2.4GHz range of frequencies? (Choose three.)', ['802.11b','802.11g','802.11n']],
    ['To obtain an overview of the spanning tree status of a switched network, a network engineer issues the show spanning-tree command on a switch. Which two items of information will this command display? (Choose two.)', ['The root bridge BID.','The role of the ports in all VLANs.']],
    ['Refer to the exhibit. Which trunk link will not forward any traffic after the root bridge election process is complete?', ['Trunk2']],
    ['Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?', ['SLAAC']],
    ['Which two protocols are used to provide server-based AAA authentication? (Choose two.)', ['TACACS+','RADIUS']],
    ['A network administrator is configuring a WLAN. Why would the administrator disable the broadcast feature for the SSID?', ['to eliminate outsiders scanning for available SSIDs in the area']],
    ['Which mitigation technique would prevent rogue servers from providing false IP configuration parameters to clients?', ['turning on DHCP snooping']],
    ['A network administrator configures the port security feature on a switch. The security policy specifies that each access port should allow up to two MAC addresses. When the maximum number of MAC addresses is reached, a frame with the unknown source MAC address is dropped and a notification is sent to the syslog server. Which security violation mode should be configured for each access port?', ['restrict']],
    ['What protocol or technology defines a group of routers, one of them defined as active and another one as standby?', ['HSRP']],
    ['Refer to the exhibit. After attempting to enter the configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20 report that they are unable to reach users on VLAN 30. What is causing the problem?', ['RTA is using the same subnet for VLAN 20 and VLAN 30.']],
    ['A technician is configuring a router for a small company with multiple WLANs and doesn’t need the complexity of a dynamic routing protocol. What should be done or checked?', ['Create static routes to all internal networks and a default route to the internet.']],
    ['A company is deploying a wireless network in the distribution facility in a Boston suburb. The warehouse is quite large and it requires multiple access points to be used. Because some of the company devices still operate at 2.4GHz, the network administrator decides to deploy the 802.11g standard. Which channel assignments on the multiple access points will make sure that the wireless channels are not overlapping?', ['channels 1',' 6',' and 11']],
    ['A network administrator of a small advertising company is configuring WLAN security by using the WPA2 PSK method. Which credential do office users need in order to connect their laptops to the WLAN?', ['a key that matches the key on the AP']],
    ['Refer to the exhibit. What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?', ['alternate',' designated',' root',' root']],
    ['Refer to the exhibit. Which static route would an IT technician enter to create a backup route to the 172.16.1.0 network that is only used if the primary RIP learned route fails?', ['ip route 172.16.1.0 255.255.255.0 s0/0/0 121']],
    ['What mitigation plan is best for thwarting a DoS attack that is creating a MAC address table overflow?', ['Enable port security.']],
    ['A network engineer is troubleshooting a newly deployed wireless network that is using the latest 802.11 standards. When users access high bandwidth services such as streaming video, the wireless network performance is poor. To improve performance the network engineer decides to configure a 5 Ghz frequency band SSID and train users to use that SSID for streaming media services. Why might this solution improve the wireless network performance for that type of service?', ['The 5 GHz band has more channels and is less crowded than the 2.4 GHz band',' which makes it more suited to streaming multimedia.']],
    ['Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?', ['broadcast DHCPREQUEST']],
    ['Refer to the exhibit. Which destination MAC address is used when frames are sent from the workstation to the default gateway?', ['MAC address of the virtual router']],
    ['After a host has generated an IPv6 address by using the DHCPv6 or SLAAC process, how does the host verify that the address is unique and therefore usable?', ['The host sends an ICMPv6 neighbor solicitation message to the DHCP or SLAAC-learned address and if no neighbor advertisement is returned',' the address is considered unique.']],
    ['Which protocol adds security to remote connections?', ['SSH']],
    ['Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?', ['The encapsulation dot1Q 5 command contains the wrong VLAN. ']],
    ['Refer to the exhibit. A network administrator is configuring inter-VLAN routing on a network. For now, only one VLAN is being used, but more will be added soon. What is the missing parameter that is shown as the highlighted question mark in the graphic?', ['It identifies the VLAN number.']],
    ['What network attack seeks to create a DoS for clients by preventing them from being able to obtain a DHCP lease?', ['DHCP starvation']],
    ['Refer to the exhibit. If the IP addresses of the default gateway router and the DNS server are correct, what is the configuration problem?', ['The IP address of the default gateway router is not contained in the excluded address list.']],
    ['Refer to the exhibit. A network administrator has added a new subnet to the network and needs hosts on that subnet to receive IPv4 addresses from the DHCPv4 server.What two commands will allow hosts on the new subnet to receive addresses from the DHCP4 server? (Choose two.)', ['R1(config-if)# ip helper-address 10.2.0.250','R1(config)# interface G0/0']],
    ['What protocol or technology uses source IP to destination IP as a load-balancing mechanism?', ['EtherChannel']],
    ['What protocol should be disabled to help mitigate VLAN attacks?', ['DTP']],
    ['What protocol or technology requires switches to be in server mode or client mode?', ['VTP']],
    ['What are two reasons a network administrator would segment a network with a Layer 2 switch? (Choose two.)', ['to enhance user bandwidth','to isolate traffic between segments']],
    ['What command will enable a router to begin sending messages that allow it to configure a link-local address without using an IPv6 DHCP server?', ['the ipv6 unicast-routing command']],
    ['A network administrator is using the router-on-a-stick model to configure a switch and a router for inter-VLAN routing. What configuration should be made on the switch port that connects to the router?', ['Configure the port as an 802.1q trunk port.']],
    ['What are three techniques for mitigating VLAN attacks? (Choose three.)', ['Enable trunking manually','Disable DTP.','Set the native VLAN to an unused VLAN.']],
    ['In which situation would a technician use the show interfaces switch command?', ['when packets are being dropped from a particular directly attached host']],
    ['What is a drawback of the local database method of securing device access that can be solved by using AAA with centralized servers?', ['User accounts must be configured locally on each device',' which is an unscalable authentication solution.']],
    ['What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?', ['It sends a DHCPREQUEST that identifies which lease offer the client is accepting.']],
    ['Refer to the exhibit. The network administrator is configuring the port security feature on switch SWC. The administrator issued the command show port-security interface fa 0/2 to verify the configuration. What can be concluded from the output that is shown? (Choose three.)', ['This port is currently up.','Security violations will cause this port to shut down immediately.','The switch port mode for this interface is access mode.']],
    ['What method of wireless authentication is dependent on a RADIUS authentication server?', ['WPA2 Enterprise']],
    ['A network administrator has found a user sending a double-tagged 802.1Q frame to a switch. What is the best solution to prevent this type of attack?', ['The VLANs for user access ports should be different VLANs than any native VLANs used on trunk ports.']],
    ['Refer to the exhibit. Which two conclusions can be drawn from the output? (Choose two.)', ['The EtherChannel is down.','The port channel ID is 2.']],
    ['On a Cisco 3504 WLC Summary page ( Advanced &gt; Summary ), which tab allows a network administrator to configure a particular WLAN with a WPA2 policy?', ['WLANs']],
    ['Refer to the exhibit. A network engineer is configuring IPv6 routing on the network. Which command issued on router HQ will configure a default route to the Internet to forward packets to an IPv6 destination network that is not listed in the routing table?​', ['ipv6 route ::/0 serial 0/1/1']],
    ['Users are complaining of sporadic access to the internet every afternoon. What should be done or checked?', ['Check the statistics on the default route for oversaturation.']],
    ['What action takes place when the source MAC address of a frame entering a switch appears in the MAC address table associated with a different port?', ['The switch replaces the old entry and uses the more current port.']],
    ['A network administrator is configuring a WLAN. Why would the administrator use a WLAN controller?', ['to facilitate group configuration and management of multiple WLANs through a WLC']],
    ['Refer to the exhibit. A network administrator configures R1 for inter-VLAN routing between VLAN 10 and VLAN 20. However, the devices in VLAN 10 and VLAN 20 cannot communicate. Based on the configuration in the exhibit, what is a possible cause for the problem?', ['B. The encapsulation is misconfigured on a subinterface.']],
    ['A network administrator uses the spanning-tree portfast bpduguard default global configuration command to enable BPDU guard on a switch. However, BPDU guard is not activated on all access ports. What is the cause of the issue?', ['PortFast is not configured on all access ports.']],
    ['Which two types of spanning tree protocols can cause suboptimal traffic flows because they assume only one spanning-tree instance for the entire bridged network? (Choose two.)', ['RSTP','STP']],
    ['Refer to the exhibit. A network administrator is configuring the router R1 for IPv6 address assignment. Based on the partial configuration, which IPv6 global unicast address assignment scheme does the administrator intend to implement?', ['stateful']],
    ['A WLAN engineer deploys a WLC and five wireless APs using the CAPWAP protocol with the DTLS feature to secure the control plane of the network devices. While testing the wireless network, the WLAN engineer notices that data traffic is being exchanged between the WLC and the APs in plain-text and is not being encrypted. What is the most likely reason for this?', ['Although DTLS is enabled by default to secure the CAPWAP control channel',' it is disabled by default for the data channel.']],
    ['A new switch is to be added to an existing network in a remote office. The network administrator does not want the technicians in the remote office to be able to add new VLANs to the switch, but the switch should receive VLAN updates from the VTP domain. Which two steps must be performed to configure VTP on the new switch to meet these conditions? (Choose two.)', ['Configure the new switch as a VTP client.','Configure the existing VTP domain name on the new switch.']],
    ['Refer to the exhibit. Consider that the main power has just been restored. PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward this request?​', ['to Fa0/1',' Fa0/2',' and Fa0/3 only']],
    ['What action takes place when the source MAC address of a frame entering a switch is not in the MAC address table?', ['The switch adds the MAC address and incoming port number to the table.']],
    ['Employees are unable to connect to servers on one of the internal networks. What should be done or checked?', ['Use the “show ip interface brief” command to see if an interface is down.']],
    ['What is the effect of entering the ip dhcp snooping configuration command on a switch?', ['It enables DHCP snooping globally on a switch.']],
    ['An administrator notices that large numbers of packets are being dropped on one of the branch routers. What should be done or checked?', ['Check the routing table for a missing static route.']],
    ['What are two switch characteristics that could help alleviate network congestion? (Choose two.)', ['fast internal switching','large frame buffers']],
    ['What is a result of connecting two or more switches together?', ['The size of the broadcast domain is increased.']],
    ['Branch users were able to access a site in the morning but have had no connectivity with the site since lunch time. What should be done or checked?', ['Use the “show ip interface brief” command to see if an interface is down.']],
    ['What is the effect of entering the switchport port-security configuration command on a switch?', ['It enables port security on an interface.']],
    ['A network administrator is configuring a WLAN. Why would the administrator use multiple lightweight APs?', ['to facilitate group configuration and management of multiple WLANs through a WLC']],
    ['Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?', ['The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk.']],
    ['A network administrator is configuring a WLAN. Why would the administrator use RADIUS servers on the network?', ['to restrict access to the WLAN by authorized',' authenticated users only']],
    ['What is the effect of entering the switchport mode access configuration command on a switch?', ['It disables DTP on a non-trunking interface.']],
    ['A network administrator has configured a router for stateless DHCPv6 operation. However, users report that workstations are not receiving DNS server information. Which two router configuration lines should be verified to ensure that stateless DHCPv6 service is properly configured? (Choose two.)', ['The dns-server line is included in the <code>ipv6 dhcp pool</code> section.','The <code>ipv6 nd other-config-flag</code> is entered for the interface that faces the LAN segment.']],
    ['A network administrator is configuring a WLAN. Why would the administrator disable the broadcast feature for the SSID?', ['to eliminate outsiders scanning for available SSIDs in the area']],
    ['Refer to the exhibit. An administrator is attempting to install an IPv6 static route on router R1 to reach the network attached to router R2. After the static route command is entered, connectivity to the network is still failing. What error has been made in the static route configuration?', ['The interface is incorrect.']],
    ['What action takes place when a frame entering a switch has a unicast destination MAC address that is not in the MAC address table?', ['The switch will forward the frame out all ports except the incoming port.']],
    ['A junior technician was adding a route to a LAN router. A traceroute to a device on the new network revealed a wrong path and unreachable status. What should be done or checked?', ['Check the configuration of the exit interface on the new static route.']],
    ['What is the effect of entering the ip arp inspection vlan 10 configuration command on a switch?', ['It enables DAI on specific switch interfaces previously configured with DHCP snooping.']],
    ['What protocol or technology manages trunk negotiations between switches?', ['DTP']],
    ['A network administrator is configuring a WLAN. Why would the administrator apply WPA2 with AES to the WLAN?', ['to provide privacy and integrity to wireless traffic by using encryption']],
    ['Users on a LAN are unable to get to a company web server but are able to get elsewhere. What should be done or checked?', ['Verify that the static route to the server is present in the routing table.']],
    ['What IPv6 prefix is designed for link-local communication?', ['fe80::/10']],
    ['What is the effect of entering the <code>ip dhcp snooping limit rate 6</code> configuration command on a switch?', ['It restricts the number of discovery messages',' per second',' to be received on the interface.']],
    ['A network administrator is configuring a WLAN. Why would the administrator change the default DHCP IPv4 addresses on an AP?', ['to reduce outsiders intercepting data or accessing the wireless network by using a well-known address range']],
    ['What is the effect of entering the ip arp inspection validate src-mac configuration command on a switch?', ['It checks the source L2 address in the Ethernet header against the sender L2 address in the ARP body.']],
    ['What protocol or technology is a Cisco proprietary protocol that is automatically enabled on 2960 switches?', ['DTP']],
    ['What address and prefix length is used when configuring an IPv6 default static route?', ['::/0']],
    ['What are two characteristics of Cisco Express Forwarding (CEF)? (Choose two.)', ['This is the fastest forwarding mechanism on Cisco routers and multilayer switches.','Packets are forwarded based on information in the FIB and an adjacency table.']],
    ['Which term describes the role of a Cisco switch in the 802.1X port-based access control?', ['authenticator']],
    ['Which Cisco solution helps prevent ARP spoofing and ARP poisoning attacks?', ['Dynamic ARP Inspection']],
    ['What is an advantage of PVST+?', ['PVST+ optimizes performance on the network through load sharing.']],
    ['What protocol or technology uses a standby router to assume packet-forwarding responsibility if the active router fails?', ['HSRP']],
    ['What is the effect of entering the show ip dhcp snooping binding configuration command on a switch?', ['It displays the IP-to-MAC address associations for switch interfaces.']],
    ['What action takes place when the source MAC address of a frame entering a switch is in the MAC address table?', ['The switch updates the refresh timer for the entry.']],
    ['A small publishing company has a network design such that when a broadcast is sent on the LAN, 200 devices receive the transmitted broadcast. How can the network administrator reduce the number of devices that receive broadcast traffic?', ['Segment the LAN into smaller LANs and route between them.*']],
    ['What defines a host route on a Cisco router?', ['An IPv4 static host route configuration uses a destination IP address of a specific device and a /32 subnet mask.']],
    ['What else is required when configuring an IPv6 static route using a next-hop link-local address?', ['interface number and type']],
    ['A technician is configuring a wireless network for a small business using a SOHO wireless router. Which two authentication methods are used, if the router is configured with WPA2? (Choose two.)', ['personal','enterprise']],
    ['Which mitigation technique would prevent rogue servers from providing false IPv6 configuration parameters to clients?', ['enabling DHCPv6 Guard']],
    ['A PC has sent an RS message to an IPv6 router attached to the same network. Which two pieces of information will the router send to the client? (Choose two.)', ['prefix length','prefix']],
    ['While attending a conference, participants are using laptops for network connectivity. When a guest speaker attempts to connect to the network, the laptop fails to display any available wireless networks. The access point must be operating in which mode?', ['active']],
    ['Which three components are combined to form a bridge ID?', ['extended system ID','bridge priority','MAC address']]
];