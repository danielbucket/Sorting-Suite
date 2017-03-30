import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

describe('TDD with bubbleSort', () => {

  it('should be a function', () => {

    assert.isFunction(bubbleSort);
  });

  it('should be able to return an array of letters', () => {
    let testArray = [5, 4, 7, 3, 6, 2, 1];

    assert.deepEqual(bubbleSort(testArray), [1, 2, 3, 4, 5, 6, 7]);
  });

  it('should be able to sort an array of letters', () => {
    let testArray = ['b', 'c', 'e', 'd', 'a'];

    assert.deepEqual(bubbleSort(testArray), ['a', 'b', 'c', 'd', 'e']);
  });
});
