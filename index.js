export class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

export class Linkedlist {
  constructor(head, tail) {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    if (this.head) {
      let nd = new Node(value, this.head)
      this.head = nd
    } else {
      this.head = new Node(value, null)
    }
  }

  append(value) {
    if (this.head) {
      let currNode = this.head

      while (currNode.next !== null) {
        currNode = currNode.next
      }
      currNode.next = new Node(value, null)
    } else {
      this.head = new Node(value, null)
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

  pop() {
    let currNode = this.head
    let prevNode = this.head

    while (currNode.next !== null) {
      prevNode = currNode
      currNode = currNode.next
    }
    prevNode.next = null
  }

  contains(value) {
    let currNode = this.head
    if (currNode.value === value) {
      return true
    }
    let isValue = false

    while (currNode.next !== null) {
      currNode = currNode.next
      if (currNode.value === value) {
        isValue = true
      }
    }
    return isValue
  }

  find(value) {
    let currNode = this.head
    let index = 0

    while (currNode.value !== value) {
      currNode = currNode.next
      index++
      if (index >= this.size()) {
        return "This value doesn't exist in the list"
      }
    }

    return index
  }

  listToString() {
    let currNode = this.head

    let listString = ''

    while (currNode.next !== null) {
      listString += `( ${currNode.value} ) -> `
      currNode = currNode.next
    }
    return `${listString} ( ${currNode.value} )`
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

  removeAt(index) {
    if (index >= this.size() || index < 0) {
      return 'There are no nodes present at the given index'
    }

    if (index === 0) {
      let newHead = this.head.next
      this.head = null
      this.head = newHead
      return
    }

    let previousNode = this.head
    let currNode = this.head
    let currIndex = 0

    while (index > currIndex) {
      previousNode = currNode
      currNode = currNode.next
      currIndex++
    }

    let newNodeToConnect = currNode.next
    previousNode.next = null
    previousNode.next = newNodeToConnect
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
list.removeAt(2)
list.pop()
console.log(list.contains('his'))

console.log(list.listToString())
