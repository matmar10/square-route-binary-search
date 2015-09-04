'use strict';

// fix floating point math or perfect squares will never work
var Big = require('big.js');

module.exports = function (x) {

    console.log('Finding for ', x);

    x = new Big(x);

    var start, end, mid, guess,
    precision = new Big(0.000000001);

    if (x < 0) {
      throw new Error('Cannot calculate sqrt for negative numbers');
    }

    if (x.eq(0) || x.eq(1)) {
      return x.valueOf();
    }

    start = new Big(0);
    end = new Big(x);

    // the other trick!
    // less than one search space starting point is different
    if(x.lt(1)) {
      start = new Big(x);
      end = new Big(1);
     }

    // this is the trick; don't keep searching forever
    while (end.minus(start).gte(precision)) {

      // mid = (start + end) / 2;
      mid = start.plus(end).div(2);
      // console.log('Mid: ', mid.toString());
      guess = mid.times(mid);
      // console.log('Guess: ', guess.toString());

      // exact match
      if (guess.eq(x)) {
        // console.log('Guess eq x');
        return guess.valueOf();
      }

      // need to search larger half
      if (guess.lt(x)) {
        // console.log('Guess < x');
        // console.log('New end minus start: ', end.minus(start).toString());
        start = mid;
        continue;
      }

      // console.log('Guess > x');
      // need to search smaller half
      // e.g. guess > x
      end = mid;

      // console.log('New end minus start: ', end.minus(start).toString());
    }

    // console.log('End minus start: ', end.minus(start).toString());

  // good enough guess
  // console.log('Guess good enough:');
  return start.plus(end).div(2).valueOf();
};
