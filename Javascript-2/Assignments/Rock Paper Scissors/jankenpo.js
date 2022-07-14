    var scorePlayer = 0;

    var scoreComputer = 0;

    var result = '';
    
    function computerPlay() {

        let options = ['Rock', 'Paper', 'Scissors'];

        let sortedOption = Math.floor(Math.random() * options.length);

        // returning the sorted element according to the sorted number
        if (options[sortedOption]) {
            return options[sortedOption].toLowerCase();
        }
    }

    function playRound(playerSelection, computerSelection) {

        let selection = playerSelection.toLowerCase();

        if (selection == "paper" && computerSelection == "scissors") {
            scoreComputer++;
            return "You Lose! Scissors cuts paper."
        } else if ( selection == "scissors" && computerSelection == "rock") {
            scoreComputer++;
            return "You Lose! Rock breaks scissors."
        } else if ( selection == "rock" && computerSelection == "paper") {
            scoreComputer++;
            return "You Lose! Paper covers rock."
        } else if ( selection == "paper" && computerSelection == "rock") {
            scorePlayer++;
            return "You Win! Paper covers rock."
        } else if ( selection == "scissors" && computerSelection == "paper") {
            scorePlayer++;
            return "You Win! Scissors cuts paper."
        } else if ( selection == "rock" && computerSelection == "scissors") {
            scorePlayer++;
            return "You Win! Rock breaks scissors."
        } else if ( selection == computerSelection) {
            return "Oh, it's a tie!"
        } else {
            return "You can only choose paper, scissors or rock"
        }
        
    }

    function game() {

        for (let round = 1; round <= 5; round++) {
     
            const playerSelection =  getElementById("svg").addEventListener("click", );
            
            const computerSelection = computerPlay();

            playRound(playerSelection, computerSelection);
            
            console.log(playRound(playerSelection, computerSelection));
        }        

        if (scoreComputer > scorePlayer) {
            result = `Computer is the winner with a score of ${scoreComputer}`;
        } else if ( scoreComputer < scorePlayer) {
            result = `You won with a score of ${scorePlayer}`;
        } else {
            result = 'It was a tie.';
        }

        return result;
    }

   console.log(game())
