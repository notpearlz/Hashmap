export class HashSet {
  constructor() {
    this.load_factor = 0.75;
    this.capacity = 16;

    this.buckets = new Map();
    this.size = 0;
  }

  get lenth() {
    return this.size + 1;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  // adds a new unique key in the hash set
  set(_key) {
    const hash = this.hash(_key);

    //if it doesnt exist make a new set
    if (!this.buckets.has(hash)) {
      const newSet = new Set();
      newSet.add(_key);

      this.buckets.set(hash, newSet);

      //if it exists add to the set
    } else {
      this.buckets.get(hash).add(_key);
    }
    this.size++;
    if (this.size > this.load_factor * this.capacity) {
      this.expandMap();
    }
  }

  // Return the key. If key is not found return null
  get(_key) {
    const hash = this.hash(_key);

    if (this.buckets[hash].has(_key)) {
      return _key;
    }
    return null;
  }

  // Return true or false whether or not the key is in the hashmap
  has(_key) {
    const hash = this.hash(_key);

    return this.buckets[hash].has(_key);
  }

  // If the key is in the hashmap it will remove it and return true, otherwise return false
  remove(_key) {
    const hash = this.hash(_key);

    if (this.buckets[hash]) {
      this.buckets[hash].delete(_key);
      return true;
    }
    return false;
  }

  // Return length
  length() {
    return this.size;
  }

  // Remove all entries in the hashmap
  clear() {
    this.size = 0;
    this.buckets = new Map();
  }

  // Returns an array with each key (e.g. [firstKey, secondKey])
  entries() {
    const arr = [];

    for (let i of this.buckets.values()) {
      i.forEach((value) => {
        arr.push(value);
      });
    }

    return arr;
  }

  //expand the hashset
  //reorganize evrything in the hashset to accomdate the new capacity
  expandMap() {
    this.capacity = this.capacity * 2;

    const newBucket = this.entries();
    this.clear();

    for (let i = 0; i < newBucket.length; i++) {
      this.set(newBucket[i]);
    }
  }
}
