function evenOrOdd (integer) {

    if (integer % 2 == 0) {

        return `${integer} is EVEN.`;

    } else {
        
        return `${integer} is ODD.`;
    }
}

console.log(evenOrOdd(7));
console.log(evenOrOdd(4));