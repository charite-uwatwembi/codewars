const rps = (p1, p2) => {
    if (p1 === p2){
        return "Draw!"
    }
    switch(p1){
        case "rock":
        return p2 === "scissors" ? "player 1 won!" : "player 2 won"

        case "paper":
            return p2 === "rock" ? "player 1 won!" : "player 2 won"
        
        case "scissors":
            return p2 ==="paper"? "player 1 won!" : "player 2 won"
            
        default:
            return "Invalid move! Please use rock, paper or scissors."
    }

      
  };

  console.log(rps("rock", "paper"))