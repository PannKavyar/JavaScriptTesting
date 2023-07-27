class Stack{
    constructor(){
        this.data=[];
    }
    add(record){
        this.data.push(record);
    }
    remove(){
        this.data.pop();
    }
    peek(){
     if(this.data.length > 0){
         return true;
     }
    return false;
    }    
}
// stack = new Stack();
// for(let i=1;i<6;i++){
//     stack.add(i);
// }


// console.log("=======Adding items into the array using stack pattern");
// console.log(stack);
// console.log("=======Removing items into the array using stack pattern");
// stack.remove();
// console.log(stack);
module.exports=Stack;