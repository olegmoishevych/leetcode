//1
const text = "The quick brown fox jumps over the lazy dog.";
const newText = text.replace(/o/g, "0");
console.log(newText); // "The quick br0wn f0x jumps 0ver the lazy d0g."

//2
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const email = "example@example.com";
console.log(emailPattern.test(email)); // true

//3
const text = "There are 3 apples, 7 bananas, and 42 cherries.";
const numbers = text.match(/\d+/g);
console.log(numbers); // ["3", "7", "42"]

//4
const text = "The quick brown fox jumps over the lazy dog.";
const wordPattern = /\bfox\b/;
console.log(wordPattern.test(text)); // true

//5
const text = "The quick brown fox jumps over the lazy dog.";
const newText = text.replace(/\s/g, "_");
console.log(newText); // "The_quick_brown_fox_jumps_over_the_lazy_dog."
