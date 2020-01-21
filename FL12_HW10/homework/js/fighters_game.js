function Fighter(prop) {
    const name = prop.name,
    damage = prop.damage,
    totalHp = prop.hp,
    strength = prop.strength,
    agility = prop.agility,
    HUNDRED = 100;
    let win = 0,
    loss = 0,
    currentHp = prop.hp;
    this.getName = function() {
        return name;
    };
    this.getDamage = function() {
        return damage;
    };  
    this.getHealth = function() {
        return currentHp;
    };
    this.getStrength = function() {
        return strength;
    };
    this.getAgility = function () {
        return agility;
    };
    this.attack = function(defender) {
        let attackMiss = defender.getStrength() + defender.getAgility();
        let attackRandom = Math.random() * HUNDRED;
        if (attackRandom > attackMiss) {
            defender.dealDamage(damage);
            console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${name} attack missed`);
        }
    };
    this.logCombatHistory = function() {
        console.log(`Name: ${name}, Wins: ${win}, Losses: ${loss}`);
    };
    this.heal = function(addHeal) {
        currentHp = currentHp >= totalHp ? totalHp : currentHp + addHeal;
    };
    this.dealDamage = function(addDamage) {
        currentHp = currentHp - addDamage < 0 ? 0 : currentHp - addDamage;
    };
    this.addWin = function() {
        win++;
    };
    this.addLoss = function() {
        loss++;
    };
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight`);
    } else if (secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getName()} is dead and can't fight`);
    } else {
        while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
            firstFighter.attack(secondFighter);
            if (secondFighter.getHealth() > 0) {
                secondFighter.attack(firstFighter);
            }
        }
        let winFighter = firstFighter.getHealth() === 0 ? secondFighter : firstFighter;
        let lossFighter = firstFighter.getHealth() === 0 ? firstFighter : secondFighter;
        lossFighter.addLoss();
        winFighter.addWin();
        console.log(`${winFighter.getName()} has won!`);
    }
}

/*const firstFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const secondFighter = new Fighter({name: 'Commodus', damage: 20, hp: 90, strength: 20, agility: 15});
battle(firstFighter, secondFighter);

secondFighter.heal(30);
secondFighter.getHealth();
firstFighter.logCombatHistory();
secondFighter.getStrength();*/