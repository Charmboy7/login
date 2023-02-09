function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value
if (username=="bff" && password=="TomJerry")
{
    alert("login successfull");
    return false;
}
else
{
    alert("login failed");
}
}