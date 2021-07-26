// Inicial Data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};
let player = '';
let warning = '';
let playing = false;

reset();

//Events
document.querySelector('.reset').addEventListener('click',reset);




//Functions
function reset() {
    warning = '';

    let random = Math.floor(Math.random() * 2);
    //if random is 0 then x, else o
    player = (random === 0) ? 'x' : 'o';
    //clealing the square, but not visually
    for(let i in square) {
        square[i] = '';
    }
    
    playing = true;
    
    renderSquare();
    renderInfo();
}

function renderSquare(){
    for(let i in square) {
        //getting each item of the table 1 by 1
        let item = document.querySelector(`div[data-item=${i}]`)    
        item.innerHTML = square[i];
    }
}
function renderInfo(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;


}