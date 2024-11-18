
document.getElementById("generate").addEventListener("click", () => {
   const quatity = parseInt(document.getElementById("number").value);
   const writingStyle = document.getElementById("writingStyle").value;
   const output = document.querySelector("text-content");

   if(!quatity || !writingStyle) {
      output.textContent = "Please provide valid input";
      return;
   }

   let result = '';
   switch (writingStyle) {
      case 'word':
         result = generateWord(quatity);
         // document.querySelector("h1 .word").style.color = "#000"
         break;
      case 'sentence':
         result = generateSentence(quatity);
         break;
      case 'paragraph': 
         result = generateParagraph(quatity);
         break;
      default:
         result = "invalid writing style";
   };

   output.textContent = result;
});

function generateSentence(number) {
   const word = ["There", "more", "couples", "of", "sentences", "Witness", "the", "greatness", "veil", "is", "removed", "this", "Keep", "pushing", "on", "It", "was", "never", "going", "to", "be", "easy", "Aluta", "continua", "more", "like", "You", "can", "get", "same"];
   let output = [];
   for (let i = 0; i < number; i++) {
      output.push(word[Math.floor(Math.random() * word.length)]);
   }  

   return output.join(' ');
}


function generateSentence(number) {
   const sentence = ["There are more couples of sentences", "Witness the greatness", "The veil is removed this", "Keep pushing", "Keep on", "It was never going to be easy", "Aluta continua", "There is more like it", "You can get more of the same"];
   let output = [];
   for (let i = 0; i < number; i++) {
      output.push(sentence[Math.floor(Math.random() * sentence.length)]);
   }  

   return output.join(' ');
}

function generateParagraph(number) {
   let output = [];
   for(let i = 0; i < number; i++) {
      output.push(generateSentence(2));
   }
   return output.join("\n\n");
};