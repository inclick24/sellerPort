function save()
{
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let secreteKey = document.getElementById("secreteKey").value
   
    if(name != '' && typeof name !='undefined' && email != '' && typeof email !='undefined' && phone != '' && typeof phone !='undefined' && secreteKey != '' && typeof secreteKey !='undefined') 
    {
        let param = 'name='+name+'&email='+email+'&phone='+phone+'&secrete='+secreteKey;
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() 
        {
            if(this.readyState == 4 && this.status == 200) 
            {
                let message = this.responseText;
              
                message =JSON.parse(message);
                if(message.status)
                {
                    alert(message.message);
                    location.replace("../html/BusinessInformation.html");
                }
                else
                {
                    alert('Invalide OTP!');
                }
            }
        }
        xmlHttp.open("GET","../php/ajax_user.txt",true);
        xmlHttp.send(param);
    }
    else
    {
        alert("Enter value");
    }
} 