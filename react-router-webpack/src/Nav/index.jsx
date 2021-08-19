import React from 'react'
import { css } from '@emotion/css'
import { NavLink } from 'react-router-dom'

const NavStyles = css`
  margin-bottom: 15px;
  a{
    color: #fff;
    padding: 6px 12px;
    text-decoration: none;
    border-radius: 4px;
    &.active{
      color: #50fa7b;
      border: 2px solid #50fa7b;
    }
  }
`

export default function Nav() {
  return (
    <nav className={NavStyles}>
      {/* akan menunjukan url dari komponent yg dituju */}
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/admin">
        Admin
      </NavLink>
      <NavLink to="/products">
        Products
      </NavLink>
    </nav>
  )
}
