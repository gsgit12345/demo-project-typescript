console.log("literal type example");

let direction:'left' | 'right' | 'west'; //this is union 

let ans: 'yes' | 'no'; //this is alos union


function switchRole(role: 'admin' | 'developer' | 'readwrite')
{
    switch(role)
    {
    case  'admin':
       console.log("admin role");
       break;
     case  'developer':
       console.log("developer role");
       break;
     case 'readwrite' : 
       console.log("readwrite");
       break;
      default:
          console.log("unknown error message");

         
    }
       
}


switchRole('readwrite');