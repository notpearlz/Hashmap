import { LinkedList } from "./linkedList.js";
export class HashMap {
  constructor() {
    this.load_factor = 0.75;
    this.capacity = 16;

    this.buckets = new Object();
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  // Overwrites the value inside the key if the keys are the same
  set(_key, value) {
    const hash = this.hash(_key);
    // override if already existing or make new
    if (this.buckets[hash]) {
      var cur = this.buckets[hash].head;
      //loop through the linkedlist and check if its already existing first

      while (true) {
        if (cur.key === _key) {
          cur.val = value;
          return;
        }

        if (cur.next == null) break;
        cur = cur.next;
      }

      //if not then append and set key
      this.buckets[hash].append(value, _key);
    } else {
      const newlist = new LinkedList();
      newlist.append(value, _key);

      this.buckets[hash] = newlist;

      this.size++;

      // deal with collisions here

      //expand hashmap if its over the load factor * capacity
      if (this.size > this.load_factor * this.capacity) {
        console.log("OVER CAPACITY!");
      }
    }
  }

  // Return the value assigned with the key. If key is not found return null
  get(_key) {
    const hash = this.hash(_key);

    if (this.buckets[hash]) {
      let cur = this.buckets[hash].head;

      do {
        if (cur.key == _key) {
          return cur.val;
        }

        if (cur.next == null) break;
        cur = cur.next;
      } while (true);
    }
    return null;
  }

  // Return true or false whether or not the key is in the hashmap
  has(_key) {
    const hash = this.hash(_key);

    if (this.buckets[hash]) {
      let cur = this.buckets[hash].head;

      do {
        if (cur.key == _key) {
          return true;
        }

        if (!cur.next) break;
        cur = cur.next;
      } while (true);
    }
    return false;
  }

  // If the key is in the hashmap it will remove it and return true, otherwise return false
  remove(_key) {
    const hash = this.hash(_key);

    if (this.buckets[hash]) {
      let cur = this.buckets[hash].head;
      let i = 0;
      do {
        if (cur.key == _key) {
          if (cur.next) {
            this.buckets[hash].removeAt(i);
          } else {
            this.buckets[hash] = null;
          }
          return true;
        }

        if (!cur.next) break;
        cur = cur.next;
        i++;
      } while (true);
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
    this.buckets = new Object();
  }

  // Returns an array of all the keys in the hashmap
  keys() {
    const arr = [];

    for (let key of Object.keys(this.buckets)) {
      if (this.buckets[key].head) {
        var cur = this.buckets[key].head;

        do {
          arr.push(cur.val);

          if (!cur.next) break;
          cur = cur.next;
        } while (true);
      }
    }

    return arr;
  }

  // Returns an array with each key, value pair (e.g. [[firstKey, firstValue], [secondKey, secondValue]])
  entries() {
    const arr = [];

    for (let key of Object.keys(this.buckets)) {
      if (this.buckets[key].head) {
        var cur = this.buckets[key].head;

        do {
          arr.push([cur.key,cur.val]);

          if (!cur.next) break;
          cur = cur.next;
        } while (true);
      }
    }

    return arr;
  }
}
