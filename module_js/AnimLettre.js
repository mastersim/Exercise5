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
       console.log(`lesLettres =  ${lesLettres}`);
    }

    

}