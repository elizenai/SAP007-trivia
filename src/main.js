function checar1() {

  var elemento = document.getElementById("resposta1");
    elemento.innerHTML = "A resposta correta é: 6 meses";
  var radio = document.querySelector('input[name="resposta1"]:checked').value;
    alert(radio);
  }

  function checar2() {

  var elemento = document.getElementById("resposta2");
  elemento.innerHTML = "A resposta correta é: JavaScript, HTML, CSS e frameworks";
  var radio = document.querySelector('input[name="resposta2"]:checked').value;
  alert(radio);
}
