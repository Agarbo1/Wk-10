class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), Array O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    if ((this.count / this.capacity) >= 0.8) {
      this.resize()
    }
    const index = this.hashMod(key);
    let curr = this.data[index];
    while (curr && curr.key !== key) {
      curr = curr.next;
    }
    if (curr) {
      curr.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);
    if(!this.data[index]) {
      this.data[index] = new  KeyValuePair(key, value);
    } else {
      newPair.next = this.data[index];
      this.data[index]= newPair;
    }
    this.count++
  }
  }


  read(key) {
    const index = this.hashMod(key);
    let curr = this.data[index];
    while (curr){
    if (curr.key === key){
      return curr.value;
    }
    curr = curr.next
    }
    return undefined;
  }


  resize() {
    let dataCopy = this.data
    let newCapacity = this.capacity * 2
    this.capacity = newCapacity
    this.data = new Array(newCapacity).fill(null);
    this.count = 0;
    for (let i = 0; i < dataCopy.length; i++) {
      let curr = dataCopy[i];
      while (curr) {
        this.insert(curr.key, curr.value)
        curr = curr.next
      }
    }

  }

  delete(key) {
    let hashIndex = this.hashMod(key);
    let curr = this.data[hashIndex];
    let prev = null;
    while (curr) {
      if (curr.key === key) {
        if (prev === null) {
          this.data[hashIndex] = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.count--;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
    return "Key not found";
  }
}


module.exports = HashTable;
