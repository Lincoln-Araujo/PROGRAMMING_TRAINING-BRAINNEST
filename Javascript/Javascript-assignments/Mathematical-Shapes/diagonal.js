function findingDiagonalSquare (sideLength) {

    // multiplying the side length by the square of 2
    let diagonal = sideLength * Math.sqrt(2);
    
    // adjusting the value to fewer decimal places 
    return diagonal.toFixed(1);
}

console.log(findingDiagonalSquare(9))