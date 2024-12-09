// Game
/* Desc:
A fighting game with a least two fighters who can have a blow by blow fight,
 when they encounter each other. each blow will reduce the health,
 by up to their strength attribute if the hit hits.
They hit only if dexterity attribute,
 is used as a percentage chance of success. (what are the odds)
*/
// Nouns: People, Places, and Things
class Attr {
    constructor(name, value = 50) {
        this.name = name;
        this.value = value;
    }
};

class Fighter {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.attrList = [
            new Attr("strength"),
            new Attr("dexterity"),
        ];
    }
    status() {
        return `
        Name: ${this.name} 
        Health: ${this.health} 
        Str: ${this.attrList[0].value}
        Dex: ${this.attrList[1].value}
        `;
    }
    attack(who) {
        const myStr = this.attrList[0].value;
        const myDex = this.attrList[1].value;
        const theirDex = who.attrList[1].value;
        const chanceOfSuccess = (50 + (myDex - theirDex)) / 100;
        if (Math.random() >= chanceOfSuccess) {
            const damage =  Math.ceil(myStr * Math.random());
            who.health -= damage;
            return "The " + this.name + " hits the " + who.name + " for " + damage + " points of damage.";
        }
        return "The " + this.name + " missed the " + who.name + " doing no damage.";

    }
};

class FightingGame {
    constructor() {
        this.fighters = [
            new Fighter("Hero"),   // 0
            new Fighter("Villian") // 1
        ];
    }
    status() {
        return this.fighters.map(f => f.status()).join("\n-----")
    }
    fight(a, b) {
        const output = [];
        let victor = {};
        output.push("Fight " + a.name + " vs " + b.name);
        victor = new Fighter("No one");
        // Todo fight while both are alive
        while (a.health > 0 && b.health > 0) {
            // a tries to hit b
            output.push(a.attack(b));
            // b tries to hit a
            output.push(b.attack(a));
        };
        if (a.health > 0) {
            victor = a;
        }
        if (b.health > 0) {
            victor = b
        }
        output.push("Finish the " + victor.name + " Wins!!!");
        return output.join("\n");
    }
};
fg = new FightingGame();
console.log(fg.status());
console.log(fg.fight(fg.fighters[0], fg.fighters[1]));
console.log(fg.status());