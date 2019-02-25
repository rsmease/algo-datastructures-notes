var numJewelsInStones = function (J, S) {
  const foundJewels = {};
  let currentJewel;
  let currentStone;
  let foundStonesThatAreJewels = 0;

  for (i = 0; i < J.length; i++) {
    currentJewel = J.charAt(i);
    foundJewels[currentJewel] = true;
  }

  for (j = 0; j < S.length; j++) {
    currentStone = S.charAt(j);
    if (foundJewels[currentStone] === true) {
      foundStonesThatAreJewels += 1;
    }
  }

  return foundStonesThatAreJewels;
};

var test = numJewelsInStones("aA", "aAAbbbb");

// NOTES:
// runtime: O(n) where n is S.length + J.lengrh
// memory: n where n is size of the foundJewels object
