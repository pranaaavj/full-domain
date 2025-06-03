class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.table[index]) this.table[index] = [];

    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this._hash(key);

    if (!this.table[index]) return -1;

    for (const obj of this.table[index]) {
      if (obj.key === key) {
        return obj.value;
      }
    }

    return -1;
  }

  _hash(str) {
    let key = 0;
    for (const letter of str) {
      key += letter.charCodeAt(0);
    }

    return key % this.size;
  }

  remove(key) {
    const index = this._hash(key);

    let bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key == key) {
        bucket.splice(i, 1);
      }
    }

    return 1;
  }
}

const hashMap = new HashTable(10);

hashMap.set('one', 'Pranav');
hashMap.set('two', 'Hari');

console.log(hashMap.get('one'));
console.log(hashMap.get('two'));
