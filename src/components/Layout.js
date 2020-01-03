import React from 'react'
import { Helmet } from 'react-helmet'

import { Styled } from 'theme-ui'

import { Flex, Box } from '@theme-ui/components'
import { Global, css } from "@emotion/core"

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby' 

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <Flex sx={{
      minHeight: '100vh',
      flexDirection: 'column'
    }}>
      <Global
        styles={theme => ({
          'html, body': {
            margin: 0,
            padding: 0
          },
          html: {
            boxSizing: 'border-box'
          },
          '*, *:before, *:after': {
            boxSizing: 'inherit'
          }
        })}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>

      <Navbar />
      
      <Box as="main" sx={{ flexGrow: 1 }}>{children}</Box>
      
      <Footer />

    </Flex>
  )
}

export default TemplateWrapper
