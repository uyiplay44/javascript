const student = 'wisdom';
const school = 'uniben';
const course = 'data science';
const favoriteFood = 'firedrice';
const occupation = 'businessman';
const gender = 'male';
const age = 25;
const isAnHonestPerson = true;

console.log(student, school , course, favoriteFood, occupation, gender, age , isAnHonestPerson)

let studentDescription;

// 3. string concatenation//

console.log(student + " " + "is" + " " + "a" + " " + course + " " + "and is a" + " " + age + " " + "year old" + " " + gender);

console.log(+" " + "It is" + " " + isAnHonestPerson + " "  +"that" + " " + student + " " + "is " + "honest" + " " + "and" + " " + "a huge" + " " + favoriteFood + " " + "fan")


let studentDescription2;

console.log(`${student} is a ${course} and is a ${age} years old ${gender}. It is ${isAnHonestPerson} that ${student} is honest and is a huge ${favoriteFood} fans.`)