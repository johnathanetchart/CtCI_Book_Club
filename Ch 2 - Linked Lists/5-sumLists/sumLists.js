// You are given two numbers respresented by a linked list, where each node contains a single digit,. the digits are stored in reverse order, such t hat the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to "cheat" and just convert the linked list to an integer).

// Follow up suppose the digits are store din forward order. Repeat the same problem. To test go to the sumLists.test.js file and uncomment out the last test.

/*
Example:
ll1 = 7 -> 1 -> 6
ll2 = 5 -> 9 -> 2
617 + 295 = 912
output = 2 -> 1 -> 9

Follow up example:
ll1 = 6 -> 1 -> 7
ll2 = 2 -> 9 -> 5
617 + 295 = 912
output = 9 -> 1 -> 2
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/
function Node(val) {
  this.val = val;
  this.next = null;
}

const sumLists = (list1, list2) => {
  let sumOne = (list) => {
    let sum = 0;
    let digit = 1;
    let current = list;
    while (current) {
      sum += current.val * digit;
      digit *= 10;
      current = current.next;
    }
    return sum;
  };

  let sum = sumOne(list1) + sumOne(list2);

  let head = null;
  let current = null;
  while (sum !== 0) {
    if (head === null) {
      head = new Node(sum % 10);
      current = head;
    } else {
      current.next = new Node(sum % 10);
      current = current.next;
    }
    sum = (sum - (sum % 10)) / 10;
  }
  return head;
};

// Follow up
const sumLists2 = (list1, list2) => {
  let sumTwo = (list) => {
    let sum = 0;
    let current = list;
    while (current) {
      sum = (sum * 10) + current.val;
      current = current.next;
    }
    return sum;
  };
  let sum = sumTwo(list1) + sumTwo(list2);
  console.log('sum', sum);
  let digits = 10 ** (sum.toString().length - 1);
  let head = null;
  let current = null;
  while (sum !== 0) {
    if (head === null) {
      head = new Node((sum - sum % digits) / digits);
      current = head;
    } else {
      current.next = new Node((sum - sum % digits) / digits);
      current = current.next;
    }
    sum -= (sum - sum % digits);
    digits = digits / 10;
  }
  return head;
}

module.exports = { sumLists, sumLists2 };
