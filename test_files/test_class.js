function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life++;
        this.life--;
        console.log(this.name + " gave " + targetPlayer.name + " a life")
    }
}

var sam = new User();
sam.name = "Sam";
var max = new User();
max.name = "Max";

sam.giveLife(max);
console.log(sam);
console.log(max);
console.log("\n")

User.prototype.upperCut = function upperCut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name +" has uppercutted "+targetPlayer.name)
};

max.upperCut(sam)
console.log(sam)
console.log(max)

console.log("\nAdded magic through prototype")
User.prototype.magic = 80;

console.log(sam.magic)
console.log(max.magic)
