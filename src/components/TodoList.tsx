import { Delete } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

type TodoListProps =  {
  items : {id : string, text : string}[];
}

const TodoList : React.FC<TodoListProps> = (props) => {

  return (
    <div className="grid grid-cols-5 gap-3 my-5">
      {
        props.items.map((todo) =>  (
          <Card key={todo.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{todo.text}</CardTitle>
              <Button className="h-6 w-6" variant={'destructive'} size={'icon'}><Delete/></Button>
            </CardHeader>
          </Card>
        ))
      }
    </div>
  )
}

export default TodoList