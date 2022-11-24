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

