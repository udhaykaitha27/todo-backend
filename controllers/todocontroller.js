const todoModel = require('../model/todo');


const createTodo = async(req,res) =>
{
    try {

        const postTodo = await todoModel.create(req.body);
        if(postTodo)
        {
            return res.json({message : 'todo added successfully', todoItem : postTodo}
               
            )
        }
        return res.json({message : 'cannot process todo'})
        
    } catch (error) {
        res.json({message : 'cannot add a todo',
            error : error
        })
    }
}

const getTodos = async (req,res) =>
{
    try {

        const getTodoitems = await todoModel.find();
        if(getTodoitems)
        {
            return res.json({message : 'todos fetched successfully',
                todoItems : getTodoitems
            })
        }


        
    } catch (error) {
        return res.json('couldnt get todo items')
    }
}

const deleteTodos = async(req,res) =>
{
    const id = req.params.todoId
    try {

        const deleteTodoItems = await todoModel.findByIdAndDelete(id);
        if(deleteTodoItems)
        {
            return res.json({message : 'todo deleted successfully',
                todos : deleteTodoItems
            })
        }
        
    } catch (error) {
        res.json('couldnt delete todo')
    }
}

module.exports = {createTodo,getTodos,deleteTodos}