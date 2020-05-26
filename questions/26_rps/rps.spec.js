const { RPS } = require('./rps');

describe('Rock-Paper-Scissors', () => {
  test('It returns the names of the players', () => {
    const gameOne = new RPS('John', 'Jane');
    expect(gameOne.players.length).toEqual(2);
  });
  test('It returns the result of gameplay.', () => {
    const gameTwo = new RPS('Eliot', 'Prof');

    const roundOne = gameTwo.play('Rock', 'Scissors');
    expect(roundOne).toEqual('Rock defeats Scissors, Eliot wins this round.');

    const roundTwo = gameTwo.play('Paper', 'Scissors');
    expect(roundTwo).toEqual('Scissors defeats Paper, Prof wins this round.');
  });
  test('It keeps score.', () => {
    const gameThree = new RPS('Thompson', 'Deanna');
    gameThree.play('Rock', 'Scissors');
    gameThree.play('Rock', 'Rock');
    gameThree.play('Rock', 'Paper');
    gameThree.play('Scissors', 'Paper');

    expect(gameThree.winner()).toEqual('The victor is Thompson with 2 points.');
  });
  test('BONUS: It works with multiple players.', () => {
    const gameFour = new RPS('Paul', 'Ringo', 'George', 'John');
    gameFour.play('Rock', 'Rock', 'Rock', 'Paper');
    gameFour.play('Rock', 'Rock', 'Rock', 'Paper');
    console.log(gameFour.scoreBoard);

    expect(gameFour.winner()).toEqual('The victor is John with 2 points.');
  });
});
