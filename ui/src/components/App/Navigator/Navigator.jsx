import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './Navigator.scss'

const Navigator = () => {
  return (
    <div className={'Navigator'} data-testid={'Navigator'}>
      <Navbar variant={'dark'}>
        <Navbar.Brand>
          <Link to={'/redcycle'}>
            {'Redcycle'}
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link><Link to={'/redcycle'}>Home</Link></Nav.Link>
            <Nav.Link><Link to={'/redcycle/post-creator'}>Post Creator</Link></Nav.Link>
          </Nav>
          <Nav className = "ml-auto">
            <Nav.Link href="/redcycle/api/account/register">Sign Up</Nav.Link>
            <Nav.Link href="/redcycle/api/account/signin">Log in</Nav.Link>
            <Nav.Link href="/redcycle/api/account/logout">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export { Navigator }
