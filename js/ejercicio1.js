let formConducir = document.querySelector('#FormConducir');
let nombreInput = document.querySelector('#nombre');
let edadInput = document.querySelector('#edad');
let mensajeDiv = document.querySelector('#mensaje');

formConducir.addEventListener('submit', function(event) {
  event.preventDefault();

  let nombre = nombreInput.value;
  let edad = parseInt(edadInput.value);

  if (edad >= 18) {
    mensajeDiv.textContent = nombre + ", eres mayor de edad y puedes conducir.";
  } else {
    mensajeDiv.textContent = nombre + ", eres menor de edad y no puedes conducir.";
  }
});