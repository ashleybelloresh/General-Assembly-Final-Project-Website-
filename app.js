let score= 0

const ball = document.querySelector('.js-ball');

const scoreDisplay= document.querySelector('.js-score')
    
const levelWinner= document.querySelector('.level-winner')

ball.addEventListener('click', function() {
    console.log('clicked')
    score+=10; 
    console.log(score)
    scoreDisplay.innerText= score;
    if(score===100){
        console.log('levelWinner')
        levelWinner.style.opacity = "1";
    }else{
        console.log('Keep Playing')
    }
});