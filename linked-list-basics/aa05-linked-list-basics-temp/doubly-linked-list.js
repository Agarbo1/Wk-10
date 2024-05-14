class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val);
    this.length++
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode
      return this
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedListNode(val);
    this.length++;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
