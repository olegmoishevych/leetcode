//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

//[]                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  // if(!names.length) return "no one likes this"
  //
  // for (let i = 0; i < names.length; i++) {
  //
  //   if(names.length === 1) {
  //     return `${names[i]} likes this`
  //   }
  //
  //   if(names.length === 2){
  //     return `${names[0]} and ${names[1]} like this`
  //   }
  //
  //   if(names.length === 3){
  //     return `${names[0]}, ${names[1]} and ${names[2]} like this`
  //   }
  //
  //   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  //
  // }

  // const lengthOfNames = names.length
  //
  // if(!lengthOfNames) return "no one likes this"
  // if (lengthOfNames === 0) return "no one likes this";
  // if (lengthOfNames === 1) return `${names[0]} likes this`;
  // if (lengthOfNames === 2) return `${names[0]} and ${names[1]} like this`;
  // if (lengthOfNames === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  //
  // return `${names[0]}, ${names[1]} and ${lengthOfNames - 2} others like this`;

  const length = names.length;

  switch (length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }

}

console.log(likes(['Peter', 'Oleg', 'Natalia', 'Stepan', 'Anatoliy'] ) )
