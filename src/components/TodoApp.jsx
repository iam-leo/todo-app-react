const TodoApp = () => {
    return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto rounded-lg bg-green-200/70">
        <form className="flex flex-col items-center w-full p-8">
            <input
                type="text"
                className="w-3/4 p-2 text-xl rounded-md"
            />
            <input
                type="submit"
                className="w-3/4 px-5 py-3 mt-4 text-xl font-semibold text-white uppercase bg-green-600 rounded-md cursor-pointer hover:bg-green-700"
                value="Crear Tarea"
            />
        </form>
    </div>
    )
}

export default TodoApp;