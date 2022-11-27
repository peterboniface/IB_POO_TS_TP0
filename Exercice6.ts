/**
 * 1) calculer la moyenne de l'élève 
 * @param listeDesNotes liste de notes non définies
 * @returns moyenne des notes de l'élève
 */
function moyenneNotes(...listeDesNotes: number[]): number {
    let nombreDeNotes = listeDesNotes.length;
    let sommeDesNotes = 0, index;
    for (index = 0; index < nombreDeNotes; index++) {
        sommeDesNotes += Number(listeDesNotes[index]);
    }
    return  sommeDesNotes/nombreDeNotes;
}
// 
/**
 * 2) ajouter en retour le résultat avec une mention, en fonction de la moyenne
 * @param moyenneNotes résultat de la fonction précédente
 * @returns Mentions suivant la moyenne obtenue
 */
function avecMention(moyenneNotes: number): string {
    if (moyenneNotes >= 0 && moyenneNotes <= 4){
        return moyenneNotes + "Catastrophique";
    } else if (moyenneNotes >= 5 && moyenneNotes <= 10){
        return moyenneNotes + "Insuffisant";
    } else if (moyenneNotes >= 11 && moyenneNotes <= 14){
        return moyenneNotes + "Passable";
    } else if (moyenneNotes >= 15 && moyenneNotes <= 18){
        return moyenneNotes + "Bien";
    } else if (moyenneNotes >= 19 && moyenneNotes <= 20){
        return moyenneNotes + "Très bien";
    } else {
        return "Note non valide";
    }
}
/**
 * 3) fonction avec paramètre nom et liste de notes, et qui renvoit la moyenne et la mention
 * @param nom nom de l'élève
 * @param listeDesNotes liste des notes obtenues
 * @returns censé retourner la moyenne et la mention en fonction de l'élève
 */
function resultatEleve (nom: string, ...listeDesNotes: number[]): string {
    return moyenneNotes + avecMention;
}