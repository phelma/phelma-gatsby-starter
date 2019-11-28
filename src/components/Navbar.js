import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav   
        role="navigation"
        aria-label="main-navigation"
      >
        <div>
          <div >
            <Link to="/"  title="Logo">
              Kaldi
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div >
              <Link  to="/about">
                About
              </Link>
              <Link  to="/products">
                Products
              </Link>
              <Link  to="/blog">
                Blog
              </Link>
              <Link  to="/contact">
                Contact
              </Link>
              <Link  to="/contact/examples">
                Form Examples
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
