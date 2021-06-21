let date = new Date();
let hours = date.getHours();

greeting = document.getElementById('greetings');

console.log(greeting);

console.log(hours);

if (hours < 12){
  greeting.textContent = "Bom dia!";
} else if (hours < 20){
  greeting.textContent = 'Boa tarde!';
} else if (hours < 24){
  greeting.textContent = "Boa noite!"
} else {
  greeting.textContent = "olá!";
}
