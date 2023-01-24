function generateEmail(form){
    document.getElementById("email").innerHTML =
    form.elements["first"].value + "." +
    form.elements["last"].value + "@gmail.com";
    form.reset();
    form.elements["first"].focus();
}