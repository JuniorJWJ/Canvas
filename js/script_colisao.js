var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
//Constante que define o tamanho dos objetos
var SIZE = 50;
var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");
//Variáveis que controlarão a posição do objeto
var posX = posY = 50;
//Cor do bloco
var objColor = "#00f";
//Estabelece a posição do bloco no centro
var blockX = cnv.width/2 - 25;
var blockY = cnv.height/2 - 25;

var mvLeft = mvUp = mvRight = mvDown = false;

function updateBlock(){
    if(mvUp){
        posY--;
    }
    if(mvDown){
        posY++;
    }
    if(mvLeft){
        posX--;
    }
    if(mvRight){
        posX++;
    }
}

function colide(){
    if  (posX + SIZE > blockX		//Colisão direita
        && posX < blockX + SIZE 	//Colisão esquerda
        && posY + SIZE > blockY 	//Colisão por cima
        && posY < blockY + SIZE){	//Colisão por baixo
            objColor = "#f00";
    } else {
        objColor = "#00f";
    }
}

//Entrada de comandos
//Move o objeto
window.addEventListener("keydown",keydownHandler,false);

function keydownHandler(e){
    var key = e.keyCode;
    switch(key){
        case UP:
            mvUp = true;
            break;
        case DOWN:
            mvDown = true;
            break;
        case LEFT:
            mvLeft = true;
            break;
        case RIGHT:
            mvRight = true;
            break;
    }
}

window.addEventListener("keyup",keyUpHandler,false);
function keyUpHandler(e){
    var key = e.keyCode;
    switch(key){
        case UP:
            mvUp = false;
            break;
        case DOWN:
            mvDown = false;
            break;
        case LEFT:
            mvLeft = false;
            break;
        case RIGHT:
            mvRight = false;
            break;
    }
}


function draw(){
    ctx.clearRect(0,0,cnv.width,cnv.height);
    ctx.fillStyle = "#000"; // cor bloco 
    ctx.fillRect(blockX,blockY,SIZE,SIZE);
    ctx.fillStyle = objColor;
    ctx.fillRect(posX,posY,SIZE,SIZE);
}

function update(){
    updateBlock();
    colide();
    draw();
}

function loop(){
    update();
    window.requestAnimationFrame(loop, cnv);
}
loop();