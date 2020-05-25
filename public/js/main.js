var checkDate = document.getElementById("fecha"); 
var checkTwitter = document.getElementById("twitter");
checkDate.addEventListener("submit", DateSubmit);
checkTwitter.addEventListener("submit", twitterSubmit);

function twitterSubmit(event) {
  event.preventDefault();
  const TwitterRegex = new RegExp("^@([A-Za-z0-9]|[-]|[_])+$");
  const input = document.getElementById("twitter-input").value.toString();
  TwitterRegex.test(input)
    ? Swal.fire({
      icon: 'success',
      title: 'Twitter handle valido',
      text: 'El formato es @ seguido de caracteres alfanumericos '
    })
    :Swal.fire({
      icon: 'error',
      title: 'Twitter handle invalido',
      text: 'El formato es @ seguido de caracteres alfanumericos '
    })
}

function DateSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("fecha-input").value.toString();
  let DateRegex = new RegExp("^(0[1-9]|[1-2][0-9]|[3][0-1])\/(0[1-9]|[1][0-2])\/(0000|000[1-9]|00[1-9][0-9]|0[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$");
  if(input.split("/")[1]){
  if (Number(input.split("/")[1].substr(1))%2==0 && (Number(input.split("/")[1].substr(1))!==8)) DateRegex = new RegExp("^(0[1-9]|[1-2][0-9]|[3][0])\/(0[1-9]|[1][0-2])\/(0000|000[1-9]|00[1-9][0-9]|0[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$");
  if (input.split("/")[1]=='02') DateRegex = new RegExp("^(0[1-9]|[1-2][0-8])\/(0[1-9]|[1][0-2])\/(0000|000[1-9]|00[1-9][0-9]|0[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$");
  }
  DateRegex.test(input) ? Swal.fire({
    icon: 'success',
    title: 'Fecha valida',
    text:'El formato es Dia(dos digitos)/mes(dos digitos)/año(cuatro digitos)',
   
  }) : Swal.fire({
    icon: 'error',
    title: 'Fecha invalida',
    text:'El formato es Dia(dos digitos)/mes(dos digitos)/año(cuatro digitos)',
  })
}
