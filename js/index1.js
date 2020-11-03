function sendOTP()
{
    let mobileNumber = document.getElementById("mobile-no").value
    if(mobileNumber != '' &&typeof mobileNumber != 'undefined' ){ 
     let param = 'mobileNumber='+mobileNumber; 
    let xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) 
      {
          alert('OTP Send on your Mobile Number');
          document.getElementById("number-section").style.display = "none";
          document.getElementById("otp-section").style.display="block";  
      }

    }
    xmlHttp.open('GET','../php/otp_ajax.txt',true);
    xmlHttp.send(param);

    }
    else{
        alert('Enter Mobile Number.');
    }
    
   
}


function verifyOTP()
{
    let enterOtp = document.getElementById("otp-input").value
    if(enterOtp != '' &&typeof enterOtp !='undefined') {
    let param = 'enterOtp='+enterOtp; 
    let xmlHttp =new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200)
         {
            let code = this.responseText;
            code =JSON.parse(code);
            if(enterOtp === code.code+'')
            {
                alert("register successfully");
                location.replace("../html/userInformation.html");
            }
            else{
                    alert('Invalide OTP!');
            }
         }
        
    }
        xmlHttp.open("GET","../php/otp_ajax.txt",true);
        xmlHttp.send(param);
    }
    else
    {
        alert("Enter verification code");
    }
}

