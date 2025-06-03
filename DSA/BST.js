class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value, root = this.root) {
    if (!root) {
      if (this.root) {
        return new Node(value);
      }

      this.root = new Node(value);
      return;
    }

    if (value < root.val) {
      root.left = this.insert(value, root.left);
    }

    if (root.val < value) {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  delete(value, root = this.root) {
    if (value < root.val) {
      root.left = this.delete(value, root.left);
    } else if (value > root.val) {
      root.right = this.delete(value, root.right);
    } else {
      if (!root.right && !root.left) {
        return null;
      }

      if (!root.left) {
        return root.right;
      }

      if (!root.right) {
        return root.left;
      }

      let suc = this.findSuc(root.right);
      root.val = suc.val;
      root.right = this.delete(suc.val, root.right);
    }

    return root;
  }

  findSuc(root) {
    while (root.left) root = root.left;
    return root;
  }

  findHeight(root = this.root) {
    if (!root) return 0;

    let left = this.findHeight(root.left);
    let right = this.findHeight(root.right);

    return Math.max(left, right) + 1;
  }

  findDepth(value, root = this.root, depth = 0) {
    if (!root) return false;

    if (root.val == value) return depth;

    return (
      this.findDepth(value, root.left, depth + 1) ||
      this.findDepth(value, root.right, depth + 1)
    );
  }

  print(root = this.root) {
    if (!root) return;

    console.log(root.val);
    this.print(root.left);
    this.print(root.right);
  }

  bfs() {
    const queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      console.log(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  dfs() {
    const stack = [];
    let current = this.root;
    while (stack.length || current) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        current = current.right;
      }
    }
  }

  secondSmallest() {
    let count = 0;
    let result = null;

    const helper = (root = this.root) => {
      if (!root || result) return;

      helper(root.left);

      count++;
      if (count == 2) {
        result = root.val;
        return;
      }

      helper(root.right);

      return result;
    };

    helper(this.root);
    return result;
  }

  secondLargest() {
    let current = this.root;
    const stack = [];
    let count = 0;

    while (stack.length || current) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        count++;
        if (count == 2) return current.val;
        current = current.right;
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(100);
bst.insert(150);
bst.insert(120);
bst.insert(50);
bst.insert(30);
bst.insert(70);

console.log(bst.findDepth(70));
