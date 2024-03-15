//Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array
const countSmileys = (arr) => {
  const validSmileys = /^[:;][-~]?[)D]$/;
  let count = 0;

  for (const smiled of arr) {
    if(validSmileys.test(smiled)) {
      count++;
    }
  }

  return count;
}


console.log(countSmileys([':)', ';(', ';}', ':-D']))

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
