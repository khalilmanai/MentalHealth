const sender = document.getElementById("send");
const nom = document.getElementById("nom");


function formValidation() {
  if (nom.value == "") {
    nom.style.border = "2px solid red";
    alert("Veuillez remplir le champ nom");
   
  } else {
    sender.addEventListener("click", function () {
      alert(
        "bonjour " +
          nom.value +
          " Votre demande est pris en consideration nous vous contacterons dans les plus brefs délais"
      );
    });
  }
}