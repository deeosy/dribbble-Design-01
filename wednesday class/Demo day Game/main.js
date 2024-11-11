
let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
};

let playGame = (guess) => {
  let move = (Math.floor(Math.random()*10))< 5 ? 'heads' : 'tails';
  let result = move === guess ? 'You win' : 'You lose';
  let resultsColor = result === 'You win' ? 'text-green-400 font-bold' : 'text-red-400 font-bold';
  if (move === guess) {
    score.wins++;
  } else {
    score.losses++;
  }

  document.querySelector('#js-wins').innerText = score.wins;
  document.querySelector('#js-losses').innerText = score.losses;

  let results = document.querySelector('#js-results');
  results.innerHTML = `You chose <span class="">${guess}</span>, Computer chose <span class="">${move}</span>. <span class="${resultsColor}">${result}</span>`;

  localStorage.setItem('score', JSON.stringify(score));

}

let restartScore = () => {
  document.querySelector('#js-score').innerHTML = `Score: Wins <span id="js-wins">0</span> Losses <span id="js-losses">0</span>`;
}

// let restart = () => {
//   score.wins = 0;
//   score.losses = 0;
//   localStorage.removeItem('score');
// }







// let heads = () => {
//   let move = (Math.floor(Math.random()*10))< 5 ? 'heads' : 'tails';
//   let playerMove = '';
//   let head = 'heads';
//   let tail = 'tails';
//   playerMove = move === head ? 'You win' : 'You lose';
//   const resultsColor = playerMove === 'You win' ? 'bg-green-400' : 'bg-sky-600';

//   let results = document.querySelector('#js-results');
//   results.innerHTML = `You chose <span class="">${head}</span>, Computer chose <span class="">${move}</span>. <span class="${resultsColor}">${playerMove}</span>`;
  
// }

// let tails = () => {
//   let move = (Math.floor(Math.random()*10))< 5 ? 'heads' : 'tails';
//   let head = 'heads';
//   let tail = 'tails';
//   let playerMove = '';
//   playerMove = move === tail ? 'You win' : 'You lose';
//   let results = document.querySelector('#js-results');
//   results.innerHTML = `You chose ${tail}, Computer chose ${move}. ${playerMove}`;

//   if (move === playerMove) {
//     score.wins++;
//   } else {
//     score.losses++
//   }
// }
