import { assert } from 'chai';
import mergeSort from '../scripts/mergeSort';

describe('TDD with mergeSort', () => {

  it('should be a function', () => {

    assert.isFunction(mergeSort);
  });

  it('should be able to return an ordered array of numbers', () => {
    let testArray = [5, 4, 7, 3, 6, 2, 1];

    assert.deepEqual(mergeSort(testArray), [1, 2, 3, 4, 5, 6, 7]);
  });

  it('should be able to sort an array of letters', () => {
    let testArray = ['b', 'c', 'e', 'd', 'a'];

    assert.deepEqual(mergeSort(testArray), ['a', 'b', 'c', 'd', 'e']);
  });
});
