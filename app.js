//preguntar si quiere jugar

var gameplay = prompt ('¿Quieres jugar?');
// si dice que si mandarle la primera pregunta
if (gameplay == ('Si')) {
  var firstQuestion = prompt('¿Cómo se llama la última película de Guillermo del Toro?');
}
if (firstQuestion == ('La forma del agua')) {
  // Si contesta correctamente mandarle la segunda pregunta
  var secondQuestion = prompt ('¿Quién dirige "Baby Driver"?')
}
if (secondQuestion == ('Edgar Wright')) {
  // Si contesta correctamente la tercera pregunta
  var thirdQuestion = prompt ('¿Quién es el último villano de Avengers?')
}
if (thirdQuestion == ('Thanos')) {
  alert('Veamos tus resultados')
}
