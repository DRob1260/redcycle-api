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
          <Nav>
            <Nav><a target="_blank" href="http://127.0.0.1:8000/redcycle/api/account/login/">Log in</a>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export { Navigator }
