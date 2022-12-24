import { useState } from "react";

const TodoApp = () => {
    const [titulo, setTitulo] = useState('');
    const [tareas, setTareas] = useState([]);

    function handleChange(e){
        const value = e.target.value;
        setTitulo(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTarea = {
            id: Date.now(),
            titulo: titulo,
            completado: false
        }

        const temp = [...tareas, newTarea];

        setTareas(temp);
    }

    return (
    <>
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto rounded-lg bg-green-200/70">
            <form className="flex flex-col items-center w-full p-8">
                <input
                    type="text"
                    className="w-3/4 p-2 text-xl rounded-md"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="w-3/4 px-5 py-3 mt-4 text-xl font-semibold text-white uppercase bg-green-600 rounded-md cursor-pointer hover:bg-green-700"
                    value="Crear Tarea"
                    onClick={handleSubmit}
                />
            </form>
        </div>

        {/* Renderizar tareas */}
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-5 rounded-lg bg-green-200/70">
            {
                tareas.map( tarea => (
                    <p key={tarea.id}>{tarea.titulo}</p>
                ))
            }
        </div>
    </>
    )
}

export default TodoApp;