import { NavLink } from "react-router-dom";

const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) return { color: "orange" };
  };
  

export default function Nav(){
    return (
        <header>
          <nav>
            <NavLink style={getActiveLinkStyle} to="/Home">
              Home
            </NavLink>
            <NavLink style={getActiveLinkStyle} to="/Html">Html</NavLink>
            <NavLink style={getActiveLinkStyle} to="/Css">Css</NavLink>
            <NavLink style={getActiveLinkStyle} to="/Js">Js</NavLink>

          </nav>
        </header>
      );
     
}