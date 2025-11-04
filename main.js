import { Linkedlist } from "./index.js"


const list = new Linkedlist()

list.prepend('one')
list.prepend('two')
list.prepend('three')
list.append('jilly')
list.append('joe')

list.append('sdfdsf')
list.insertAt(5, 'hi')

console.log(list.listToString())