const form  = document.getElementById('main-form');

form.addEventListener('submit', function(e){
alert("your form has been submitted");
e.preventDefault();
});