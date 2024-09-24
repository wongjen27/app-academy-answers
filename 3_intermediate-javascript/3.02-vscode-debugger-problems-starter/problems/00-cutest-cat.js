/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  let cutest = 0;
  let i = 0;
  let cutestCat = {};

  while (i < cats.length) {
    const cat = cats[i];
    if (cat.cuteness > cutest) {
      cutest = cat.cuteness;
      cutestCat = cat
    }
    i++;
  }

  return cutestCat;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 15 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
