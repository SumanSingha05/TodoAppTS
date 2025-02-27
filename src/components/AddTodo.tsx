import { Button } from "./ui/button"
import { Input } from "./ui/input"

const AddTodo = () => {
    return (
    <form className="flex items-center gap-5">
    <Input type="text" placeholder="Write a new todo..." className="w-fit"/>
    <Button>Add Todo</Button>
    </form>
    )
}

export default AddTodo;