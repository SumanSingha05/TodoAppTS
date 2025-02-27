import { Button } from "./ui/button"
import { Input } from "./ui/input"

const AddTodo = () => {
    return <form>
    <Input type="text" placeholder="Write a new todo..."/>
    <Button>Add Todo</Button>
    </form>
}

export default AddTodo;