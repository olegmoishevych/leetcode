//Return the integer denoting the number of employees who worked at least target hours.
// Example 1:
// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.
// Example 2:
//
// Input: hours = [5,1,4,2,2], target = 6
// Output: 0
// Explanation: The company wants each employee to work for at least 6 hours.
// There are 0 employees who met the target.
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
// const numberOfEmployeesWhoMetTarget = function(hours, target) {
//   let result = []
//
//   for (let i = 0; i < hours.length; i++) {
//     if(hours[i] >= target){
//       result.push(hours[i])
//     }
//
//   }
//
//   return result.length || 0
//
// };

// const numberOfEmployeesWhoMetTarget = (h, t) => h.filter((el) => el >= t).length

const numberOfEmployeesWhoMetTarget = (hours, target) => {
   let sum = 0

  for (let i = 0; i < hours.length; i++) {
     if(hours[i] >= target){
       sum += 1
     }
  }

  return sum
}

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 3))
