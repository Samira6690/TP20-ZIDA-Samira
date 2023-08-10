
document.forms["Inscription"].addEventListener("submit", function(e) {
  var erreur;
  var inputs = this;

  //Traitement cas par cas (input unique)
  // if (inputs["YourEmail"].value != "primfx@p.com") {
  //   erreur = "Adress YourEmail incorrecte";
  // }
  // Traitement générique

  for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i]);
    if (!inputs[i].value) {
      erreur = "veuillez renseignez tous les champs";
    }
  }
  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else {
  alert("formulaire envoyé !");
  }
});




// document.getElementById("Inscription").addEventListener("submit", function(e) {
//   alert("je suis la");


//   var erreur;
//   var FirstName = document.getElementById("FirstName");
//   var LastName = document.getElementById("LastName");
//   var YourEmail = document.getElementById("YourEmail");
//   var PhoneNumber= document.getElementById("PhoneNumber");
//   var Age = document.getElementById("Age");
//   var Sexe = document.getElementById("Sexe");
//   var YourCountry = document.getElementById("YourCountry");
//   // document.getElementById("FirstName").value == ""
//   if (!FirstName.value) {
//     erreur = "Veuillez renseignez un FirstName";
//   }
//   if (!LastName.value) {
//     erreur = "Veuillez renseignez un LastName";
//   }
//   if (!YourEmail.value) {
//     erreur = "Veuillez renseignez un YourEmail";
//   }
//   if (!PhoneNumber.value) {
//     erreur = "Veuillez renseignez un PhoneNumber";
//   }
//   if (!Age.value) {
//     erreur = "Veuillez renseignez un Age";
//   }
//   if (!Sexe.value) {
//     erreur = "Veuillez renseignez un Sexe";
//   }
//   if (!YourCountry.value) {
//     erreur = "Veuillez renseignez un YourCountry";
//   }


//   if (erreur) {
//     e.preventDefault();
//     document.getElementById("erreur").innerHTML = erreur;
//   } else {
//       alert("Formulaiore envoyé !");
//     } 
//   });



  // var inputs = document.getElementsByTagName("input");
  // for (var i = 0; i < inputs.length; i++) {
  //   console.log(inputs[i]);
  //   if (!inputs(i).value) {
  //     erreur = "Veuillez renseignez tous les champs";
  //   }
  // }