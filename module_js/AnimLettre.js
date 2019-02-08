import {
    Util
} from './Util.js'

//Le nom du fichier et le nom de la classe doivent être identiques
export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

     

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre
        this.lesLettres = lesLettres			
        this.elmParent = elementParent
        this.animationLettre(this.lesLettres)
        this.fonction = fonction

    }


    animationLettre(lesLettres) {


        let nbLettres = lesLettres.length;
       console.log(`lesLettres =  ${lesLettres}`);
       let elmConteneur = this.creerElement(this.elmParent,
        'section',
        '',
        'mot')

        /*console.log(nbLettres);*/
    
       /* let elmBouton = this.creerElement(elmConteneur,
            'p',
            this.lesLettres
            )*/

        for(let i = lesLettres.length; i > lesLettres; i--){

            uneLettre = lesLettres[i];
            console.log(i);

            uneLettre.style.animationDelay = (i * 0.5) + "s";
			uneLettre.style.color = tabCouleur[(i++)%7]
        }

    }

    
    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        if(classCSS != ''){
            noeud.classList.add(classCSS)
        }
        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)
        return noeud
    }



    
    
}