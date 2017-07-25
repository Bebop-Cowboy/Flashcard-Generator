var BasicCard = function (front, back) {
  this.front = front;
  this.back = back;
}
var card1 = new BasicCard ("tags that begin and end Javascript code within an HTML document?", "<script></script>")
//console.log (card1);

BasicCard.prototype.showFront = function (){
  console.log (this.front);
}
//card1.showFront ()

BasicCard.prototype.showBack = function (){
  console.log (this.back);
}
//card1.showBack ()

var card2 = new BasicCard ("allows the program to display a special dialog box that will notify the user that an expected event has occurred.",
"alert()")

var BasicCards = [card1, card2];
 for (var i = 0; i < BasicCards.length; i++){
   BasicCards [i].showFront()
   BasicCards [i].showBack ()
 }

module.exports = {BasicCard: BasicCard}
