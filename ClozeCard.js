var ClozeCard = function (text, cloze) {
  this.text = text.split(cloze);
  this.cloze = cloze;
};

var card1 = new ClozeCard ("an array simple collection similar objects that can accessed by a variable name/ index", "array")

var card2 = new ClozeCard ("a function segment of javascript code that can invoked or called, written by a programmer and may contain any number of javascript statements", "function")

var card3 = new ClozeCard ("Math.Random() function that generates random numbers with decimals", "Math.Random()")


 function ClozeCardPrototype () {
   this.clozeRemoved = function () {
     return `${this.text[0]} ... ${this.text[1]}`;
     console.log (this.clozeRemoved);
   };
 };

 ClozeCard.prototype = new ClozeCardPrototype ()

console.log (card1);
console.log (card2);
console.log (card3);

 module.exports = {ClozeCard:ClozeCard}
