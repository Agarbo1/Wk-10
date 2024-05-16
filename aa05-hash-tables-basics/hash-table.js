const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    let hashKey = sha256(key);
    return parseInt(hashKey.slice(0, 8), 16)
  }

  hashMod(key) {
    let val = this.hash(key);
    return val % this.capacity;
  }

  insertNoCollisions(key, value) {
    let hashedIndex = this.hashMod(key);
    let dataCheck = this.data[hashedIndex];
    if (dataCheck) {
      throw new Error('hash collision or same key/value pair already exists!')
    } else {
      this.data[hashedIndex] = new KeyValuePair(key, value)
      this.count++
    }
  }

  insertWithHashCollisions(key, value) {
    let hashedIndex = this.hashMod(key);
    let newKV = new KeyValuePair(key, value);
    if (this.data[hashedIndex] === null) {
      this.data[hashedIndex] = newKV;
    } else {
      newKV.next = this.data[hashedIndex];
      this.data[hashedIndex] = newKV
    }
    this.count++
  }

  insert(key, value) {
    let hashedIndex = this.hashMod(key);
    let existingPair = this.data[hashedIndex];
    const newKV = new KeyValuePair(key,value);

    if (existingPair === null) {
      this.data[hashedIndex] = newKV
    } else {
      let current = existingPair;
      while(current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      if(!current.next) break;
      current = current.next
    }
    newKV.next = existingPair;
    this.data[hashedIndex] = newKV;
    }
    this.count++
  }

}


module.exports = HashTable;
