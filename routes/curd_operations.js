const epxress = require('express');
const router = epxress.Router();

const Todo= require('../models/todos');


router.post('/', async(req, res)=>{
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json({message: todo})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

// GET ALL TODOS
router.get('/all', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async(req, res)=> {
    try {
        const todo_list = await Todo.findById(req.params.id)
        if(!todo_list){
            return res.status(404).json({message: "This Todo not found"})
        }
        res.status(200).json({message: todo_list})
    } catch (err) {
        res.status(400).json({messsage: "Invalid id"})
    }
});


router.delete('/:id', async(req, res)=> {
    try {
         const todo_list = await Todo.findByIdAndDelete(req.params.id)
        if(!todo_list){
            return res.status(404).json({message: "This Todo not found"})
        }
        res.status(200).json({message: "Todo delete Successfull"})

    } catch (err) {
        res.status(400).json({message: "Invalid id"})
    }
   

});

router.put('/:id', async(req, res)=> {

    try {
         const UpdateTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    if(!UpdateTodo){
        return res.status(404).json({message:"Todo not found"})
    }
    res.status(200).json({message: UpdateTodo})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
   
})

module.exports = router;