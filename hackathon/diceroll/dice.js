let para;
let num;
function rollDice() {
    num = Math.floor(Math.random() * 6) + 1;
    para = document.getElementById("demo");
    para.innerHTML = num;
    switch (num) {
        case 1:
            document.getElementById("myImg").src = "dice1.jpg";
            break;
        case 2:
            document.getElementById("myImg").src = "dice2.jpg";
            break;
        case 3:
            document.getElementById("myImg").src = "dice3.jpg";
            break;
        case 4:
            document.getElementById("myImg").src = "dice4.jpg";
            break;
        case 5:
            document.getElementById("myImg").src = "dice5.jpg";
            break;
        case 6:
            document.getElementById("myImg").src = "dice6.jpg";
            break;
        default:
            break;
   }
}
