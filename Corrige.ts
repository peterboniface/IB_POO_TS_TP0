//Exercice 3

/**
 * Calcul le bénéfice ou la perte d'une transaction en fonction de son cout et de son prix de vente
 * @param prixVente prix d'achat du produit
 * @param coutFabrication cout de fabrication
 * @returns une phrase qui indique benefice/perte
 */
function calculerBenefice(prixVente: number, coutFabrication: number): string {
    const benefice: number = prixVente - coutFabrication;
    if (benefice < 0) {
        return `Perte de ${-benefice}€`;
    } else if (benefice > 0) {
        return `Gain de ${benefice}€`;
    } else {
        return `Vive le bénévolat`;
    }
}
console.log(calculerBenefice(10, 20));
console.log(calculerBenefice(20, 10));
console.log(calculerBenefice(10, 10));

//Exercice 4

/**
 * function qui retourne le nombre le plus grand
 * @param nombre1 nombre 1
 * @param nombre2 nombre 2
 * @param nombre3 nombre 3
 * @returns résultat du plus grand nombre
 */
function plusGrandNombre(nombre1: number, nombre2: number, nombre3: number) {
    let plusGrandNombre: number = nombre1;
    if (nombre2 > plusGrandNombre) {
        plusGrandNombre = nombre2;
    } else if (plusGrandNombre < nombre3) {
        plusGrandNombre = nombre3;
    }
    return `Le plus grand nombre est ${plusGrandNombre}`
}

console.log(plusGrandNombre(3, 8, 90))

//Exercice 5

/**
 * Déterminer le nombre le plus grand d'un nombre indéfini de nombres
 * @param nombres liste de nombres
 * @returns nombre le plus grand
 */
function plusGrandNombreDeux(...nombres: number[]) {
    let max: number = 0;
    for (let index = 0; index < nombres.length; index++) {
        if (nombres[index] > max) {
            max = nombres[index];
        }
    }
    return max;
}


console.log(`Le nombre le plus grand est ${plusGrandNombreDeux(5, 10, 305473)}`);

//Exercice 6

//Bulletin : Nom du gars, notes
    // calculer la moyenne
        //vérifier note 
            //si note < 0 ou > 20 : pas pris en compte
        //additionner toutes les valeurs et diviser par le nombre de notes
        //Retourner la moyenne
    //Définir la mention
        //Si c'est inférieur à 4 : catastrophe
        // < 10 : insuffisant
        // < 14 : passable
        // < 18 : Bien
        // <20 : TB

    /**
     * vérifier que la note est bien comprise 
     * @param note 
     * @returns 
     */
    function verifierNote(note: number): boolean {
        if (note < 0 || note >20) {
            return false;
        } else {
            return true;
        }
    }



    /**
     * 
     * @param notes 
     * @returns 
     */
    function calculerMoyenne(...notes: number []): number {
            let moyenne = 0;
            for (let note of notes){
                if (verifierNote(note)){
                moyenne += note;
            } else {
                console.log(`La note ${note} a été ignorée car non valide!`);          
            }
        }
        return moyenne / notes.length;
    }


    /**
     * 
     * @param moyenne 
     * @returns 
     */
    function definirMention(moyenne: number): string {
        if (moyenne <4) {
            return "catastrophique"
        } else if (moyenne <10) {
            return "insuffisant"
        } else if (moyenne <14) {
            return "passable"
        } else if (moyenne <18) {
            return "bien"
        } else {
            return "TB"
        }
    }

    /**
     * 
     * @param nomEleve 
     * @param notes 
     * @returns 
     */
    function bulletin(nomEleve: string, ...notes: number[]): string {
        let moyenne: number = calculerMoyenne(...notes);
        let mention: string = definirMention(moyenne);
        return `${nomEleve}a une moyenne de ${moyenne}, son travail est donc ${mention} !`;
    }
    const bulletinFrank: string = bulletin( "Frank", 5, 20, 6, 0, 15, 10);

    console.log();


//Exercice 7

/**
 * 
 * @param nombre1 
 * @param nombre2 
 * @param operateur 
 * @returns 
 */
function calculSimple(nombre1: number, nombre2: number, operateur: number): number {
    return eval (`${nombre1} ${operateur} ${nombre2}`);
}

//Exercice 8

function pyramide(nombre: number){
    let ligne = "";
    for (let index = 0; index < nombre; index++) {
        ligne += "#";
        console.log(ligne);        
    }

    for (let index = nombre - 1; index > 0; index--) {
        ligne = ligne.substring(0, index);
        console.log(ligne);        
    }
}
pyramide(8);

//Exercice 9

/**
 * Retourne le nombre de billets et de pièces
 * @param 
 */
function monnaie(nombre: number): void {
    const monnaies: number [] = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02];

    for (let monnaie of monnaies) {
        let nombreMonnaie = Math.floor(nombre / monnaie);
        if (nombreMonnaie !== 0 ) {
            if (monnaie >= 5) {
                console.log(`Billet de ${monnaie} : ${nombreMonnaie}`);                
            } else {
                console.log(`Pièce(s) de ${monnaie} : ${nombreMonnaie}`);                
            }
            nombre -= nombreMonnaie * monnaie;
        }
    }
}

monnaie(888.89);

//Exercice 10


/**
 * Retourne la température la plus proche de zéro !
 * @param temperatures liste de températures
 * @returns temperature
 */
function temperaturePlusProcheDeZero (...temperatures: number []): number {
    let plusProchedeZero = temperatures[0];
    for (let temperature of temperatures) {
        if (Math.abs(temperature) < Math.abs(plusProchedeZero)) {
            plusProchedeZero = temperature;
        }
    }
    return plusProchedeZero;
}