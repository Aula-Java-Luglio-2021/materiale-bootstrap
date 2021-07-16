
			function validazioneDati()
			{
				var inserito = "";			
                var boolUser = true, boolEmail = true;
                
                //Username
                regex=/^[a-zA-Z_'-]+$/;
				inserito = document.getElementById("input-user").value;
				if(inserito === "")
				{
					document.getElementById("input-user").style.backgroundColor = "#d63031";
                    document.getElementById("user-small").innerHTML = "Username e' un campo obbligatorio!";
                    boolUser = false;
				}
                else if(!regex.test(inserito)){
                    document.getElementById("user-small").innerHTML="Inserire solo caratteri alfanumerici minuscoli, compresi _ e -";   
                    document.getElementById("input-user").style.backgroundColor="red";
                    boolUser = false;
                }
                else if(inserito.length<3 || inserito.length>15){
                    document.getElementById("user-small").innerHTML="Inserire un nome di lunghezza compresa tra 3-15 caratteri";   
                    document.getElementById("input-user").style.backgroundColor="red";
                    boolUser = false;
                }
                
                //Email
                regexEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
                inserito = document.getElementById("input-email").value;
               	if(inserito === "")
				{
					document.getElementById("input-email").style.backgroundColor = "#d63031";
                    document.getElementById("email-small").innerHTML = "Email e' un campo obbligatorio!";
                    boolEmail = false;
				}
                else if(!regexEmail.test(inserito)){
                    document.getElementById("email-small").innerHTML="Il pattern nome@email.com non e' rispettato!";   
                    document.getElementById("input-email").style.backgroundColor="red";
                    boolEmail = false;
                }
                
                if(boolUser && boolEmail)
                {
                    return true;
                }
                
                else
                {
                    return false;
                }
			}
           
			document.getElementById("button-login").onclick = function()
            {
				if(validazioneDati())
                {
                    document.getElementById("form").submit();
                }
			}
            
            
            document.getElementById("input-user").onclick = function()
            {
                inserito = document.getElementById("input-user").value;
                if(inserito === "")
				{
					document.getElementById("input-user").style.backgroundColor = "white";
                    document.getElementById("user-small").innerHTML = "";
				}
                else if(!regex.test(inserito)){
                    document.getElementById("user-small").innerHTML="";
                    document.getElementById("input-user").style.backgroundColor="white";
                }
                else if(inserito.length<3 || inserito.length>15){
                    document.getElementById("user-small").innerHTML="";
                    document.getElementById("input-user").style.backgroundColor="white";
                }
            }
            
            
            document.getElementById("input-email").onclick = function()
            {
                inserito = document.getElementById("input-email").value;
                if(inserito === "")
				{
					document.getElementById("input-email").style.backgroundColor = "white";
                    document.getElementById("email-small").innerHTML = "";
				}
                else if(!regexEmail.test(inserito)){
                    document.getElementById("email-small").innerHTML="";
                    document.getElementById("input-email").style.backgroundColor="white";
                }
            }		
        
  