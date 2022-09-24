function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    }
function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }


  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

 function validateUName(e){
  var pattern =  /^(?=.*[A-Z])(?=.*\d).*$/;
        if (!document.forms["rform"]["uname"].value.match(pattern)) {
            y = document.getElementById("unameerror").innerHTML= "Invalid Username";
            return;
        }
        else {
            y = document.getElementById("unameerror").innerHTML= ""

        }
 }   
   
   
 function validateEmail(e){
        
        var mailformat =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       	
       	if (document.forms["rform"]["groupmail"].value == "") {
            document.getElementById("mailerror").innerHTML= "Required";
        }
        else if (!document.forms["rform"]["groupmail"].value.match(mailformat)) {
            document.getElementById("mailerror").innerHTML= "Incorrect Email Format!!!";
        }
        else {
            document.getElementById("mailerror").innerHTML= ""
        }
 }  
 
 
 
  function validatePassword(e){
  	if(document.forms["rform"]["pswd"].value == '')
    	{
        	document.getElementById("pswderror").innerHTML= "Required"
    	}
    	else
    	{
        	document.getElementById("pswderror").innerHTML= "";
    	}
  
     	if(document.forms["rform"]["pswd"].value != document.forms["rform"]["cpswd"].value)
    	{
        	document.getElementById("mismatcherror").innerHTML= "Password Mismatch!!!"
    	}
    	else
    	{
        	document.getElementById("mismatcherror").innerHTML= "";
    	}
 }  
   
 function validateManagerName(e) {
        if (document.forms["rform"]["mname"].value == "") {
            y = document.getElementById("mnameerror").innerHTML= "required";

        }
        else {
            y = document.getElementById("mnameerror").innerHTML= ""
        }       
  }
  
  
function FormSubmit(e) {
    	e.preventDefault();
    	
    	let details='';
    	
    	details+="Name:"+document.forms["rform"]["mname"].value+'\n';
    	details+="Email:"+document.forms["rform"]["groupmail"].value+'\n';
    	details+="Username:"+document.forms["rform"]["uname"].value+'\n';
    	details+="Team Lead:"+document.forms["rform"]["teamlead"].options[document.forms["rform"]["teamlead"].selectedIndex].text+'\n';
    	details+="Team Members:";
    	
    	let element1=document.getElementById('div1');
    	for (let i = 0; i < element1.childElementCount; i++) {
  		details+=element1.childNodes[i].innerText;
  		if (i < element1.childElementCount-1)
  			details+=',';
	}
    	
    	alert(details);
     
  }
