// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
        return data;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let node = this.head;
        let counter = 0;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }
    
    getLast() {
        if (!this.head) return null;
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        } else if (!this.head.next) {
            this.head = null;
        } else {
            let node = this.head;
            while (node.next.next) {
                node = node.next;
            }
            node.next = null;
        }     
    }

    insertLast(data) {
        const newNode = new Node(data);
        let node = this.head;
        if (!node) {
            this.head = newNode;
        } else {
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
    }

    getAt(index) {
        if (!this.head) return null;
        let node = this.head;
        for (let i = 1; i <= index; i++) {
            if (!node.next) return null;
            node = node.next;      
        }
        return node;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
      
        if (index === 0) {
        this.head = this.head.next;
        return;
        }
      
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
        return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
          }
      
          if (index === 0) {
            this.head = new Node(data, this.head);
            return;
          }
      
          const previous = this.getAt(index - 1) || this.getLast();
          const node = new Node(data, previous.next);
          previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }
    
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}


module.exports = { Node, LinkedList };
