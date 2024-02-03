//Example 1:
//
// Input: costs = [1,3,2,4,1], coins = 7
// Output: 4
// Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.
// Example 2:
//
// Input: costs = [10,6,8,7,7,8], coins = 5
// Output: 0
// Explanation: The boy cannot afford any of the ice cream bars.
// Example 3:
//
// Input: costs = [1,6,3,1,2,5], coins = 20
// Output: 6
// Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = (costs, coins) => {
  let sortedCosts = costs.sort((a,b) => a - b)
  let countOfBueCost = 0
  let totalCost = 0

  for (let i = 0; i < sortedCosts.length; i++) {
    if(totalCost + sortedCosts[i] <= coins){
      totalCost += sortedCosts[i]
      countOfBueCost++
    }
  }

  return countOfBueCost
}

console.log(maxIceCream([7,3,3,6,6,6,10,5,9,2], 56))
