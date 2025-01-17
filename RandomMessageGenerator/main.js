/* Project Plan

* Goal: Build a message generator program using JavaScript
* Topic: Basketball

*/

let str1 = ['Your favorite basketball player', 'Your favorite hooper', 'Your favorite baller'];
let str2 = [' is Chris Paul', ' is Steph Curry', ' is Ja Morant', ' is LeBron James', ' is Jayson Tatum', ' is Kevin Durant', ' is Nikola Jokic', ' is Anthony Davis', ' is Giannis Antetokounmpo'];
let str3 = [' because he is a good shooter.', ' because he is a good passer.', ' because he is a good rebounder.', ' because he is a good leader.', ' because he is a good teammate.'];

function createString() {
    let finalString = '';
    finalString = str1[Math.floor(Math.random()*3)];
    finalString = finalString + str2[Math.floor(Math.random()*9)];
    finalString = finalString + str3[Math.floor(Math.random()*5)];
    console.log(finalString);
}

createString();