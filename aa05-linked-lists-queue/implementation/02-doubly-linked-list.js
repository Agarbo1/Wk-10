class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedNode(val);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);
    this.length++;
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  removeFromHead() {
    if (this.isEmpty()) return undefined;
    let headVal = this.head.value;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return headVal;
  }

  removeFromTail() {
    if (this.isEmpty()) return undefined;
    let tailVal = this.tail.value;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return tailVal;
  }

  peekAtHead() {
    if (this.isEmpty()) return undefined;
    return this.head.value;
  }

  peekAtTail() {
    if (this.isEmpty()) return undefined;
    return this.tail.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
