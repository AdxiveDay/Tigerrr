let triangleOpen = document.getElementById("triangleOpen")
let button = document.getElementById("button")
let triangle = document.getElementById("triangle")
let Picture = document.getElementById("Pic")
let Card = document.getElementById("Card")

function OpenLetter() {
    if (triangleOpen.style.display === "none" || triangleOpen.style.display === "") {
        triangleOpen.style.display = "block"
        triangle.style.borderTopColor = "rgb(188, 188, 188)"
        triangleOpen.style.animation = "OpenLetter 0.3s ease-in-out"
        
        setTimeout(() => {
            Picture.style.display = "block"
            Picture.style.animation = "POPup 0.5s ease-in-out"
        }, 500);

        setTimeout(() => {
            Card.style.display = "block"
            Card.style.animation = "FadeIn 2s ease-in-out"
        }, 1000);
    }   
    else {
        triangleOpen.style.animation = "CloseLetter 0.3s ease-in-out forwards";
        triangle.style.borderTopColor = "rgb(220, 220, 220)";
        
        Card.style.animation = "FadeOut 0.3s ease-in-out"

        setTimeout(() => {
            triangleOpen.style.display = "none";
            Card.style.display = "none"
        }, 300);
    }
} 

button.addEventListener("click", OpenLetter)