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
    let current = this.root;
    for (const letter of prefix) {
      if (!current.children[letter]) return;
      current = current.children[letter];
    }

    const words = this.getAll(current, prefix);
    return words;
  }

  getAll(root = this.root, prefix = '') {
    const current = root;
    const words = [];

    const helper = (current, prefix) => {
      if (current.eow) words.push(prefix);
      for (const [letter, children] of Object.entries(current.children)) {
        helper(children, prefix + letter);
      }
    };

    helper(current, prefix);
    return words;
  }

  longestCommonPrefix() {
    let current = this.root;
    let prefix = '';

    while (current && Object.keys(current.children).length < 2) {
      let currentLetter = Object.keys(current.children)[0];
      prefix += currentLetter;
      current = current.children[currentLetter];
    }

    return prefix;
  }
}

const trie = new Trie();

trie.insert('apprle');
trie.insert('appricot');
trie.insert('approach');
trie.insert('apprlication');

console.log(trie.longestCommonPrefix());
