let brush_color = "black";
// let hold_checker = false;

function color(div){
    div.target.style.backgroundColor = brush_color;
}

function reset(){
    let canvas = document.querySelectorAll(".grid-items");
    canvas.forEach((pixel)=>{
        pixel.style.backgroundColor = "white";
    });
   
}

function options(button){
    console.log(button.target);
    if(button.target.id == "white"){
        brush_color = "white";
    }
    else if(button.target.id == "black"){
        brush_color = "black"   ;
    }
    else{
        reset();
    }
}

const buttons = document.querySelectorAll(".w");
buttons.forEach((button)=>{
    button.addEventListener('click',options);
});
// window.addEventListener('onmousedown',()=>{
//     hold_checker = true;
// });
// window.addEventListener('onmouseup',()=>{
//     hold_checker = false;
// });
let divs = document.querySelectorAll(".grid-items");
divs.forEach((div)=>{
    div.addEventListener('mouseover',color);
});