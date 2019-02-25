var subdomainVisits = function (cpdomains) {
  const frequencyMap = {}
  let splitCountFromDomains, count, domain;

  cpdomains.forEach(cpdomain => {
    splitCountFromDomains = cpdomain.split(" ");

    count = parseInt(splitCountFromDomains[0], 10);
    domain = splitCountFromDomains[1];

    // iterate over subdomains
    while (domain.includes(".")) {
      updateFrequency(frequencyMap, domain, count);

      // reassign domain to next level parent
      domain = domain.slice(domain.indexOf('.') + 1)
    }

    // update top-level domain, too
    updateFrequency(frequencyMap, domain, count);
  })


  // turn frequency Map into Array of strings
  const result = Object.keys(frequencyMap);
  return result.map(key => frequencyMap[key].toString() + " " + key);

};

var updateFrequency = (map, domain, count) => {
  if (map[domain]) {
    map[domain] += count;
  } else {
    map[domain] = count;
  }
  return undefined;
}

var test = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]

console.log(subdomainVisits(test))

// NOTES:
// runtime: O(n) where n 2 * length of all cpdomain strings
// memory: n where n is size of frequency and resulting array (effectively the number of total unique domains found in the strings)
