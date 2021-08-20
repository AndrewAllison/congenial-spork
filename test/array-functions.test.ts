import { compare } from '../src';

describe('array-functions', () => {
  it('should sort and array', () => {
    const unsortedArray = [
      { order: 0, name: 'item 1' },
      { order: 2, name: 'item 3' },
      { order: 1, name: 'item 2' },
    ];
    const resultsArray = unsortedArray.sort((a, b) =>
      compare(a, b, 'order', 'desc'),
    );
    expect(resultsArray[0].name).toEqual('item 1');
    expect(resultsArray[1].name).toEqual('item 2');
    expect(resultsArray[2].name).toEqual('item 3');
  });

  it('should sort and array ascending', () => {
    const unsortedArray = [
      { order: 0, name: 'item 1' },
      { order: 2, name: 'item 3' },
      { order: 1, name: 'item 2' },
    ];
    const resultsArray = unsortedArray.sort((a, b) =>
      compare(a, b, 'order', 'asc'),
    );
    expect(resultsArray[2].name).toEqual('item 1');
    expect(resultsArray[1].name).toEqual('item 2');
    expect(resultsArray[0].name).toEqual('item 3');
  });
});
