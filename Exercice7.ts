function calcul ( nombre1: number, nombre2: number, operateur: string): number {
    if (operateur === "+") {
        return nombre1 + nombre2;
    } else if (operateur === "-") {
        return nombre1 - nombre2;
    } else if (operateur === "*") {
        return nombre1 * nombre2;
    } else if (operateur === "/" && nombre2 !== 0) {
        return nombre1 / nombre2;
    }
}