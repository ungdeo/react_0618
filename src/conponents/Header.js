import React from 'react'
import Nav from './Nav'

const Header = (props) => {
  return (
    <header>
        <h1>{props.logo}</h1>
        <Nav menus={props.menus}/>
    </header>
  )
}

export default Header