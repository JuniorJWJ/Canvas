var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
var mvLeft = mvUp = mvRight = mvDown = false;
var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");
var p1 = {
    x: 10,
    y: 10
}

update();

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e){
    var key = e.keyCode;
    if(key === LEFT && key !== RIGHT){
        mvLeft = true;
    }
    if(key === RIGHT && key !== LEFT){
        mvRight = true;
    }
    if(key === UP && key !== DOWN){
        mvUp = true;
    }
    if(key === DOWN && key !== UP){
        mvDown = true;
    }
}

function keyUpHandler(e){
    var key = e.keyCode;
    if(key === LEFT && key !== RIGHT){
        mvLeft = false;
    }
    if(key === RIGHT && key !== LEFT){
        mvRight = false;
    }
    if(key === UP && key !== DOWN){
        mvUp = false;
    }
    if(key === DOWN && key !== UP){
        mvDown = false;
    }
} 

function move(){
    if(mvLeft){
        p1.x--;
    }
    if(mvRight){
        p1.x++
    }
    if(mvUp){
        p1.y--;
    }
    if(mvDown){
        p1.y++
    }
}

function render(){
    ctx.clearRect(0,0,cnv.width, cnv.height);
    ctx.fillRect(p1.x, p1.y, 50, 50)
}
function update(){
    requestAnimationFrame(update, cnv);
    move();
    render();
}