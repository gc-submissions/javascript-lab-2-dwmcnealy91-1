"use strict";

const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
// console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};
// console.log(chooseOption);

const attackPlayer = function (health) {
  return (health = health - randomDamage());
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  return health <= 0;
  //another way of doing it, long way if it makes more sense. if (health <= 0){
  //return true;
  //} else {
  //    return false;
  //}
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player2);
      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Derek", "Matt", 100, 100);
