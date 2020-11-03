function submit()
{
  let business = document.getElementById("businessName").value
  let register = document.getElementById("registrationNo").value
  let businessmail = document.getElementById("businessMail").value
  let address = document.getElementById("address").value
  let pincode = document.getElementById("pinCode").value
  let website = document.getElementById("Website").value
  let opentime = document.getElementById("openTime").value
  let closetime = document.getElementById("closeTime").value
  if(business != '' && typeof business !='undefined' && register != '' && typeof register !='undefined' && businessmail != '' && typeof businessmail !='undefined' && address != '' && typeof address !='undefined' && pincode != '' && typeof pincode !='undefined' && website != '' && typeof website !='undefined' && opentime != '' && typeof opentime !='undefined' && closetime != '' && typeof closetime !='undefined') 
  {
    let param = 'business='+business+'&register='+register+'&businessmail='+businessmail+'&address='+address+'&pincode='+pincode+'&website='+website+'&opentime='+opentime+'&closetime='+closetime;
    let xmlHttp = new XMLHttpRequest(); // Create Object of XMLHttpRequest 
    xmlHttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
        let name = this.responseText;
        name =JSON.parse(name);
        if(name.status)
        {
          alert(name.name);
          location.replace("../html/Dashboard.html");
        }
        else
        {
          alert('Invalide OTP!');
        }  
      }
    }
    //  GET , POST, DELETE, PUT, PATCH
    xmlHttp.open("GET", "../php/ajax_user.txt", true); // Method, 'url'
    // Send Request
    xmlHttp.send(param);
  } 
  else
  {
      alert("Enter valid value");
  }
}