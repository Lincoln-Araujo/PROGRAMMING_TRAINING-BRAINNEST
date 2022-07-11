function circleArea (radius) {
    
    let area = Math.PI * radius * radius;

    return area.toFixed(2);
    
}

function circleCircumference (radius) {

    let perimeter = 2 * Math.PI * radius;

    return perimeter.toFixed(2);

}

console.log(circleArea(4));
console.log(circleCircumference(4));