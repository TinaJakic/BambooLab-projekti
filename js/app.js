$(document).foundation()
function Provjera(inputtxt) 
{ 
var lozinka = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(lozinka)) 
{ 
alert('Vaša je lozinka vjerojatno snažna i dobro ste osigurani.')
return true;
}
else
{ 
alert('Vaša je lozinka vjerojatno slaba i vrijeme je za promjenu. Možda je samo preduga ili prekratka.')
return false;
}
}
