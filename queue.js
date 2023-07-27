class Queue{
    constructor(){
        this.data=[];
    }
    add(record){
        this.data.unshift(record);
    }
    remove(){
        this.data.pop();
    }
 
}
 queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
console.log("=======Adding items into the array using Queue pattern");
console.log(queue);
console.log("=======Removing items into the array using Queue pattern");
queue.remove();
console.log(queue);

