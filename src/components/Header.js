import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Styling component
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    render() {
        return (
            <Navbar variant='dark'  className="nav-bar" >
                <Navbar.Brand className="justify-content-start"  >
                    <Link to='/'>Health by KB</Link>
                </Navbar.Brand>

                <Nav fill variant='pills' defaultActiveKey="/" className='nav-bar-links' >
                    <Nav.Item>
                        <Nav.Link eventKey='link-1' ><Link to='/exercises' >Exercises</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><Link to='/recipes' >Healthy Recipes</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3"><Link to='/motivations' >Motivation</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" ><Link to='/blogs' >Blog</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-5" ><Link to='/about' >About Me</Link></Nav.Link>
                    </Nav.Item>
                    {this.props.user.permissions === 'ADMIN' && <Nav.Item><Nav.Link eventKey="link-6" ><Link to='/post' >Post</Link></Nav.Link></Nav.Item>}
                </Nav>
            </Navbar>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header);