/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import { Link } from 'gatsby'


const NavItem = ({children, ...props}) => <Box mx={1} {...props}>{children}</Box>

const Navbar = () => {
  const [active, setActive] = useState(false)
  const toggleActive = () => setActive(!active)

  return (
    <Flex
      as="nav"
      role="navigation"
      aria-label="main-navigation"
      p={2}
    >      
      <NavItem>
        <Link to="/" title="Logo">
          Kaldi
        </Link>
      </NavItem>

      <div>
        <NavItem as={Link} to="/about">
          About
        </NavItem>

        <NavItem as={Link} to="/products">
          Products
        </NavItem>

        <NavItem as={Link} to="/blog">
          Blog
        </NavItem>

        <NavItem as={Link} to="/contact">
          Contact
        </NavItem>

        <NavItem as={Link} to="/contact/examples">
          Form Examples
        </NavItem>
      </div>
    </Flex>
  )

}

export default Navbar
