/**
 * Déterminer le nombre le plus grand d'un nombre indéfini de nombres
 * @param listeDesNombres liste de nombres
 * @returns nombre le plus grand
 */
function trouverPlusGrand(...listeDesNombres: number[]): number {
    let plusGrandNombre = listeDesNombres[0]
    let index = 0;
    while (index < listeDesNombres.length){
        if (listeDesNombres[index] > plusGrandNombre){
            plusGrandNombre = listeDesNombres[index];
        } 
        index++;
    }
    return plusGrandNombre;
}

const plusGrandNombre = trouverPlusGrand(5, 8, 1000, 25, 154000)
console.log(plusGrandNombre);
