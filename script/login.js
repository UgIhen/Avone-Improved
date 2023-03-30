function getTotalz (dd) {
    dd.preventDefault();
    // collecting userdata
    let userem = (document.getElementById("userem").value); 
    let userpa = (document.getElementById("userpa").value); 
    
    // get regular expressions (regex)
    let checkuem = /^[\w\.]{2,}(@)[a-zA-Z]{2,}(.)[A-Za-z]{2,3}(.)[a-zA-Z]{2,3}$/;
    let checkupa = /^[\w\ \W]{6,}$/; 
    let loginspaceok = " "; 
    let loginspacenotok = "Incorrect Username or Password"
    

    let output2 = 
    (checkuem.test(userem) == true && userem !== "") 
    ? loginspaceok
    : loginspacenotok;
    document.getElementById("demose").innerHTML = output2; 
    
    let output4 = 
    (checkupa.test(userpa) == true && userpa !== "")
    ? loginspaceok
    : loginspacenotok;
    document.getElementById("demose1").innerHTML = output4;


    if(checkuem.test(userem) == true && userem !== "" && 
    checkupa.test(userpa) == true && userpa !== "")
	  {
	  window.open("avone.html");
	  }
    else 
    {
        alert("Invalid Details")
    }
  }