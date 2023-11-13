import { Outlet } from 'react-router-dom';
import './styles.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      {/* <TodoList/> */}
      <Outlet/>
    </div>
  );
}

export default App;
