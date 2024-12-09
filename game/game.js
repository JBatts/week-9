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
}

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
};

class FightingGame {
    constructor() {
        this.fighters = [
            hero = new Fighter("hero"),      // 0
            villian = new Fighter("villian") // 1
        ];
    }
    status() {
        return this.name
    }
};
fg = FightingGame();
console.log(fg.status());