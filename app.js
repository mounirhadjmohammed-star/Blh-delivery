const mdp = "admin123"; // Mot de passe admin

// Connexion
function login() {
  let saisie = document.getElementById("password").value;
  if (saisie === mdp) {
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Mot de passe incorrect !");
  }
}

// Tarifs
function ajouterTarif() {
  let tarif = document.getElementById("tarif").value;
  if (tarif) {
    let liste = JSON.parse(localStorage.getItem("tarifs") || "[]");
    liste.push(tarif);
    localStorage.setItem("tarifs", JSON.stringify(liste));
    afficherTarifs();
    afficherTarifsPublic();
  }
}

function afficherTarifs() {
  let liste = JSON.parse(localStorage.getItem("tarifs") || "[]");
  let ul = document.getElementById("listeTarifs");
  if (ul) {
    ul.innerHTML = "";
    liste.forEach((t, i) => {
      ul.innerHTML += `<li>${t} <button onclick="supprimerTarif(${i})">X</button></li>`;
    });
  }
}

function afficherTarifsPublic() {
  let liste = JSON.parse(localStorage.getItem("tarifs") || "[]");
  let ul = document.getElementById("listeTarifsPublic");
  if (ul) {
    ul.innerHTML = "";
    liste.forEach(t => {
      ul.innerHTML += `<li>${t}</li>`;
    });
  }
}

function supprimerTarif(i) {
  let liste = JSON.parse(localStorage.getItem("tarifs") || "[]");
  liste.splice(i, 1);
  localStorage.setItem("tarifs", JSON.stringify(liste));
  afficherTarifs();
  afficherTarifsPublic();
}

// Colis
function ajouterColis() {
  let colis = document.getElementById("colis").value;
  if (colis) {
    let liste = JSON.parse(localStorage.getItem("colis") || "[]");
    liste.push(colis);
    localStorage.setItem("colis", JSON.stringify(liste));
    afficherColis();
    afficherColisPublic();
  }
}

function afficherColis() {
  let liste = JSON.parse(localStorage.getItem("colis") || "[]");
  let ul = document.getElementById("listeColis");
  if (ul) {
    ul.innerHTML = "";
    liste.forEach((c, i) => {
      ul.innerHTML += `<li>${c} <button onclick="supprimerColis(${i})">X</button></li>`;
    });
  }
}

function afficherColisPublic() {
  let liste = JSON.parse(localStorage.getItem("colis") || "[]");
  let ul = document.getElementById("listeColisPublic");
  if (ul) {
    ul.innerHTML = "";
    liste.forEach(c => {
      ul.innerHTML += `<li>${c}</li>`;
    });
  }
}

function supprimerColis(i) {
  let liste = JSON.parse(localStorage.getItem("colis") || "[]");
  liste.splice(i, 1);
  localStorage.setItem("colis", JSON.stringify(liste));
  afficherColis();
  afficherColisPublic();
}

// Charger au démarrage
window.onload = () => {
  afficherTarifs();
  afficherTarifsPublic();
  afficherColis();
  afficherColisPublic();
};
