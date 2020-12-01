import inputs from './inputAdventOfCodeDay1.js';

function return2020(input) {
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 1; j < input.length; j++) {
            if (i === j) {
                continue;
            }
            else if (input[i] + input[j] === 2020) {
                return input[i] * input[j];
            }
            else {
                continue;
            }
        }
    }
}

function return2020P2(input) {
    input.sort((a,b) => a-b);
    for (let i = 0; i < input.length - 2; i++) {
        let j = i+1;
        let k = input.length - 1;
        while (j < k) {
            let sum = input[i] + input[j] + input[k]; 
            if (sum === 2020) {
                return input[i] * input[j] * input[k];
            }
            else if (sum < 2020) {
                j++;
            }
            else if (sum > 2020) {
                k--;
            }
            else {
                continue;
            }
        }
    }
    return "none";
}

console.log(return2020(inputs));
console.log(return2020P2(inputs));