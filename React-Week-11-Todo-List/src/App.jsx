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
    <header>
      {/* <Heading /> */}
    </header>
    <div className=" flex flex-col gap-5 mt-10 ">
      <TodoForm  />
      <TodoList tasks={tasks} />
    </div>
    </>

    
  )
}

export default App
