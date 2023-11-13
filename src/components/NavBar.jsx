import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="tic-tac-toe"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Tic Tac Toe
      </NavLink>

      <NavLink
        to="todo"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Todo
      </NavLink>
      
      <NavLink
        to="pixelart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        PixelArt Maker
      </NavLink>
    </div>
  );
}
