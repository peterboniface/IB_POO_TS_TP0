/**
 * fonction qui retourne le bénéfice de la vente
 */
function benef(fab: number, vente: number): string {
    if (vente - fab > 0){
        return `Gain de ${vente - fab}€`;    
    } else if (vente - fab < 0) {
        return `Perte de ${fab - vente}€`;
    } else {
        return `Ni perte, ni gain`;
    }   
}
console.log(benef(5, 10));
