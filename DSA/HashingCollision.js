class HashTable {
  constructor(size) {
    this.table = new Array(size).fill(null);
    this.size = size;
  }

  set(key, value) {
    let hashIdx = this._hash(key);
    const start = hashIdx;

    while (this.table[hashIdx] !== null && this.table[hashIdx].key !== key) {
      hashIdx = (hashIdx + 1) % this.size;
      if (hashIdx === start) return console.log('HashTable is full');
    }

    this.table[hashIdx] = { key, value };
  }

  get(key) {
    let hashIdx = this._hash(key);
    const start = hashIdx;

    while (this.table[hashIdx] !== null) {
      if (this.table[hashIdx]?.key == key) return this.table[hashIdx].value;
      hashIdx = (hashIdx + 1) % this.size;
      if (hashIdx === start) return console.log('Value is not present');
    }
  }

  remove(key) {
    let hashIdx = this._hash(key);
    const start = hashIdx;

    while (this.table[hashIdx] !== null) {
      if (this.table[hashIdx].key == key) {
        this.table[hashIdx] = null;
        return;
      }

      hashIdx = hashIdx + (1 % this.size);
      if (hashIdx === start) return -1;
    }
  }

  _hash(key) {
    let index = 0;
    for (const letter of key) {
      index += letter.charCodeAt(0) * 17;
    }

    return index % this.size;
  }
}

const hashTable = new HashTable(4);

hashTable.set('name', 'Pranav');
hashTable.set('age', '21');
hashTable.set('skills', 'MEAN');
hashTable.set('skills2', 'MERN');
hashTable.set('yo', 'yoyo');

console.log(hashTable.get('name'));
console.log(hashTable.get('age'));
console.log(hashTable.get('skills'));
console.log(hashTable.get('yo'));
