const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [] for ['Yo Yo']", () => {
    assert.deepEqual(tail(['Yo Yo']), []);
  });

  it("returns ['she', 'said] for ['That's what', 'she', 'said']", () => {
    assert.deepEqual(tail(["That's what", "she", "said"]), ['she', 'said']);
  });

  it("returns [3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});



