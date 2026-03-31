let form = document.querySelector("#form");
let email = document.querySelector("#email");
let password =document.querySelector("#password");
form.addEventListener("submit",function(event){
    event.preventDefault();
    document.querySelector(".error").textContent = "";
    document.querySelector(".error2").textContent = "";
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    if(!emailans){
        let small = document.querySelector(".error");
        small.textContent = "Please Enter a Valid Email ";
    }
    if(!passwordAns){
        let small = document.querySelector(".error2");
        small.textContent = "Please Enter a Valid Password";
    }

});

