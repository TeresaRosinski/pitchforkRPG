export function createCharacter (type, name, weapon, life) {
  let character = {
    type, 
    name, 
    weapon,
    life,
    gotAttacked (opposingCharacter) {
      let oppCharacter = opposingCharacter;
      let damage = incurredDamage(oppCharacter);
      character.life -= damage;
      if (character.life == 0) {
        return `You died`;
      };
      },

    talk: function () {
      return  `I, ${name} am the strongest ${type} in the land. Me and my ${weapon} will destory everything.`
    },
  }
  return character;
};


export function canIncurrDamage (opposingCharacter){
  if(opposingCharacter.type === "farmer") {
    return character.life - 1;}
  else if(opposingCharacter.type === "soldier"){
    return character.life - 3; }
  else if(opposingCharacter.type === "hero")
    {return character.life - 5;} 
  };

export function canAttack()
export function canDie()
export function canSpeakMessages()
export function canBeAFarmer() // remove type from original object and use a function to create types?
export function canHaveASword()
export function canHaveAPitchfork()
export function canHaveARifle()


// This creates function
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}
const stateControl = storeState();
// The above stores function


const storeState = (initialState) => { // stores the state of initialState
  let currentState = initialState; // can also be initialized as empty let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const player = storeState({life: 0, damage: 0, name: "string"}); // initializing the state so currentState = {life: 0, damage: 0, name: "string"};
const jobFarmer = changeState("life")(10); // changes currentstate to {life: 10, damage: 0, name: "string"}

// Singular prop for changing state
const changeStringState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : value
    }) 
  }
}

// Dual props for changing state
const changeTwoStateProps = (prop) => {
  return (prop2) => {
    return (value) => {
      return (value2) => {
        return (state) => ({
          ...state,
          [prop] : (state[prop] || 0) + value,
          [prop2] : (state[prop2] || 0) + value2
        }) 
      }
    }
  }
}
// Button for farmer = life/dmg and textbar.txt-> name
// changeTwoStateProps("life")(10)("damage")(1)


// player = {life: NaN, damage: NaN, name: "string"}
// const jobFarmer = changeState("life")(10) && changeState("damage")(1)
// jobFarmer(player) || Object { life: 10, damage: NaN, name: "string" }

// job = farmer{life:10, damage: 1}
// player = name
// let player = { life: 10, damage: 1, name: "Boba"} || let player = job{10, 1} + name
// const jobFarmer = changeState("life")(10)

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