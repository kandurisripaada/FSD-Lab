function reverseIterable(arr) {
    return {
      [Symbol.iterator]() {
        let index = arr.length - 1;  
        return {
          next() {
            if (index >= 0) {
              return { value: arr[index--], done: false };
            } else {
              return { done: true };
            }
          }
        };
      }
    };
  }
  
  const arr = [1, 2, 3, 4];
  const reversed = reverseIterable(arr);
  
  for (const num of reversed) {
    console.log(num);
  }
  