let formDNI = document.getElementById('FormDNI');
let dniInput = document.querySelector('#dni');
let resultadoDiv = document.querySelector('#resultado');

if (formDNI !== null) {
    formDNI.addEventListener('submit', function(event) {
        
  event.preventDefault();


  let dni = dniInput.value;

  if (!/^[0-9]{1,8}$/.test(dni)) {
    alert('Por favor, introduce un número válido de hasta 8 cifras.');
    return;
  }


  let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  let resto = dni % 23;
  let letra = letras.charAt(resto);


  resultadoDiv.textContent = 'La letra de tu DNI es: ' + letra;
    });
}