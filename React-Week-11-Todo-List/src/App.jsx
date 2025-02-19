import './App.css'
import { useSelector } from 'react-redux';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';
import Heading from './Component/Heading';

function App() {
  const tasks = useSelector((state) => state.todo.tasks); // fetch tasks from redux store
  console.log(tasks);

  return (
    <>
    <div className="flex flex-col">
      <header>
        <Heading />
      </header>
      <div className="w-[100%] flex justify-center ">
        <div className="flex flex-col gap-5 mt-10 w-[260px] ">
          <TodoForm  />
          <TodoList tasks={tasks} />
        </div>

      </div>
    </div>
    </>

    
  )
}

export default App
