// const Inscription = document.getElementById("Inscription");
// Inscription.addEventListener("submit", function(e) {
//   let erreur;
//   let inputs = this;

//Traitement cas par cas (input unique)
// if (inputs["YourEmail"].value != "primfx@p.com") {
//   erreur = "Adress YourEmail incorrecte";
// }
// Traitement générique

//   for (let i = 0; i < inputs.length; i++) {
//     console.log(inputs[i]);
//     if (!inputs[i].value) {
//       erreur = "veuillez renseignez tous les champs";
//     }
//   }
//   if (erreur) {
//     e.preventDefault();
//     document.getElementById("erreur").innerHTML = erreur;
//     return false;
// } else {
//   alert("formulaire envoyé !");
//   }
// });
let erreur1 = document.querySelector(".erreur1");
let erreur2 = document.querySelector(".erreur2");
let erreur3 = document.querySelector(".erreur3");
let erreur4 = document.querySelector(".erreur4");
let erreur5 = document.querySelector(".erreur5");
let erreur6 = document.querySelector(".erreur6");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let YourEmail = document.getElementById("YourEmail");
let PhoneNumber = document.getElementById("PhoneNumber");
let Age = document.getElementById("Age");
let Sexe = document.getElementById("Sexe");
let pays = document.querySelector(".form-select");
const Inscription = document.getElementById("Inscription")
let numero = /[0-9]{8}/
let chiffre = /[0-9]{2}/
let nombre = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


Inscription.addEventListener("click", function (e) {


  e.preventDefault();
  if (FirstName.value === "") {
    erreur1.innerHTML = "Veuillez renseignez un nom";

  } else if (FirstName.value != "") {
    erreur1.innerHTML = "";
  }
  if (LastName.value === "") {
    erreur2.innerHTML = "Veuillez renseignez un prénom";

  } else if (LastName.value != "") {
    erreur2.innerHTML = "";
  }

  function mel(mell) {
 if(mell === "") {
  erreur3.innerHTML = "veuillez entrez un email";
 } else if (mell.match(nombre)) {
erreur3.innerHTML ="";
 } else {
  erreur3.innerHTML="entrez un email valid";
  }
}
mel(YourEmail.value)

  // if (YourEmail.value === "") {
  //   erreur3.innerHTML = "Veuillez renseignez un email";

  // } else if (YourEmail.value != "") {
  //   erreur3.innerHTML = "";
  // }

  function tel(tell){
  if (tell === "") {
    erreur4.innerHTML = "Veuillez renseignez 8 chiffres";

  } else if (tell.match(numero)) {
    erreur4.innerHTML = "";

  } else {
  erreur4.innerHTML = "entrez correct number";

  }
}
tel(PhoneNumber.value)

 function sel(sell) {
  if (sell === "") {
    erreur5.innerHTML =" veuillez entrer deux chiffres";
  } else if (sell.match(chiffre)) {
      erreur5.innerHTML = "";
    } else {
      erreur5.innerHTML = "entrez le correct age";
    }
  }
  
sel(Age.value)
  // if (Age.value === "") {
  //   erreur5.innerHTML = "Veuillez renseignez deux caractères";

  // } else if (Age.value != "") {
  //   erreur5.innerHTML = "";
  // }
  if (pays.value == "Your Country") {
     erreur6.innerHTML = "selectionnez un pays";
    
  } else if (pays.value != "") {
   erreur6.innerHTML = "";
  
  }
  //   if (!LastName.value) {
  //     erreur = "Veuillez renseignez un LastName";
  //   }
  //   if (!YourEmail.value) {
  //     erreur = "Veuillez renseignez un YourEmail";   }
  //  if (!PhoneNumber.value) {
  //    erreur = "Veuillez renseignez un PhoneNumber";  }
  //   if (!Age.value) {
  //     erreur = "Veuillez renseignez un Age";
  //   }
  //   if (!Sexe.value) {
  //         erreur = "Veuillez renseignez un Sexe";
  //    }
  //    if (!YourCountry.value) {
  //      erreur = "Veuillez renseignez un YourCountry";
  //    }


  //  if (erreur) {
  //    e.preventDefault();
  //     document.getElementById("erreur").innerHTML = erreur;
  //   } else {
  //       alert("Formulaiore envoyé !");   } 
});



  // var inputs = document.getElementsByTagName("input");
  // for (var i = 0; i < inputs.length; i++) {
  //   console.log(inputs[i]);
  //   if (!inputs(i).value) {
  //     erreur = "Veuillez renseignez tous les champs";
  //   }
  // }