export const isAcharacter = function createCharacter (name) {
  let character = {
    name, 
  }
  return character;
};

//used to become a specific character
const isAFarmer = function (character){
  return {
    ...isAcharacter,
    type: 'Farmer', 
    weapon: 'pitchfork',
    life: 10,
    damagePower: 1
  }
  return obj;
}
const chosenCharacter = function(name) {
  let state = {
    name
  }

  return { ...state, ...isAFarmer() };
}


function canBeASpecificCharacter(characterType) {
    if(characterType === "farmer"){
      const objCharType = {
      type: farmer, 
      weapon: pitchfork,
      life: 10,
      damagePower: 1
      }
    }
    else if(characterType === "soldier"){
      const objCharType= {
      type: soldier,
      weapon: knife, 
      life: 20, 
      damagePower: 2 
      }
    }
    else if(characterType === "hero"){
      const objCharType = {
      type: hero,
      weapon: gun, 
      life: 30, 
      damagePower: 5
      }
    }
    return objCharType; 
  }
 

//Used to talk about properties a character has
const canTalkAboutSelf = function(character){
  const obj = {
    talk: function (){
      return  `I, ${name} am the strongest ${type} in the land. Me and my ${weapon} will destory everything.`
    }
  }
  return obj; 
}



gotAttacked (opposingCharacter) {
  let oppCharacter = opposingCharacter;
  let damage = incurredDamage(oppCharacter);
  character.life -= damage;
  }, // define outside of createCharacter
talk: function () {
  return  `I, ${name} am the strongest ${type} in the land. Me and my ${weapon} will destory everything.`
}
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
