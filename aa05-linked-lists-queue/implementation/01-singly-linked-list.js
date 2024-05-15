class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    this.length++;
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return this;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);
    this.length++;

    if (this.head === null) {
      this.head = newNode;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    return this;
  }

  removeFromHead() {
    if (this.head === null) return undefined;
    if (this.length === 1) {
      let curr = this.head;
      this.head = null;
      this.length--;
      return curr;
    } else {
      let curr = this.head;
      this.head = curr.next;
      this.length--;
      return curr;
    }
  }

  removeFromTail() {
    if (this.head === null) return undefined;
    if (this.length === 1) {
      let curr = this.head;
      this.head = null;
      this.length--;
      return curr;
    } else {
      let curr = this.head;
      let i = 2;
      while (i < this.length) {
        curr = curr.next;
        i++;
      }
      let tail = curr.next;
      curr.next = null;
      this.length--;
      return tail;
    }
  }

  peekAtHead() {
    if (this.head === null) return undefined;
    return this.head.value;
  }

  print() {
    if (this.head === null) return;
    let curr = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
