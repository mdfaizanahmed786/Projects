console.log("Hello world")

const menu=document.querySelector(".hamBurger");
const sideBar=document.querySelector(".side-section");

menu.onclick=function(){
    sideBar.classList.toggle('show');
    if(sideBar.classList.contains("show"))
    document.body.style.overflow="hidden";

    else
    document.body.style.overflowY="scroll";


}


// document.body.onclick=function(e){
//     if(e.target.id!=="sidebar" && e.target.id===""){
//         sideBar.classList.remove("show")
//     }
// }