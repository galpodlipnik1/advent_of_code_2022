import fs from 'fs';


const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n\n');

let arr = [];
let biggest = 0;

lines.forEach((line) => {
    const group = line.split('\n');
    arr.push(group);
});

arr.forEach((nums) => {
    let count = 0;

    nums.forEach((num) => {
        let intNum = parseInt(num);
        count += intNum;
    })

    if (count > biggest) {
        biggest = count;
    }
})

console.log(biggest);
