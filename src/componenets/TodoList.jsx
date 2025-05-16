export default function TodoList({ item, Todos, settodos }) {
  function handledelete() {
    console.log('Button click', item);
    settodos(Todos.filter((todo) => todo !== item));
  }
  function handlechange(name){
   const array=Todos.map((todo)=>todo.name===name ?{...todo,done:!todo.done}:todo)
   settodos(array)
   console.log(Todos);
  }
 

  return (
    <div className="rounded shadow mx-auto text-black">
      <div className="p-2 text-lg">
   <span className={`cursor-pointer ${item.done ? "line-through text-gray-400" : ""}`} onClick={()=>handlechange(item.name)}>
         {item.name}
         
   </span >
        <button
          onClick={handledelete}
          className="cursor-pointer bg-yellow-400 w-8 h-8  text-white hover:bg-yellow-300 rounded shadow float-right"
        >
          X
        </button>
        <hr className="border-t border-gray-200 mt-4" />
      </div>
    </div>
  );
}
