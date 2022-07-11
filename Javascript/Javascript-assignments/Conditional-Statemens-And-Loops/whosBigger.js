function findingTheBiggestNumber (num1, num2) {

    if (num1 > num2) {
        
        return num1;
    
    } else if (num1 < num2) {

        return num2;

    } else if (num1 == num2) {

        return `They are the same number, ${num1}`;

    } else {

        return 'Some or both inputs are not numbers';
    
    }

}

console.log(findingTheBiggestNumber(1,2));
console.log(findingTheBiggestNumber(3,2));
console.log(findingTheBiggestNumber(1,1));
console.log(findingTheBiggestNumber(1,"two"));