let myFunction = () => {
    let x = document.querySelector("#myTopnav");
    if (x.className === "topnav"){
        x.className += "reponsive";
    }else{
        x.className = "topnav";
    }
}