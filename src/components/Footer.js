import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer >
        <div >
          <img
            src={logo}
            alt="Kaldi"
            
          />
        </div>
        <div >
          <div >
            <div >
              <div >
                <section >
                  <ul >
                    <li>
                      <Link to="/" >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link  to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link  to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link  to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div >
                <section>
                  <ul >
                    <li>
                      <Link  to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link  to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div >
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    
                    src={twitter}
                    alt="Twitter"
                    
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
