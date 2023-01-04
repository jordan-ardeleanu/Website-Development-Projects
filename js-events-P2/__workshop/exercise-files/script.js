const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const termsAccepted = document.getElementById("termsOfService");
const error = document.getElementById("error");
const submit = document.getElementById("submit");
const passage = document.createElement("p");



const validateForm = (event) => {
    event.preventDefault();
    let passwordEntered = password.value;
    let confirmedEntered = confirmPassword.value;
    let flag = 0;
    if (!(passwordEntered == confirmedEntered))
    {
        passage.innerText = "Your passwords didn't match! Please provide the same password in each field."
        error.style.display = "block";
        failedValidation(confirmPassword);
        confirmPassword.focus();
        error.appendChild(passage);
    }else if(passwordEntered.length < 10)
    {
        passage.innerText = "Your password is too short! Please provide a password that is 10 characters long."
        error.style.display = "block";
        failedValidation(password);
        password.focus();
        error.appendChild(passage);
    }else if(!termsAccepted.checked)
    {
        window.alert("You must agree to the terms before continuing.");
    }else
    {
        window.alert("Success.");
    }
}

function failedValidation(failed){
    confirmPassword.classList.remove("failedValidation");
    password.classList.remove("failedValidation");
    failed.classList.add("failedValidation")
}

form.addEventListener("submit", validateForm);