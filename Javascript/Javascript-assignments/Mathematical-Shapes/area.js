function findingAreaOfATriangle (side1, side2, side3) {
    
    let s = (side1 + side2 + side3) / 2;

    let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

    return area.toFixed(2)
}

console.log(findingAreaOfATriangle(5,6,7));