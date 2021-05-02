// Write code to remove duplicates from an unsorted linked list.

// Follow up: To reduce space complexity How would you solve this problem if a temporary buffer is not allowed? What does this do to time complexity?

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

function removeDups(head) {
  let counts = {};
  let todelete = [];
  let current = head;
  while(current) {
    if(counts[current.val] === undefined) {
      counts[current.val] = 1;
    } else {
      // counts[current.val]++;
      todelete.push(current.val);
    }
    current = current.next;
  }

  current = head;
  while(current && todelete.length > 0) {
    console.log(todelete)
    if(current.next && (todelete.includes(current.next.val))) {
      todelete.splice(todelete.indexOf(current.next.val), 1);
      current.next = current.next.next;
      // if(current.next.next) {
      //   current.next = current.next.next;
      // } else {
      //   current.next = null;
      // }
    } else {
      current = current.next;
    }
  }
  return head;
}

module.exports = removeDups;
