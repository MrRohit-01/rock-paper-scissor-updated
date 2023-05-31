 let score = JSON.parse(localStorage.getItem('score'));
 if(!score){
  score= {
    wins : 0,
    losses : 0,
    ties : 0
  }
 }
let result;
resultBoard();
function playermove(move) {
  let comp = compmove();
  if(move === 'rock'){
    if(comp == 'rock'){
      result = 'Game is tie'
    }
    else if(comp == 'paper'){
      result='you lost'
    }
    else{
      result = 'you won'
    }
  }
  else if(move === 'paper'){
    if(comp == 'rock'){
      result = 'you won'
    }
    else if(comp === 'paper'){
      result = 'Game is tie'
    }
    else{
      result='you lost'
    }
  }
  else{
    if(comp == 'rock'){
      result='you lost'
    }
    else if(comp == 'paper'){
      result = 'you won'
    }
    else{
      result = 'Game is tie'
    }
  }
  if(result==='you won'){
    score.wins +=1;
  }
  else if(result==='you lost'){
    score.losses +=1;
  }
  else{
    score.ties +=1;
  }
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('.js-result')
  .innerHTML=result || 'Play your first move';
  document.querySelector('.js-moves')
  .innerHTML = `you <img src="img/${move}-emoji.png" alt="" class="emoji"> <img src="img/${comp}-emoji.png" alt="" class="emoji"> computer`;
  resultBoard();
}
function compmove() {
  let pcmove;
  const temppcmove = Math.random();
  if( 0>= temppcmove && temppcmove<=1/3){
    pcmove = "rock";
  }
  if( 1/3 < temppcmove && temppcmove<= 2/3){
    pcmove = "paper";
  }
  else{
    pcmove = "scissor";
  }
  return pcmove;
}
function reset(){
  score.wins= 0,
  score.losses= 0,
  score.ties= 0,
  localStorage.removeItem('score');
  resultBoard();
}
  function resultBoard() {
    document.querySelector('.js-score')
    .innerHTML =
    `Wins : ${score.wins},
    Losses : ${score.losses},
    Ties : ${score.ties}`;
}