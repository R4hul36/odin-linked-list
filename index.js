
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next
    }
}


class Linkedlist {
    constructor(head, tail) {
        this.head = null;
        this.tail = null;
    }

    prepend(data) {
        if(this.head) {
            let nd = new Node(data, this.head)
            this.head = nd;
        }else {
            this.head = new Node(data, null)
        }
    }

    append(data) {
        if(this.head) {
            let currNode = this.head

            while(currNode.next !== null) {
                console.log("end reached");
                currNode = currNode.next
            }
            currNode.next = new Node(data, null)
            
        }else {
            this.head = new Node(data, null)
        }
    }
}


const list = new Linkedlist();

// list.prepend("one")
list.prepend("two")
list.prepend("three")
list.append("jilly")
list.append("joe")

 list.append("sdfdsf")


console.log(list);
