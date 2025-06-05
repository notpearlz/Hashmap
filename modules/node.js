export class Node {
  constructor() {
    this._val = null;
    this._key = null;
    this._next = null;
  }

  get key() {
    return this._key;
  }

  get val() {
    return this._val;
  }

  get next() {
    return this._next;
  }

  set key(newKey) {
    this._key = newKey;
  }

  set val(newVal) {
    this._val = newVal;
  }

  set next(newnext) {
    this._next = newnext;
  }
}
