/* 
En cliquant sur la forme, une boîte de dialogue (alerte) affiche les informations suivantes :

    Classe CSS de la forme
    Couleur du texte et couleur de fond
    Hauteur et largeur du carré
    Nom de la classe du carré (class : "carre" par exemple)
    Police et taille du texte
*/

const square = document.querySelector(".carre");    // définit square en la balise avec la class carre

const cssValue = window.getComputedStyle(square, null);     // getComputedStyle() method gets the computed CSS properties and values of an HTML element, here with square


let className = square.className;

let bgColor = cssValue.getPropertyValue("background-color");    // getComputedStyle() method returns a CSSStyleDeclaration object
let color = cssValue.getPropertyValue("color");                 // définit ici color avec la valeur "color" de la constante square
let height = cssValue.getPropertyValue("min-height");
let width = cssValue.getPropertyValue("min-width");
let displayFlex = cssValue.getPropertyValue("display");
let fontFamilyAndSize = cssValue.getPropertyValue("font-family") + " (" + cssValue.getPropertyValue("font-size") + ")" ;


square.addEventListener('click', addAlert);     // ajoute un écouteur d'évènement -> quand on clique sur le carré cela ajoute un alerte

function addAlert(){    // alerte définit ici

    // window.alert() ou  alert() permet d'afficher une boite de dialogue (alerte) pour l'utilisateur avec un bouton OK
    window.alert(`                          
        Class : ${className}
        - Background-color: ${bgColor}
        - Color : ${color}
        - Height : ${height}
        - Width : ${width}
        - Display : ${displayFlex}
        - Display : ${fontFamilyAndSize}
    `);
};


