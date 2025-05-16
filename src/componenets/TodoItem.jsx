import TodoList from "./TodoList";
export default function TodoItem({Todos ,settodos} ){
    return <div className="bg-white mt-3 mx-auto w-[500px] p-4 rounded-sm shadow-md">
        {Todos.map((item) => {
        return <TodoList key={item.name} Todos={Todos} settodos={settodos}
        item={item} />;
      })}
    </div>
}