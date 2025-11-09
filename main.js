import { Linkedlist } from './index.js'

const list = new Linkedlist()

list.prepend('one')
list.prepend('two')
list.prepend('three')
list.append('jilly')
list.append('joe')
list.listToString()

list.insertAt(2, 'hi')
list.listToString()

list.listToString(list.removeAt(2))
list.contains('two')
list.find('joe')
list.getHead()
list.getTail()
list.nodeAt(3)

list.listToString()
