class Node {
  constructor() {
    this.children = {};
    this.eow = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    let current = this.root;

    for (const letter of str) {
      if (!current.children[letter]) {
        current.children[letter] = new Node();
      }
      current = current.children[letter];
    }

    current.eow = true;
  }

  autoComplete(prefix) {
    const result = [];

    let current = this.root;
    for (const letter of prefix) {
      if (!current.children[letter]) return;
      current = current.children[letter];
    }

    const helper = (current, prefix) => {
      if (current.eow) result.push(prefix);

      for (const [letter, children] of Object.entries(current.children)) {
        helper(children, prefix + letter);
      }
    };

    helper(current, prefix);

    return result;
  }

  getAllWords() {
    let result = [];

    const helper = (current, prefix) => {
      if (current.eow) result.push(prefix);

      for (const [letter, children] of Object.entries(current.children)) {
        helper(children, prefix + letter);
      }
    };

    helper(this.root, '');

    return result;
  }
}

const tri = new Trie();

tri.insert('apple');
tri.insert('appricot');
tri.insert('pranav');
tri.insert('paaru');
tri.insert('parvathy');

console.log(tri.getAllWords());
