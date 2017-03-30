import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort';

describe('TDD with insertionSort', () => {

  it('should be a function', () => {

    assert.isFunction(insertionSort);
  });

  it('should be able to return an array of numbers', () => {
    let testArray = [5, 4, 7, 3, 6, 2, 1];

    assert.deepEqual(insertionSort(testArray), [1, 2, 3, 4, 5, 6, 7]);
  });

  it('should be able to sort an array of letters', () => {
    let testArray = ['b', 'c', 'e', 'd', 'a'];

    assert.deepEqual(insertionSort(testArray), ['a', 'b', 'c', 'd', 'e']);
  });
});
