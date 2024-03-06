function run(){

let taskbar =document.getElementsByClassName("taskbar")[0]
let startmenu =document.getElementsByClassName("startmenu")[0]
if(startmenu.style.bottom !="49px"){
    startmenu.style.bottom="49px"
}
else{
    startmenu.style.bottom ="-503px"
}
console.log("hss")
}