let name=document.getElementById("name");
let pwd=document.getElementById("pwd")
function validate()
{
if((name.value=="admin") && (pwd.value=="1234"))
{
    return true;
}
else
{
    return false;
}
}
