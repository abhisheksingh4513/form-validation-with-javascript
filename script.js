const form=document.getElementById("form");
const username=document.getElementById("Username");
const email=document.getElementById("Email")
const password=document.getElementById("Password");
const cpassword=document.getElementById("Confirm-Password");
const submit=document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    ValidateInputs();
})

const ValidateInputs=()=>{
    const usernameValue = username.value.trim();

    const emailvalue=email.value.trim();

    const passwordvalue=password.value.trim();
    
    const cpasswordvalue=cpassword.value.trim();

if(usernameValue === ''){
    setError(username,'Username is required?');
}
else{
    setSuccess(username);
}

if(emailvalue === ''){
    setError(email,'Email is required');
}
else if(!isValidEmail(emailvalue)){
    setError(email,'please provide a valid email');
}else{
    setSuccess(email);
}

if(passwordvalue===''){
    setError(password,'Password is required');
}
else if(passwordvalue.length<8){
    setError(password,'Password must be atleast 8 character.')
}
else{
    setSuccess(password);
}

if(cpasswordvalue===''){
    setError(cpassword,'please confirm your password');
}
else if(cpasswordvalue!=passwordvalue){
    setError(password,"password doesn't match try again");
}
else{
    setSuccess(cpassword);
}

}
const setError=(element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

 const setSuccess=element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
 }
 function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

 }