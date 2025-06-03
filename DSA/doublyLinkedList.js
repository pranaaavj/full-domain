class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value, index = 0) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (this.head && index == 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!current) break;
      current = current.next;
    }

    if (!current) return console.log('Index out of bounds');

    if (current == this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
    newNode.prev = current;
    newNode.next.prev = newNode;
  }

  print() {
    let values = '';
    let current = this.head;

    while (current) {
      values += current.val + ' => ';
      current = current.next;
    }

    console.log(values);
  }
}

const dll = new DoublyLinkedList();

dll.insert(10, 0);
dll.insert(20, 1);
dll.insert(30, 2);
dll.insert(40, 3);
dll.insert(50, 5);

dll.print();
