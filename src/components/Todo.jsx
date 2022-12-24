import Button from "./Button";

const Todo = ({tarea}) => {

    return (
    <div className="flex items-center justify-center w-full gap-2 my-2">
        <div className="w-[90%] p-2 bg-green-200 rounded-md">
            <p className="text-2xl break-words">{tarea.titulo}</p>
        </div>
        <div className="p-1 bg-green-500 rounded-md">
            <Button tipo="edit" />
        </div>
        <div className="p-1 bg-red-500 rounded-md">
            <Button tipo="delete" />
        </div>
    </div>
    )
}

export default Todo;