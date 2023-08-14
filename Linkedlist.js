class Linkedlist {
    constructor(){
        this.head = null
        this.length = 0
    }

    Prepend(value){
        let node = new Node(value,this.head)
        this.head = node
        this.length++
    }
    Append(value){
        let temp = this.head
        while(temp.nextNode != null) temp = temp.nextNode 
        temp.nextNode  = new Node(value)
        this.length++
    }
    Size(){
        console.log(this.length)
    }
    Head(){
        console.log(this.head.value)
    }
    Tail(){
        let temp = this.head
        while(temp.nextNode != null) temp = temp.nextNode
        console.log(temp.value)
    }
    Atindex(index){
        let temp = this.head
        let prev = null
        for (let i = 0; i < index; i++){
            prev = temp
            temp = temp.nextNode 
        }
        console.log(temp.value)
        return prev
    }
    Pop(){
        let temp = this.head
        let previ = null
        while(temp.nextNode != null){

            previ = temp
            temp = temp.nextNode
        } 
        previ.nextNode = null
    }
    Contains(value){
        let temp = this.head
        while (temp != null){
            
            if(temp.value == value){
                console.log("True")
                return
            }
            temp = temp.nextNode
        }
        return console.log("False")
    }

    Find(value){
        let temp = this.head
        let count = 0
        while (temp != null){
            
            if(temp.value == value){
                console.log(count)
                return temp
            }
            temp = temp.nextNode
            count++
        }
        return console.log(null)
    }

    Tostring(){
        let output = ""
        let current = this.head
        while(current){
            output += `(${current.value}) -> `
            current = current.nextNode
        }
        console.log(`${output}null`)
    }
    InsertAt(value,index){
        let temprev = this.Atindex(index)
        temprev.nextNode = new Node(value,temprev.nextNode)
    }
    RemoveAt(index){
        let temprev = this.Atindex(index)
        temprev.nextNode = temprev.nextNode.nextNode
    }

}

class Node{
    constructor(value,nextNode){
        this.value = value
        this.nextNode = nextNode
    }
}

let ll = new Linkedlist()
ll.Prepend(84)
ll.Append(55)
ll.Append(66)
ll.Append(76)
ll.Append(86)
ll.Append(96)
ll.Tostring()
ll.Size()
ll.Head()
ll.Tail()
ll.Atindex(1)
ll.Pop()
ll.Tostring()
ll.Contains(860)
ll.Find(55)
ll.InsertAt(1000,1)
ll.Tostring()
ll.RemoveAt(2)
ll.Tostring()