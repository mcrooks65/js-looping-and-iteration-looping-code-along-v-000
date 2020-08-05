// Code your solutions in this file
function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }

  return names;
}

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
<<<<<<< HEAD
}
=======
}
>>>>>>> 9ab7891b3313e36f0096bf17558867dd0cd9e4f6
