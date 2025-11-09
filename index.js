export class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

export class Linkedlist {
  constructor() {
    this.head = null
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
    const nodeToAppend = new Node(value, null)
    if (this.head) {
      let currNode = this.head

      while (currNode.next !== null) {
        currNode = currNode.next
      }
      currNode.next = nodeToAppend
    } else {
      this.head = nodeToAppend
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
    console.log(this.head)

    return this.head
  }

  getTail() {
    let currNode = this.head

    while (currNode.next !== null) {
      currNode = currNode.next
    }
    console.log(currNode)

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
    console.log(currNode)

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
    console.log(isValue)

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
    console.log(`${value} is at index ${index}`)

    return index
  }

  listToString(list = null) {
    let currNode = list ? list : this.head

    let listString = ''

    while (currNode.next !== null) {
      listString += `( ${currNode.value} ) -> `
      currNode = currNode.next
    }
    console.log(`${listString} ( ${currNode.value} )`)

    return `${listString} ( ${currNode.value} )`
  }

  insertAt(index, value) {
    if (index > this.size()) {
      console.log('This index exceeds the size of the list')

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
