import { Outlet } from 'react-router-dom';
import './styles.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import './fonts/PressStart2P-Regular.ttf'

function App() {
  // make a dashboard with small games and projects
  // i think i want retro 8 bit style
  // IMPORTANT
  // I need to make the scores from the games and the todo list local save
  // i need to make a previous winners score board
  // name pixel art
  // save pixel art
  // eventualy make it a online platform where you can play against friends online or locally and share pixel art

  return (
    <div className="App">
      <NavBar/> 
      {/* <TodoList/> */}
      <Outlet/>
    </div>
  );
}

export default App;
