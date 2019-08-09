const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromsied = require('chai-as-promised');
chai.use(chaiAsPromsied).should();

const Coffee = require('../models/coffee');

describe('Sanity Check', () => {
  it('Should be 2', () => {
    assert.equal(2, 1+1);
    expect(1 + 1).to.equal(2);
  });

});

describe('Coffee Model',  () => {
  it('Should be an instance of Coffee', async () => {
    const coffeeData = await Coffee.getById(3);
    console.log(coffeeData);
    expect(coffeeData).to.be.an.instanceOf(Coffee);
  });
});