class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor(size) {
    this.top = null;
    this.size = 0;
    this.maxSize = size;
  }

  push(value) {
    if (this.size >= this.maxSize) return console.log('Stack overflow');

    const newNode = new Node(value);
    this.size++;

    if (!this.top) {
      this.top = newNode;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.size <= 0) return console.log('Stack underflow');

    const popped = this.top;
    this.top = this.top.next;
    this.size--;

    return popped;
  }

  print() {
    let current = this.top;
    let values = '';

    while (current) {
      values += `|${current.val}|\n----\n`;
      current = current.next;
    }

    console.log(values);
  }
}

const stack = new Stack(4);

stack.push(10);

stack.pop();

stack.print();
