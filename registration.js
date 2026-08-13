document.getElementById("regForm").addEventListener("submit", function(event){

    event.preventDefault();

    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let father=document.getElementById("father").value;
    let mother=document.getElementById("mother").value;
    let dob=document.getElementById("dob").value;
    let qualification=document.getElementById("qualification").value;
    let board=document.getElementById("board").value;
    let percentage=document.getElementById("percentage").value;
    let photo=document.getElementById("photo").value;
    let signature=document.getElementById("signature").value;

    let gender=document.querySelector('input[name="gender"]:checked');

    if(fname=="" || lname=="" || father=="" || mother=="" ||
       dob=="" || qualification=="" || board=="" ||
       percentage=="" || photo=="" || signature==""){
        alert("Please fill all fields.");
        return;
    }

    if(gender==null){
        alert("Please select gender.");
        return;
    }

    document.getElementById("result").innerHTML=
    "<h3>Registration Successful!</h3>" +
    "<p><b>First Name:</b> "+fname+"</p>"+
    "<p><b>Last Name:</b> "+lname+"</p>"+
    "<p><b>Father Name:</b> "+father+"</p>"+
    "<p><b>Mother Name:</b> "+mother+"</p>"+
    "<p><b>Date of Birth:</b> "+dob+"</p>"+
    "<p><b>Gender:</b> "+gender.value+"</p>"+
    "<p><b>Qualification:</b> "+qualification+"</p>"+
    "<p><b>Board:</b> "+board+"</p>"+
    "<p><b>Percentage:</b> "+percentage+"%</p>";
});