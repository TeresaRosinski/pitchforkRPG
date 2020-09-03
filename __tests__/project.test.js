import {createCharacter} from '../src/main.js';
import {incurredDamage} from '../src/main.js';


describe('character', () => {
  test('should make an instance of new character', () => {
    const newCharacter = createCharacter("Farmer",  "Boba", "Pitchfork", 10);
    expect(newCharacter).toMatchObject({type: "Farmer", name: "Boba", weapon: "Pitchfork", life: 10});
    });


describe('talk', () => {
  test('should make an instance of the character talking', () => {
    const newCharacter = createCharacter("Farmer",  "Boba", "Pitchfork", 10);
    expect(newCharacter.talk()).toEqual("I, Boba am the strongest Farmer in the land. Me and my Pitchfork will destory everything.");
    });
  });

   describe('gotAttacked', () => {
    test('should make an instance of the character losting life points', () => {
      var newCharacter = createCharacter("Farmer",  "Boba", "Pitchfork", 10);
      newCharacter.gotAttacked(2); // reduce -> reddmg 
      expect(newCharacter.life).toEqual(8);
      });
    });

    /*
    describe('getdied', () => {
      test('should result in suffering', () => {
        var newCharacter = createCharacter("Farmer", "Boba", "Pitchfork", 10);
        newCharacter.gotAttacked(redDmg);
        expect(newCharacter.life).toBe(0);
      });
    }); */

    describe('did the damage occur', () => {
      test('Oh no it did', () => {
        var newCharacter = createCharacter("Farmer", "Boba", "Pitchfork", 10);
        var newerCharacter = createCharacter("Farmer", "Staple", "Pitchfork", 10);
        newCharacter.gotAttacked(newerCharacter);
        expect(newCharacter.life).toBe(9);        
      })
    });    
});

