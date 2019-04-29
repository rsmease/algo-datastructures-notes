// Given a string s and a list of strings dict, you need to add a closed pair of
// bold tag <b> and </b> to wrap the entrystrings in s that exist in dict. If two
// such entrystrings overlap, you need to wrap them together by only one pair of
// closed bold tag. Also, if two entrystrings wrapped by bold tags are
// consecutive, you need to combine them.

// Example 1:
// Input:
// s = "abcxyz123"
// dict = ["abc","123"]
// Output:
// "<b>abc</b>xyz<b>123</b>"

// Example 2:
// Input:
// s = "aaabbcc"
// dict = ["aaa","aab","bc"]
// Output:
// "<b>aaabbc</b>c"
// Note:

// The given dict won't contain duplicates, and its length won't exceed 100.
// All the strings in input have length in range [1, 1000].

const addBoldTag = (s, dictionary) => {

  // this works like a set, tracking which indices need to tagged bold
  // I tried the new Set() approach, but it consumed slighly more memory
  const indicesToTag = new Array(s.length).fill(0);

  // look at each entry, scan through the string to figure out what needs to be
  // bolded; good news: this will automaticaly handle the overlap problem!
  let currentIndex, scanForNext;
  for (let entry of dictionary) {
    currentIndex = -1;
    scanForNext = () => currentIndex = s.indexOf(entry, currentIndex + 1);

    scanForNext();
    while (currentIndex !== -1) {
      for (let i = currentIndex; i < currentIndex + entry.length; i++) {
        indicesToTag[i] = 1;
      }
      scanForNext();
    }
  }

  // these variables and helper methods just make the process below more
  // readable; I recommend reviewing lines 63 - 74 and then reviewing these
  const tags = {
    "open": "<b>",
    "closed": "</b>"
  }

  let isOpenTag = false;
  const tagState = () => isOpenTag ? "open" : "closed"
  const toggleTagState = () => {
    isOpenTag = !isOpenTag;
  }

  let result = '';
  let currentChar, startBoldKeyword, endBoldKeyword;

  for (let i = 0; i < s.length; i++) {
    currentChar = s[i];

    // we start a bold word when the index is flagged as 'needs bold' and our
    // helper variable is not in a bold state
    startBoldKeyword = indicesToTag[i] && !isOpenTag;

    // we end a bold word when the index is not flagged as 'needs bold' and our
    // helper variable is in a bold state
    endBoldKeyword = !indicesToTag[i] && isOpenTag;

    if (startBoldKeyword || endBoldKeyword) {
      toggleTagState();
      result += tags[tagState()];
    }

    result += currentChar;
  }

  // final check to close out the open tag at the end of the string, if its
  // currently in an open state
  if (isOpenTag) {
    toggleTagState();
    result += tags[tagState()];
  }

  return result;
}

const tests = new Set();
tests.add(["abcxyz123", ["abc", "123"]]);
tests.add(["aaabbcc", ["aaa", "aab", "bc"]]);

tests.forEach((test) => console.log(addBoldTag(...test)))
