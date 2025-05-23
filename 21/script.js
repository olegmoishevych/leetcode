//21. Merge Two Sorted Lists
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.
//
//
//
// Example 1:
//
//
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
//
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
//
// Input: list1 = [], list2 = [0]
// Output: [0]
//
//
// Constraints:
//
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// function mergeTwoLists (list1, list2) {
//   if (!list1 || !list2) return list1 || list2
//
//   let head
//
//   if (list1.val < list2.val) {
//
//     head = list1
//     head.next = mergeTwoLists(list1.next, list2)
//
//   } else {
//
//     head = list2
//     head.next = mergeTwoLists(list1, list2.next)
//
//   }
//
//   return head
// }
//
// console.log(mergeTwoLists([1,2,4], [1,3,4]))

//Дан массив предстоящих эвентов:
//
// ['holyjs', 'highload']
//
// Нужно найти в них общие буквы и вывести результат:
//
// // [ 'h', 'o', 'l' ]

const foo = (arr) => {
  const [arr1, arr2] = arr

  return arr1.filter((el) => arr2.includes(el));
}

console.log(foo(['holyjs', 'highload']))
