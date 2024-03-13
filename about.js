console.log("hello world");

function handleSubmit(evt) {
    evt.preventDefault();
    alert('Form submitted successfully!');
}

function giveCompliment() {
    alert('You are looking great today!');
}

let form = document.querySelector('#contact');
let duckImage = document.querySelector('#duck-image');

form.addEventListener('submit', handleSubmit);

duckImage.addEventListener('mouseover', giveCompliment);
// can i just say i hate the mouseover event and function alert in a combo together! It should be a click or if its a mouseover it should use a dropdown not an alert lol. anyway thank you for coming to my ted talk







