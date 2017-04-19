const randomWords = require('random-words');

const values = [];
for (let i = 0; i < 40; i++) {
  values.push({
    name: {
      value: randomWords({
        min: 2,
        max: 8,
      }).join(' '),
    },
  });
}

console.log(JSON.stringify(values));
