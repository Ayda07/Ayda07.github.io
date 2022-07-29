class Character {
    constructor(init, AC, HP){
        this.initiative = init;
        this.armor = AC;
        this.hitpoints = HP
    }
    draw(){
        var txt = "<div class='character'></div>"
    }
}

var characters = [];

function addCharacter(init, AC, HP) {
    characters.push(Character(init, AC, HP))
}