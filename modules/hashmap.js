export class HashMap {
  constructor() {
    this.load_factor = 0.75;
    this.capacity = 16;
    

  }


  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value){

  }

  // Return the value assigned with the key. If key is not found return null
  get(key){

  }

  // Return true or false whether or not the key is in the hashmap
  has(key){

  }

  // If the key is in the hashmap it will remove it and return true, otherwise return false
  remove(key){

  }

  // Return length
  length(){
    
  }

  // Remove all entries in the hashmap
  clear(){

  }

  // Returns an array of all the keys in the hashmap
  keys(){

  }

  // Returns an array with each key, value pair (e.g. [[firstKey, firstValue], [secondKey, secondValue]])
  entries(){

  }
}
