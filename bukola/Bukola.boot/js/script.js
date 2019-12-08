

let body = document.querySelector("body");
let isRed = false;
setInterval( ()=>{
    if (isRed){
        body.style.backgroundColor = "white";
    }else{
        body.style.backgroundColor = "red";
    }
    isRed = !isRed
}, 1000);