'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let j = 0; j < this.length - 1; j++) {
      for (let i = j + 1; i < this.length; i++) {
        const compare =
          arguments.length === 0
            ? (String(this[j]) > String(this[i])) - (String(this[j]) < String(this[i]))
            : compareFunction(this[j], this[i]);

        if (compare > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
