import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
    this._tail = null;
  }

  get head() {
    return this._head;
  }

  get size() {
    return this._size;
  }

  get tail() {
    return this._tail;
  }

  set head(newHead) {
    this._head = newHead;
  }

  set size(newSize) {
    this._size = newSize;
  }

  set tail(newTail) {
    this._tail = newTail;
  }

  // return node at given index
  at(index) {
    if (index >= this.size) {
      return null;
    }
    var cur = this.head;

    for (let i = 0; i < this.size; i++) {
      if (i !== index) {
        cur = cur.next;
      } else {
        return cur.val;
      }
    }
    // list ends
    return null;
  }

  //remove last node
  pop() {
    let cur = this.head;

    for (let i = 0; i < this.size; i++) {
      if (i === this.size - 1) {
        cur.next = null;
        this.tail = cur;
        this.size--;
        return;
      }
      cur = cur.next;
    }
  }

  //search algorithim
  // return true or false
  contains(value) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].getVal === value) {
        return true;
      }
    }
    return false;
  }

  //search algorithim
  // return index
  find(value) {
    let cur = this.head;
    for (let i = 0; i < this.size; i++) {
      if (cur.val == value) {
        return i;
      }
    }
    return null;
  }

  //Represent list as string
  // e.g.: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    //search algorithim
    // add it to a string
    var string = "";

    let cur = this.head;
    for (let i = 0; i < this.size; i++) {
      string += `(${cur.val}) -> `;
      cur = cur.next;
    }

    string += "(null)";
    return string;
  }

  // add a node to the end of the lsit
  append(value, newkey) {
    const newNode = new Node();
    newNode.val = value;

    if (newkey) {
      newNode.key = newkey;
    }
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size += 1;
    }
  }

  // add a node to the beginning of the list
  prepend(value) {
    const newNode = new Node();
    newNode.val = value;

    if (this.tail === null) {
      this.head = newNode;
      this.size = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size += 1;
    }
  }

  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value);
    }

    // insert value in the middle
    const newNode = new Node();
    newNode.val = value;

    var cur = this.head;

    for (let i = 0; i < this.size; i++) {
      if (i == index - 1) {
        newNode.next = cur.next;
        cur.next = newNode;
        return;
      }
      cur = cur.next;
    }
  }

  removeAt(index) {
    if (index === this.size) {
      this.pop();
      return;
    }
    if (index == 0) {
      this.head = this.head.next;
      if(this.size == 1){
        this.tail == this.head;
      }
      this.size--;
      return;
    }
    var cur = this.head;

    for (let i = 0; i < this.size; i++) {
      if (i === index - 1) {
        const temp = cur.next;
        cur.next = temp.next;
        this.size--;
        return;
      }

      cur = cur.next;
    }
  }
}
