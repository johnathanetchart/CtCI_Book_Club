// Write a function to check if a linked list is a palindrome.

/*
Example:
ll1 = [1, 2, 3, 4, 5, 6] -> false
ll2 = [1, 2, 3, 2, 1] -> true
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

const isPalindrome = (head) => {
  let list = [];

  let current = head;

  while (current) {
    list.push(current.val);
    current = current.next;
  }
  let last = list.length - 1;

  for(let i = 0; i < list.length / 2; i++) {
    if(list[i] !== list[last - i]) {
      return false;
    }
  }
  return true;
};


module.exports = isPalindrome;
