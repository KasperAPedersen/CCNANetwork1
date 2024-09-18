
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

    // Static Route
    ['StaticRouteIp', 'ip'],
    ['StaticRouteSubnet', 'subnet'],
    ['StaticRouteDest', 'dest'],

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
    let container = elem.parentElement.getElementsByTagName('div');
    container[0].style.display = container[0].style.display == "block" ? "none" : "block";
    
    if(container[0].style.display == 'block') saveToClipboard(elem.parentElement.getElementsByTagName('div')[0]);
}

function setValue(c, v) {
    for(let i = 0; i < c.length; i++) {
        let tmp = DOMPurify.sanitize(v.value);
        console.log(tmp);
        console.log(v.value);
        c[i].innerHTML = tmp;
    }

    navigator.clipboard.writeText(v.parentElement.parentElement.getElementsByTagName('p')[0].innerText);
}

function setListener(formField, resultField){
    formField.addEventListener('input', () => {
        let par = formField.parentElement.parentElement;
        let children = par.getElementsByClassName(resultField);
        
        setValue(children, formField);
    })
}

function saveToClipboard(elem) {
    navigator.clipboard.writeText(elem.getElementsByTagName('p')[0].innerText);
}

for(let i = 0; i < listenArr.length; i++) {
    let elem = document.getElementById(listenArr[i][0]);
    setListener(elem, listenArr[i][1]);
}
