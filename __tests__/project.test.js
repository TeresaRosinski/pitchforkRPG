import {createCharacter} from '../src/main.js';


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

});