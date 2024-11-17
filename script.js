const button = document.getElementById("generate");
button.addEventListener("click", generateContent())

function generateContent() {
   const paragraph = document.querySelector("para");
   paragraph.textContent = "lorem";   
}

generateContent();