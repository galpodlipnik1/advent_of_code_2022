import fs from 'fs';

//player1 = charAt(0)
//player2 = charAt(2)

//opponent choice:  A(rock)(score: 1) B(paper)(score: 2) C(scissors)(score: 3)
//your choice: X(rock)(score: 1) Y(paper)(score: 2) Z(scissors)(score: 3)
//win score: 6
//lose score: 0
//draw score: 3

const file = fs.readFileSync('input.txt', 'utf8');

const lines = file.split('\n');

let globalScore = 0;

lines.forEach((line) => {
    let score = 0;
    let winnerState = '';
    const [opponent, your] = line.split(' ');
    switch (opponent) {
        case 'A':
            switch (your) {
                case 'X':
                    score += 1;
                    winnerState = 'draw';
                    break;
                case 'Y':
                    score += 2;
                    winnerState = 'win';
                    break;
                case 'Z':
                    score += 3;
                    winnerState = 'lose';
                    break;
                default:
                    break;
            }
            break;
        case 'B':
            switch (your) {
                case 'X':
                    score += 1;
                    winnerState = 'lose';
                    break;
                case 'Y':
                    score += 2;
                    winnerState = 'draw';
                    break;
                case 'Z':
                    score += 3;
                    winnerState = 'win';
                    break;
                default:
                    break;
            }
            break;
        case 'C':
            switch (your) {
                case 'X':
                    score += 1;
                    winnerState = 'win';
                    break;
                case 'Y':
                    score += 2;
                    winnerState = 'lose';
                    break;
                case 'Z':
                    score += 3;
                    winnerState = 'draw';
                    break;
                default:
                    break;
            }
        default:
            break;
    }
    
    if (winnerState === 'win') {
        score += 6;
    } else if (winnerState === 'lose') {
        score += 0;
    } else {
        score += 3;
    }

    globalScore += score;
});



console.log(globalScore);