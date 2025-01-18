function calculateTotal(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

const result = calculateTotal(10, 20, 30, 40);
console.log(result); 