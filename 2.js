
let b = document.querySelector("#button");
document.querySelector("body").style.transition = "background-color 3s ease, color 4s ease, background-size 1s ease";
document.querySelector("body").style.color = "black"; 
document.querySelector("body").style.backgroundSize = "0% 100%";  
document.querySelector("body").style.backgroundImage = "none";
const elements = document.querySelectorAll("header, nav, section, footer, h1, h2, p, a, button");
elements.forEach(ele => {
    if(ele!==b){
        ele.style.opacity = 0;  
    }
    ele.style.transition = "opacity 2s ease, color 2s ease"; 
});
b.addEventListener("click", () => {
    b.classList.add("hidden");
    document.body.style.color = "white";
    document.querySelector("body").style.backgroundImage = "url('nasa.jpg')"; 
    document.querySelector("body").style.backgroundSize = "100% 100%";  
    elements.forEach(ele => {
        ele.style.color = "white";
        ele.style.opacity = 1;
    });
});


