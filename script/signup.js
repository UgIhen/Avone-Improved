function getTotalz (dd) {
    dd.preventDefault();
    // collecting userdata
    let userfna = (document.getElementById("userfna").value);
    let userlna = (document.getElementById("userlna").value);
    let userem = (document.getElementById("userem").value);  
    let userpa = (document.getElementById("userpa").value); 
    let usercp = (document.getElementById("usercp").value);  
    
    // get regular expressions (regex)
    let checkuserfna = /^[a-zA-Z\ 0-9]{3,}$/;
    let checkulna = /^[a-zA-Z\ 0-9]{3,}$/;
    let checkuem = /^[\w\.]{2,}(@)[a-zA-Z]{2,}(.)[A-Za-z]{2,3}(.)[a-zA-Z]{2,3}$/;
    let checkupa = /^[\w\ \W]{6,}$/; 
    let loginspaceok = " ";
    let loginspacenotok = "invalid input";

    let output1 = 
    (checkuserfna.test(userfna) == true && userfna !== "")
    ? loginspaceok
    : loginspacenotok;
    document.getElementById("demose").innerHTML = output1; 
    
    let output2 = 
    (checkulna.test(userlna) == true && userlna !== "")
    ? loginspaceok
    : loginspacenotok;
    document.getElementById("demose1").innerHTML = output2; 
    
    let output3 = 
    (checkuem.test(userem) == true && userem !== "") 
    ? loginspaceok
    : loginspacenotok;
    document.getElementById("demose2").innerHTML = output3; 
    
    let output4 = 
    (checkupa.test(userpa) == true && userpa !== "")
    ? loginspaceok
    : loginspacenotok;
    document.getElementById("demose3").innerHTML = output4; 
    
    let output5 = 
    (usercp === userpa) == true && usercp !== ""
    ? loginspaceok
    : "password don't match";
    document.getElementById("demose4").innerHTML = output5;  



	if(checkuserfna.test(userfna) == true && userfna !== "" && 
    checkulna.test(userlna) == true && userlna !== "" && 
    checkuem.test(userem) == true && userem !== "" && 
    checkupa.test(userpa) == true && userpa !== "" && 
    (usercp === userpa) == true && usercp !== "")
	{
    alert("Account created successfully")
	window.open("../Project2/login.html");
	}
    else 
    {
        alert("Invalid Details")
    }
   
    
}