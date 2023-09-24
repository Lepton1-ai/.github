import {useState} from 'react'
import './navbar.scss'
import testsvg from '/src/assets/lepton_1_logo_black.svg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {

  const [show_nav, set_nav] = useState('navBar')
  const show_nav_fun = ()=>{
    set_nav('navBar activenavbar')
  }
  const close_nav_fun = ()=>{
    set_nav('navBar')
  }
  return (
    <section className='navbarSection'>
      <header className="flex_header flex">
        <div className="logo_section">
          <a href="#" className="logo flex">
            <img className='lepton_logo' style={{

              }} src={testsvg}/>
            {/* <h1>hridoy</h1> */}
          </a>
        </div>
        <div className={show_nav}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navlink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>Services</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>About</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>Blog</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navlink'>Contact Us</a>
            </li>
            <button className='btn'>
              <a href='#'>Get started</a>
            </button>
          </ul>

          <div onClick={close_nav_fun}
           className="closeNavbar">
            <AiOutlineCloseCircle className="icon"/>
          </div>

        </div>
        <div onClick={show_nav_fun}
        className="toggleNavbar">
          <GiHamburgerMenu className="icon"/>
        </div>
      </header>
    </section>
  )
}

export default Navbar
