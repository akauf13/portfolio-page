import "./styles/Nav.css"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div className="nav-bar-component">
      <div className="nav">
          <div className="navlink" activeClassName="active"><NavLink to="/">Home</NavLink></div>
          <div className="navlink" activeClassName="active"><NavLink to="/about">About</NavLink></div>
          <div className="navlink" activeClassName="active"><NavLink to="/projects">Projects</NavLink></div>
          <div className="navlink" activeClassName="active"><NavLink to="/resume">Resume</NavLink></div>
      </div>
 </div>
    
  )
}

export default Nav