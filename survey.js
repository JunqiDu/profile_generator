const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//1
rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`Thank you, ${answer}!`);

  rl.close();
});
//2
rl.question('What is an activity you like doing?', (answer) => {
  console.log(`${answer}? Sound great!`);

  rl.close();
});
//3
rl.question('What do you listen to while doing that?', (answer) => {
  console.log(`${answer}? Sound great!`);

  rl.close();
});
//4
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
  console.log(`${answer}? Sound great!`);

  rl.close();
});
//5
rl.question('What is your favourite thing to eat for that meal?', (answer) => {
  console.log(`${answer}? Sound great!`);

  rl.close();
});
//6
rl.question('Which sport is your absolute favourite?', (answer) => {
  console.log(`${answer}? Sound great!`);

  rl.close();
});
//7
rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
  console.log(`${answer}? Sound great!`);

  rl.close();
});