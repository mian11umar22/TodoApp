export default function Footer({ completedTodos ,totaltodo}) {
  return (
    <div className="bg-yellow-400 text-center py-3 mt-6 rounded shadow-md w-[500px] mx-auto">
      <h1 className="text-lg font-semibold text-white">
        Completed Todos: {completedTodos}
      </h1>
       <h1 className="text-lg font-semibold text-white">
        Total Todos: {totaltodo}
      </h1>
    </div>
  );
}
