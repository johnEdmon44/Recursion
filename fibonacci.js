function fibIterative(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){  
    arr.push(arr[i - 2] + arr[i -1])
  }
  return arr[n]
}

function fibRecurssion(n) {
  if(n < 2) return n;

  return fibRecurssion(n - 1) + fibRecurssion(n - 2);
}


function addToArr(n) {

  for(let i = 0; i < n; i++) {
    arr.push(fibRecurssion(i));
  }
}
const arr = [];
addToArr(8)
console.log(arr)