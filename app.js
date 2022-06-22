const cards =[
    {
        name : 'burger',
        img : 'images/burger.jpg'
    },
    {
        name :'pizza',
        img : 'images/pizza.jpg'
    },
    {
        name :'watermelon',
        img : 'images/watermelon.jpg'
    },
    {
        name :'use1',
        img : 'images/use1.jpg'
    },
    {
        name :'use2',
        img : 'images/use2.jpg'
    },
    {
        name :'use3',
        img : 'images/use3.png'
    },
    {
        name : 'burger',
        img : 'images/burger.jpg'
    },
    {
        name :'pizza',
        img : 'images/pizza.jpg'
    },
    {
        name :'watermelon',
        img : 'images/watermelon.jpg'
    },
    {
        name :'use1',
        img : 'images/use1.jpg'
    },
    {
        name :'use2',
        img : 'images/use2.jpg'
    },
    {
        name :'use3',
        img : 'images/use3.png'
    },
    
]

const grid=document.querySelector('#grid');
const finder = document.getElementById('finder')
let thecard,gameInMotion,picturesPicked;
let myScore = 0;
setVariables();



function startGame(){
    if(gameInMotion===0){
        cards.sort(() =>0.5 - Math.random());
        board();
        cardToFind();
        gameInMotion += 1;
    }else{console.log('A game is already in motion')}
}


function board(){
    for (let i = 0; i< cards.length;i++){
        const some=document.createElement('img');
        some.setAttribute('src',cards[i]['img']);
        setTimeout(function(){
            some.setAttribute('src','images/wood.jpg');
        }, 1500);
        some.addEventListener('click',flip)
        some.setAttribute('data-id',i);
        grid.append(some);
    }
    
}
function flip(){
    let hh=this.getAttribute('data-id');
    let tt=cards[hh]['name'];
    if(tt == thecard['name']){
        this.setAttribute('src',thecard['img']);
        picturesPicked+=1;
        score()
        console.log(picturesPicked)
    }
    function score(){
        let uu=document.getElementById('result')
        if(picturesPicked== 2){
            myScore += 1;
            uu.innerHTML=`Score : ${myScore}`
            setVariables()
            setTimeout(()=>{
                startOver()
            },1000)
            
        }
    }
}

function cardToFind(){
    const card = document.createElement('img');
    card.setAttribute('src', thecard['img']);
    grid.append(card)
}




function startOver(){
    setVariables();
    grid.innerHTML='';
    gameInMotion=0;
    setTimeout(()=>{
        startGame()
    },1000)
}
function setVariables(){
    thecard = cards[1];
    gameInMotion = 0;
    picturesPicked = 0;
}