console.log("literal type example");
var direction; //this is union 
var ans; //this is alos union
function switchRole(role) {
    switch (role) {
        case 'admin':
            console.log("admin role");
            break;
        case 'developer':
            console.log("developer role");
            break;
        case 'readwrite':
            console.log("readwrite");
            break;
        default:
            console.log("unknown error message");
    }
}
switchRole('readwrite');
