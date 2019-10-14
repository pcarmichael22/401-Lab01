'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
const str = 'yes';
const num = 1;
const arr = ['a'];
const obj = {x:'y'};
const func = () => {};
const bool = false;

  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num || arr || obj || func || bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(num).toBeTruthy();
  });

  it('arrays', () => {
    expect(arr).toBeTruthy();
    expect(bool).toBeFalsy();
  });

  it('objects', () => {
    expect(obj).toBeTruthy();
    expect(bool).toBeFalsy();
  });

  it('booleans', () => {
    expect(bool).toBeFalsy();
  });

  it('functions', () => {
    expect(func).toBeTruthy();
  });

});


describe('validator module performs complex validations', () => {

  const person = {
    name: 'Randall',
    hair: 'green',
    height: 120,
    age: 30,
    married: true,
    kids: ['Jimmy','Kimmy']
  }

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(person.hair.color).toBeFalsy();
    expect(person.hair).toBeTruthy();
    expect(person.age).toStrictEqual(30);
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(typeof person.name).toStrictEqual('string');
    expect(typeof person.height).toStrictEqual('number');
    expect(typeof person.married).toStrictEqual('boolean');
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(typeof person.kids[0]).toStrictEqual('string');
    expect(typeof person.kids[1]).toStrictEqual('string');
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    let arrayValues = person.kids.includes('Jimmy')
    expect(arrayValues).toBeTruthy();
  });

  // // TODO: Cover so, so many more cases

});

