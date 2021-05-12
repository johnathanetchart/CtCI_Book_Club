//Given the head of a linked list and an integer, k, return the kth to last node of the linked list. If k = 1 return the last element. If k = 0 or is out of range return null.

/*
Example:
LL = [1,2,3,4,5]
k = 3
return [3,4,5]
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

//input1: head of linked list
//input2: k - integer
//output: kth to last node
//c
//e: k = 1 -> return last
//e: k = 0 or out of range -> return null
const kthToLast = (head, k) => {
  let nodeList = [];
  let current = head;

  while(current) {
    nodeList.push(current);
    current = current.next;
  }
  let nodeLoc = nodeList.length - k;
  if (nodeLoc > 0 && nodeLoc < nodeList.length) {
    return nodeList[nodeLoc];
  }
  return null;
};

module.exports = kthToLast;
