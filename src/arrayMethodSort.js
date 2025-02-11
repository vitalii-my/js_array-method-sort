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
            ? (String(this[j]) > String(this[i])) -
            (String(this[j]) < String(this[i]))
            : compareFunction(this[j], this[i]);

        if (compare > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
    /*  if (this.length <= 1) {
      return this;
    }

    const pivot = this[this.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < this.length - 1; i++) {
      const compare = compareFunction
        ? compareFunction(this[i], pivot)
        : +(String(this[i]) > String(pivot)); // Порівнюємо рядково 

     if (compare > 0) {
        right[right.length] = this[i];

      } else {
        left[left.length] = this[i];
      }
    }

    this.length = 0;
    this.push(...left.sort2(compareFunction),
     pivot,
     ...right.sort2(compareFunction));
     
    return this; */
  };
}

module.exports = applyCustomSort;
