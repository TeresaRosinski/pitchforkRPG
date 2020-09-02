/*
Characters + Properties -- Attack
1- Fighters
  Type: 
  Name:
  Weapon: pitchfork
  hay

2 - Monster
3-
Character Class
Type | Crop, wolf, bandit, etc
Name | Chungus the chubby bandit
Weapon | Dirty fingernails
Life | 20

goal: create two characters that can kill each other

Functionality
*/

const { type } = require("jquery");


// class Player {
// weapon | Pitchfork + 2 to damage
// job | Farmer, double damage to crops and wolves
// level | damage = (level/10)+1, so level 3 = 0.3+1 for 1.3* damage
// }


export function createCharacter (type, name, weapon, life) {
  let character = {
    type, // if key and value are the same you don't need to specify value
    name, 
    weapon,
    life,
    gotAttacked (opposingCharcter) {
      //opposingCharcter.incurredDamage();
      damage = incurredDamage(opposingCharacter);
      character.life -= damage;
      },
    talk: function () {
      return  `I, ${name} am the strongest ${type} in the land. Me and my ${weapon} will destory everything.`
    }
  }
  return character;
};

export function incurredDamage (opposingCharacter){
  if(opposingCharacter.type === "farmer") {
    return 1;}
  else if(opposingCharacter.type === "soldier"){
    return 3; }
  else if(opposingCharacter.type === "hero")
    {return 5;} 
  };



// Pitchfork || 2
// Sword || 5
// Rifle || 10 but no strength bonus
/*
const weaponStrength = [{type: pitchfork, strength : 2}, {type: sword, strength: 5}, {type: rifle, strength: 10}];
const characterStrength = [{farmer: 1}, {soldier: 3}, {hero: 5}];

///characterStrength[positionInArray.Name]



const characterHealth = [{farmer: 10}, {soldier: 40}, {hero: 100}];

//final damage * (1 +.1 per level)
// sources of dmg {fork: 2pitchf, strength: 3, farmer: 1, level: 4} -> current health - dmg[1]
// armor of 2 || currentHealth -= (dmg[1] - armor)
const damageArray = [weaponStrength.${weaponType}.damage + characterStrength.${}];
const damageCaused = numArray.reduce(function(currentValue, element) {
  return element + currentValue;  //3 + 0 = 3
  //3 + 7 ==10
  // 10 + 5 = 15
}, 0);

const charactersDamage= {
  characterType: farmer, 
  withPitchfork: 
}

// Farmer: Damage = 1, obtain pitchfork +2 damage, damage=322222
let incomingDamage = [3, 7, 5]; // Weapon, Strength, Job, Level

const summedArray = numArray.reduce(function(currentValue, element) {
  return element + currentValue;
}, 0);

console.log(weaponStrength.pitchfork); */