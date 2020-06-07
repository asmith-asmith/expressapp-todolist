const todo = ["go to store"];

module.exports = {
    getAll: function(){
        return todo;
    },
    deleteOne: function(idx){
        todo.splice(idx,1);
    },
    addOne: function(item){
        todo.push(item)
    }
}