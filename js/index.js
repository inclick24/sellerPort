function sendOTP()
{
    let mobilenumber = document.getElementById("mobileNumber").value
    if(mobilenumber != '' &&typeof mobilenumber !='undefined') 
    {
        let param = 'mobilenumber='+mobilenumber;
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() 
        {
            if(this.readyState == 4 && this.status == 200)
            {
                let message = this.responseText;
                message =JSON.parse(message);
                if(mobilenumber === message.message+'')
                {
                    alert("register successfully");
                    location.replace("../html/index1.html");
                }
                else
                {
                    alert('Invalide OTP!');
                }
            }
        }
        xmlHttp.open("GET","../php/ajax_index.txt",true);
        xmlHttp.send(param);
    }
    else
    {
        alert("Enter value");
    }
}