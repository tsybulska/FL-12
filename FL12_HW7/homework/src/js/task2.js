let range = 9,
    userAgree = true,
    attempts = 3,
    userPrize = 0,
    countWin = 1,
    one = 1, two = 2, three = 3, four = 4, nine = 9,
    prize25 = 25, prize50 = 50, prize100 = 100,
    prizes = [prize25, prize50, prize100],
    number, userNumber, win;

if (confirm('Do you want to play a game?')) {
    while (userAgree === true) {
        number = Math.floor(Math.random() * range);
        for (let i = attempts; i > 0 ; i--) {
            userNumber = parseInt(prompt('Choose a roulette pocket number from 0 to ' + (range - 1) +
            '\nAttempts left: ' + i +
            '\nTotal prize: ' + userPrize + '$' +
            '\nPossible prize on current attempt: ' + prizes[i - 1] * countWin + '$'));
            if (userNumber === number) {
                win = true;  
                userPrize += prizes[i - 1] * countWin;
                break;
            } else {
                win = false;
            }
        }
        if (win === true) {
            alert('Congratulation, you won! Your prize is: ' + userPrize + '$');
            userAgree = confirm('Do you want to continue?');
            if (userAgree === true) {
                range += four;
                countWin *= two;
            }
        } else {
            alert('Thank you for your participation. Your prize is: ' + userPrize + '$');
            userAgree = confirm('Do you want to play again?');
            range = nine;
            countWin = one;
            userPrize = 0;
        }
    }
} else {
    alert('You did not become a billionaire, but can');
}