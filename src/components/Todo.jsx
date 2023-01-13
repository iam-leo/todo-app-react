import { useState } from "react";
import Button from "./Button";

const Todo = ({tarea, onUpdate, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false);


    function FormEdit(){
        const [newValue, setNewValue] = useState(tarea.titulo);
        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClick(){
            onUpdate(tarea.id, newValue);
            setIsEdit(false);
        }
        return (
            <form onClick={handleSubmit} className="flex items-center justify-center w-full gap-2">
                <input
                    type="text"
                    className="w-[90%] p-2 rounded-md text-2xl"
                    onChange={handleChange}
                    value={newValue}
                />
                <button
                    className="p-2 font-bold text-white uppercase bg-green-600 rounded-md hover:bg-green-700"
                    onClick={handleClick}
                >
                    Actualizar
                </button>
            </form>
        )
    }

    function TodoElement(){
        return(
            <div className="flex items-center justify-center w-full gap-2 my-2">
                <div className="w-[90%] p-2 bg-green-200 rounded-md">
                    <p className="text-2xl break-words">{tarea.titulo}</p>
                </div>
                <div className="flex items-center justify-center bg-green-600 rounded-md hover:bg-green-700">
                    <Button tipo="edit" setState={setIsEdit} valor={true}/>
                </div>
                <div className="flex items-center justify-center bg-red-600 rounded-md hover:bg-red-700">
                    <Button tipo="delete" delTask={onDelete} idTask={tarea.id}/>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            {isEdit
            ? <FormEdit />
            : <TodoElement />
            }
        </div>
    )
}

export default Todo;