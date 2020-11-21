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
          <Nav>
            <Nav.Link><Link to={'/redcycle'}>Home</Link></Nav.Link>
            <Nav.Link><Link to={'/redcycle/post-creator'}>Post Creator</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export { Navigator }
