const fizzbuzz = require('../src/fizzbuzz');
const assert = require('assert');

it('should return 1', () => {
  assert.equal(fizzbuzz(1), 1)
})

it('should return "Fizz"', () => {
  assert.equal(fizzbuzz(3), 'Fizz')
})

it('should return "Buzz"', () => {
  assert.equal(fizzbuzz(5), 'Buzz')
})

it('should return "Fizz Buzz"', () => {
  assert.equal(fizzbuzz(15), 'Fizz Buzz')
})

it('should return "Fizz"', () => {
  assert.equal(fizzbuzz(21), 'Fizz')
})

it('should return "Buzz"', () => {
  assert.equal(fizzbuzz(25), 'Buzz')
})

it('should return "Fizz Buzz"', () => {
  assert.equal(fizzbuzz(60), 'Fizz Buzz')
})