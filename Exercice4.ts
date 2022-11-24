/**
 * function qui retourne le nombre le plus grand
 */
function big(num1: number, num2: number, num3: number): string {
    if (num1 > num2 && num1 > num3){
        return `Le plus grand nombre est ${num1}`;
    } else if (num2 > num1 && num2 > num3){
        return `Le plus grand nombre est ${num2}`;
    } else if (num3 > num1 && num3 > num2) {
        return `Le plus grand nombre est ${num3}`;
    } else {
        return `Les nombres doivent être différents`;
    }
}
console.log(big(5, 10, 15));