let message2 = document.getElementById("message2");
let message = document.getElementById("message");
let listeDeMot =
  "arriere-coures, idiosyncrasies, emmancheraient, madiatisations, recriminassent, escarmouchions, collectivisais, interjetteront, instrumentaire, assarmenterent, frequentielles, oxydoreduction, contrariassiez, trimardassions, emmaillotasses, devergonderait, tripatouilliez, accroupiraient, dechevillerait, reinventassent, gueuletonnerai, predisposeriez, destitueraient, electrifiasses, ordonnancerent, ebulliometries, proportionnees, lance-grenades, desaffilierais, recomparaîtrez, prevariquerais, reapprendrions, degoulinassiez, inflammatoires, systematisasse, anatomisassent, mesdemoiselles, brouillonnerai, contingentates, impatienterais, apostropherait, desensorcelles, restructurions, electrisations, desamidonnates, epoustouflante, dissimilations, contemplerions, controuvassent, bureaucratises, patrouillerait, documentassent, encartonnerons, inconsequences, squatteriserai, tarabiscotates, anathematisait, annexionnismes, lithographiees, emmielleraient, questionnerons, deflagrassions, deglutinations, decimaliserais, cylindreraient, demineralisent, defigureraient, reprimandasses, revolutionnais, plebiscitaient, expectorations, desetablissons, intercotidales, dessaoulerions, anthropophages, comprendraient, ratiocinassiez, accommoderions, empoisonnantes, demouscaillent, troussequinera, permeabilisant, intoxiquassiez, vermillassions, pericliterions, stigmatisation, reinscrivisses, deboussolerait, desensablerent, affectionnerai, debequetterons, explicitations, depoudrassions, remmancherions, spiritualisait, deconseillates, degripperaient, empanachassent, bondonneraient, contusionneras, ensemençassiez, corpusculaires, tranquillisait, desargentasses, enlaidissement, contre-scellee, accoutumassent, fractureraient, repositionnons, delabialisates, mangeottassiez, conversassions, patrilineaires, chamboulassent, enchatonnaient, mouvementerais, medicamenteuse, endeuillassent, desincorporera, regurgitations, depolariseriez, interclassames, desargenterais, revaloriserait, perce-muraille, perquisitionne, ombrageassions, defranciseront, reinitialisiez, interlignaient, vampiriserions, debaptisassent, chausse-trappe, debalourderait, remaquillerait, analytiquement, defleuriraient, desargentaient, moralisassions, demi-portionne, inspectassions, euphorisassent, inopportunites, conspiratrices, distanciations, paraisonnaient, reverendissime, culpabiliserai, mansarderaient, exasperassions";

let tabDeMot = listeDeMot.split(", ");
let lettres = "abcdefghijklmnopqrstuvwxyz";
let tabLettres = lettres.split("");
let nbrAleatoire;
let motMystere;
let tabMotMystere;
let compteurTentatives;
let grilleBouton = document.getElementById("grilleBouton");
let grille = "--------------".split("");
let grilleMasque = document.getElementById("grille-masque");
let restart = document.getElementById("restart");

compteurTentatives = 9;
nbrTentatives.innerHTML =
  "Il vous reste " + compteurTentatives + " tentatives!";

grilleMasque.innerHTML = grille.join("");

function genererBouton() {
  for (let i = 0; i < tabLettres.length; i++) {
    grilleBouton.innerHTML +=
      '<button type="button" onClick="recupererValeurBouton(\'' +
      tabLettres[i] +
      '\')" class="btn btn-danger">' +
      tabLettres[i] +
      "</button>";
  }
}

genererBouton();

function recupererValeurBouton(valeur) {
  lettres = lettres.replace(valeur, "");
  tabLettres = lettres.split("");
  grilleBouton.innerHTML = "";
  genererBouton();
  verifierProposition(valeur);
}

function genererChiffre(chiffreMax) {
  return Math.floor(Math.random() * Math.floor(chiffreMax));
}
nbrAleatoire = genererChiffre(150) + 1;

motMystere = tabDeMot[nbrAleatoire];
tabMotMystere = motMystere.split("");
console.log(tabMotMystere);
console.log(motMystere);

function verifierProposition(valeur) {
  console.log(grille);

  if (grille.indexOf("-") == -1) {
    message2.innerHTML = Swal.fire(
      " Vous avez gagné, bravo! ",
      "click on restart for playing",
      "success"
    );
    lettres = lettres.disabled;
  }

  console.log(valeur);
  if (tabMotMystere.indexOf(valeur) == -1) {
    compteurTentatives = compteurTentatives - 1;
  }
  console.log(compteurTentatives);
  let limite = tabMotMystere.length;
  for (let i = 0; i < limite; i++) {
    if (tabMotMystere[i].indexOf(valeur) != -1) {
      grille[i] = valeur;
    }
  }
  grilleMasque.innerHTML = grille.join("");

  nbrTentatives.innerHTML =
    "Il vous reste " + compteurTentatives + " tentatives!";
  if (compteurTentatives === 0) {
    lettres = lettres.disabled;
    nbrTentatives.innerHTML = "Il ne vous reste plus aucune tentatives!";
    message2.innerHTML = Swal.fire({
      icon: "error",
      title: "Vous avez perdu!!!",
      text: "le mot a deviner etait " + '"' + motMystere + '"',
      footer: "Press restart for try again",
    });
}
if (compteurTentatives === 9) {
  image.innerHTML = '<img src="image/pendu9.png">';
}
if (compteurTentatives === 8) {
  image.innerHTML = '<img src="image/pendu8.png"/>';
}
if (compteurTentatives ===7) {
  image.innerHTML = '<img src="image/pendu7.png"/>';
}
if (compteurTentatives === 6) {
  image.innerHTML = '<img src="image/pendu6.png"/>';
}
if (compteurTentatives === 5) {
  image.innerHTML = '<img src="image/pendu5.png"/>';
}
if (compteurTentatives === 4) {
  image.innerHTML = '<img src="image/pendu4.png"/>';
}
if (compteurTentatives === 3) {
  image.innerHTML = '<img src="image/pendu3.png"/>';
}
if (compteurTentatives === 2) {
  image.innerHTML = '<img src="image/pendu2.png"/>';
}
if (compteurTentatives === 1) {
  image.innerHTML = '<img src="image/pendu1.png"/>';
}
if (compteurTentatives === 0) {
  image.innerHTML = '<img src="image/pendu0.png"/>';
}
}

function reStart() {
  window.location.reload();
}

restart.addEventListener("click", reStart);
