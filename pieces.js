// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
    
    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    //Ajout des éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);

 }
 
 const boutonTrier = document.querySelector(".btn-trier");
 boutonTrier.addEventListener("click", function () {
     pieces.sort(function (a, b) {
         return a.prix - b.prix;
     });
     console.log(pieces);
 });


const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
   });
   console.log(piecesFiltrees);
});

const boutonTrier_ = document.querySelector(".btn-trier-");
boutonTrier_.addEventListener("click", function () {
    pieces.sort(function (b, a) {
        return a.prix - b.prix;
    });
    console.log(pieces);
});


const boutonFiltrerInfo = document.querySelector(".btn-filtrer-info");

boutonFiltrerInfo.addEventListener("click", function () {
  const piecesFiltreesInfo = pieces.filter(function (piece) {
       if (!piece.description) {
        return piece;
      };
  });
  console.log(piecesFiltreesInfo);
});



const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}
console.log(noms)

//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = noms[i];
   abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
   .appendChild(abordablesElements)



const dispo = pieces.map(piece => piece.nom);
const prixDispo = pieces.map(piece => piece.prix);

for(let i = pieces.length -1 ; i >= 0; i--){
   if(!pieces[i].disponibilite){
    dispo.splice(i,1)
    prixDispo.splice(i,1)
   }
}
console.log(dispo, prixDispo)

//Création de la liste
const dispoElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < dispo.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText =  `${dispo[i]} - ${prixDispo[i]} €`;
   dispoElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.dispo')
   .appendChild(dispoElements)




   /* Efface le contenu de la balise body et donc l’écran
document.querySelector(".fiches").innerHTML = '';
*/


/* Récupération des pièces depuis le fichier JSON
const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());
 
// Fonction qui génère toute la page web
function genererPieces(pieces) {
  for (let i = 0; i < pieces.length; i++) {
       // Création d’une balise dédiée à une pièce auto
       const pieceElement = document.createElement("article");
       // On crée l’élément img.
       const imageElement = document.createElement("img");
       // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
       imageElement.src = pieces[i].image;
       // On rattache l’image à pieceElement (la balise article)
       pieceElement.appendChild(imageElement);
       // Idem pour le nom, le prix et la catégorie ...
       // ...    
       // On rattache la balise article au body
       document.body.appendChild(pieceElement);
  }
 
}
 
// Premier affichage de la page
genererPieces(pieces);
 
// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
   const piecesOrdonnees = Array.from(pieces)
   piecesOrdonnees.sort(function (a, b) {
       return b.prix - a.prix;
   });
  // Effacement de l'écran et regénération de la page
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees);
});
 
// Ajout du listener pour filtrer les pièces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.disponibilite;
   });
   // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});
*/