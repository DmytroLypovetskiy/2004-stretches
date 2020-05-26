//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  constructor(...players) {
    this.players = players
    this.scores = {};

    players.forEach(player => {
      this.scores[player] = 0;
    });
  }
  play(...choises) {
    const uniqeVariants = [...new Set(choises)].sort();

    if (uniqeVariants.length !== 1 && uniqeVariants.length !== 3) {
      //console.log(uniqeVariants, 'uniqeVariants');
      const [pick1, pick2] = uniqeVariants;
      let winningChoise = '';
      let message = '';

      if (pick1 === 'Rock' && pick2 === 'Scissors') {
        winningChoise = pick1;
        message = `${pick1} defeats ${pick2}`;
      } else if (pick1 === 'Paper' && pick2 === 'Rock') {
        winningChoise = pick1;
        message = `${pick1} defeats ${pick2}`;
      } else {
        winningChoise = pick2;
        message = `${pick2} defeats ${pick1}`;
      }

      const winnerIdx = choises.indexOf(winningChoise);
      const winner = this.players[winnerIdx];

      message += `, ${winner} wins this round.`
      this.scores[winner]++;

      return message;
    }
  }
  winner() {
    let winner = [];

    for (let player in this.scores) {
      if (winner.length === 0 || winner[1] < this.scores[player]) {
        winner = [player, this.scores[player]];
      }
    }

    const [name, score] = winner;

    return `The victor is ${name} with ${score} points.`;
  }
}

module.exports = {
  RPS
};