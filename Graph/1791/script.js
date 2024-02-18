//Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
// Example 2:
//
// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1

/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = (edges) => {
  let count = {}

  for (const [u, b] of edges) {
    count[u] = (count[u] || 0) + 1
    count[b] = (count[b] || 0) + 1
  }

  for (const key in count) {
    if(count[key] === edges.length){
      return key
    }
  }

};

console.log(findCenter([[1,2],[2,3],[4,2]]))
