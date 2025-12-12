import { Link, NavLink } from "react-router";
import './Header.css'
export default function Header() {
  return (
    <div className="header-main">
        <NavLink className='nav-link' to='/' >Home</NavLink>
        <NavLink className='nav-link' to='/about'>About</NavLink>
        <NavLink className='nav-link' to='/login'>Login</NavLink>
    </div>
  )
}
