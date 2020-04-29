var checkButton = document.getElementById("form");
checkButton.addEventListener("submit", formSubmit);
// $("#check").click((event) => {
//   alert("HG");
//   event.preventDefault();
//   checkDate(document.getElementById("email").val());
// });

function formSubmit(event) {
  event.preventDefault();
  const Regex = /0|1|2|3/;
  input = document.getElementById("email").value;
  console.dir(input);
  alert(`El texto ingresado es: ${input}`);
  Regex.test(input.toString()) ? alert("Ombe si") : alert("Ombe no");
}
