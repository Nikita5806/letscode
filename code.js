const start = 10;
const end = 20;

for (var i = start; i <= end; i++) {
    if (i%2 === 0){
        console.log(i);
    }
}

const numbers = [10, 15, 20, 30];
let sum = 0;
for (let  i = 0; i< numbers.length; i++){
    
    sum += numbers[i];
}
console.log(sum);
