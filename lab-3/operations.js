function multiplyBy2(number, callback) {
    const result = number * 2;
    return callback(result);
}
  
function subtract3(number, callback) {
    const result = number - 3;
    return callback(result);
}
  
function add10(number, callback) {
    
    const result = number + 10;
    return callback(result);
}
  
function ops(number) {
    multiplyBy2(number, (result1) => {
        subtract3(result1, (result2) => {
        add10(result2, (finalResult) => {
            console.log("the final result is: "+finalResult);
        });
        });
    });
}
  
ops(5);
  