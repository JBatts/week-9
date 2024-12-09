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
    getValue(attrName) {
        const a = this.attrList.find(a => a.name.toLowerCase() === attrName.toLowerCase());
        return a ? a.value : 0;
    }
    setValue(attrName, value) {
        const a = this.attrList.find(a => a.name.toLowerCase() === attrName.toLowerCase());
        a.value = value;
    }
    attack(who) {
        const myStr = this.getValue("strength");
        const myDex = this.getValue("dexterity");
        const theirDex = who.getValue("dexterity");
        const chanceOfSuccess = (50 + (myDex - theirDex)) / 100;
        if (Math.random() >= chanceOfSuccess) {
            const damage = Math.ceil(myStr * Math.random());
            who.health -= damage;
            return this.name + " hits " + who.name + " for " + damage + " points of damage.";
        }
        return this.name + " missed " + who.name + " doing no damage.";
        
    }
};

class Hero extends Fighter {
    constructor(name) {
        super(name);
        // Give Hero the Advantage
        this.health = 200;
        this.setValue("strength", 75);
        this.setValue("dexterity", 75);
    }
};

class FightingGame {
    constructor(fighters) {
        this.fighters = fighters;
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
        output.push("Finish " + victor.name + " Wins!!!");
        return output.join("\n");
    }
};

// Testing
const hero = new Hero("Hero");
const villian = new Fighter("Villian");

const fg = new FightingGame([hero, villian]);
console.log(fg.status());
console.log(fg.fight(hero, villian));
console.log(fg.status());