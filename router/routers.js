import { Router } from "express";
import { createTodo, deleteTodo, getAllTodo, getOneTodo, updateTodo } from "../controller/controllerTodo.js";

const routers = Router();

routers.get('/',getAllTodo);
routers.get('/:id',getOneTodo);
routers.post('/', createTodo);
routers.patch('/:id',updateTodo);
routers.delete('/:id',deleteTodo);
 
export default routers