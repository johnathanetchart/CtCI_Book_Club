// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: the partition element can appear anywhere in the "right partition" it does not have to appear between the left and the right partitions.)  The nodes within each partition do not have to be in any particular order. The space below indicates the partition point but doesn't have to be denoted in any way in the linked list.

/*
Example:
LL = [22, 31, 1, 5, 17, 21, 21, 6, 2, 1, 20]
input node = 20       partition
                        VVVV
LL = [1, 1, 6, 5, 2, 17,     21, 22, 31, 20, 21]
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

const partition = (head, x) => {
  let leftCurrent = null;
  let leftHead = null;
  let rightCurrent = null;
  let rightHead = null;
  let current = head;
  while(current) {
    if(current.val < x) {
      if(leftHead === null) {
        leftHead = new Node(current.val);
        leftCurrent = leftHead;
      } else {
        leftCurrent.next = new Node(current.val);
        leftCurrent = leftCurrent.next;
      }
    } else if(current.val >= x) {
      if(rightHead === null) {
        rightHead = new Node(current.val);
        rightCurrent = rightHead;
      } else {
        rightCurrent.next = new Node(current.val);
        rightCurrent = rightCurrent.next;
      }
    }
    current = current.next;
  }
  console.log('leftCurrent')
  console.log(leftCurrent)
  if(rightHead && leftHead) {
    leftCurrent.next = rightHead;
  }
  if(leftHead) {
    return leftHead;
  } else {
    return rightHead;
  }
};

module.exports = partition;
