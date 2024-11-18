
document.getElementById("generate").addEventListener("click", () => {
   const quantity = parseInt(document.getElementById("number").value);
   const writingStyle = document.getElementById("writingStyle").value;
   const output = document.querySelector(".text-content");

   if(!quantity || !writingStyle) {
      output.textContent = "Please provide valid input";
      output.style.color = "red";
      output.style.width = "40%";
      output.style.fontSize = "12px";
      return;
   }

   if (quantity < 1 || quantity > 10) {
      output.textContent = "Please provide a number between 1 and 10.";
      return;
  }

   let result = '';
   switch (writingStyle) {
      case 'word':
         result = generateWord(quantity);
         document.querySelector(".text-content").style.color = "#D1495B";
         break;
      case 'sentence':
         result = generateSentence(quantity);
         document.querySelector(".text-content").style.color = "#219EBC";
         break;
      case 'paragraph': 
         result = generateParagraph(quantity);
         break;
      default:
         result = "invalid writing style";
   };

   output.textContent = result;
});

function generateWord(number) {
   const word = ["There.", "More.", "Couples.", "of.", "Sentences.", "Witness.", "the.", "greatness.", "veil", "is.", "removed.", "This.", "Keep.", "pushing.", "on.", "It.", "was.", "never.", "going.", "to.", "be.", "easy.", "Aluta.", "continua.", "more.", "like.", "You.", "can.", "get.", "same."];
   let output = [];
   for (let i = 0; i < number; i++) {
      output.push(word[Math.floor(Math.random() * word.length)]);
   }  

   return output.join(' ');
};


function generateSentence(number) {
   const sentence = ["There are more couples of sentences.", "Witness the greatness.", "The veil is removed this.", "Keep pushing.", "Keep on.", "It was never going to be easy.", "Aluta continua.", "There is more like it.", "You can get more of the same."];
   let output = [];
   for (let i = 0; i < number; i++) {
      output.push(sentence[Math.floor(Math.random() * sentence.length)]);
   }  

   return output.join(' ');
};

function generateParagraph(number) {
   let output = [];
   for(let i = 0; i < number; i++) {
      output.push(generateSentence(2));
   }
   return output.join("\n\n");
};