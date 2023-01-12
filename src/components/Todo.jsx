import { useState } from "react";
import Button from "./Button";

const Todo = ({tarea, onUpdate}) => {
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
            <form onClick={handleSubmit}>
                <input type="text" onChange={handleChange} value={newValue}/>
                <button onClick={handleClick}>Actualizar</button>
            </form>
        )
    }

    function TodoElement(){
        return(
            <div className="flex items-center justify-center w-full gap-2 my-2">
                <div className="w-[90%] p-2 bg-green-200 rounded-md">
                    <p className="text-2xl break-words">{tarea.titulo}</p>
                </div>
                <div className="p-1 bg-green-500 rounded-md">
                    <Button tipo="edit" setState={setIsEdit} valor={true}/>
                    {console.log(isEdit)}
                </div>
                <div className="p-1 bg-red-500 rounded-md">
                    <Button tipo="delete"/>
                </div>
            </div>
        )
    }

    return (
        <div>
            {isEdit
            ? <FormEdit />
            : <TodoElement />
            }
        </div>
    )
}

export default Todo;