class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Linkedlist {
  constructor(head, tail) {
    this.head = null
    this.tail = null
  }

  prepend(data) {
    if (this.head) {
      let nd = new Node(data, this.head)
      this.head = nd
    } else {
      this.head = new Node(data, null)
    }
  }

  append(data) {
    if (this.head) {
      let currNode = this.head

      while (currNode.next !== null) {
        currNode = currNode.next
      }
      currNode.next = new Node(data, null)
    } else {
      this.head = new Node(data, null)
    }
  }

  size() {
    let size = 0

    let currNode = this.head
    if (!currNode) {
      return size
    }

    while (currNode.next !== null) {
      size += 1
      currNode = currNode.next
    }
    return size + 1
  }

  getHead() {
    return this.head
  }

  getTail() {
    let currNode = this.head

    while (currNode.next !== null) {
      currNode = currNode.next
    }
    return currNode
  }

  nodeAt(index) {
    if (index > this.size()) {
      return 'This index exceeds the size of the list'
    }
    let currNode = this.head
    let currIndex = 0

    while (index > currIndex) {
      currNode = currNode.next
      currIndex++
    }
    return currNode
  }

  listToString() {
    let currNode = this.head

    let listString = ''

    while (currNode.next !== null) {
      listString += `( ${currNode.data} ) -> `
      currNode = currNode.next
    }
    return `${listString} ( ${currNode.data} )`
  }

  insertAt(index, value) {
    if (index > this.size()) {
      return 'This index exceeds the size of the list'
    }

    if (index === this.size()) {
      this.append(value)
      return
    }

    let nextNode = this.nodeAt(index)
    let previousNode = this.head
    let currNode = this.head
    let currIndex = 0

    while (index > currIndex) {
      previousNode = currNode
      currNode = currNode.next
      currIndex++
    }

    let insertedNode = new Node(value, nextNode)
    previousNode.next = insertedNode
    return
  }
}

const list = new Linkedlist()

list.prepend('one')
list.prepend('two')
list.prepend('three')
list.append('jilly')
list.append('joe')

list.append('sdfdsf')
list.insertAt(5, 'hi')

console.log(list.listToString())
