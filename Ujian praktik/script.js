function Login(){let password=document.getElementById("password").value; 
let email=document.getElementById("email").value;
if (email== "admin" && password == "admin"){
    window.alert("Login Berhasil");
    window.location=("cv.html");}
    else{window.alert("Login Gagal");}}
    function Signup(){let password=document.getElementById("password").value; 
    let email=document.getElementById("email").value;
    if (email== "admin" && password == "admin"){
        window.alert("Sign Up Berhasil");
        window.location=("cv.html");}
        else{window.alert("Sign Up Gagal");}}