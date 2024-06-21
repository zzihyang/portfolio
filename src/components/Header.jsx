import React, { useState } from 'react'
import { headerNav } from '../constants/data'

console.log(headerNav)

const Header = () => {
  /* return전에 useState, 함수작성 */
  const [ show, setShow ] = useState(false)

  const toggleMenu = () => {
    //setShow(true)
    setShow( (prevShow) => !prevShow )
  }

  return (
    <header id='header'>
      <div className='header__inner'>
        <div className='header__logo'>
          <h1>portfolio <em>2024</em></h1>
        </div>
        <nav className={`header__nav ${show ? "show" : ""}`} >
          <ul>
            {
              headerNav.map((nav, idx) => (
                <li key={idx}>
                  <a href={nav.url}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </nav>
        <div 
          className='header__nav__mobile'
          onClick={ toggleMenu }
        >버튼</div>
      </div>
    </header>
  )
}

export default Header