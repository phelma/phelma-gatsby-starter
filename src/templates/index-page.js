import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import { Container } from '@theme-ui/components'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
}) => (
  <Container px={4}>
    <div style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}>
      <div>
        <h1>
          {title}
        </h1>
      </div>
    </div>
    <section>
      <h3>
        {heading}
      </h3>
      <p>{description}</p>
      <Features gridItems={[]} />

      <Link  to="/products">
        See all products
      </Link>

      <div>
        <h3>
          Latest stories
        </h3>
        <BlogRoll />
        <div>
          <Link  to="/blog">
            Read more
          </Link>
        </div>
      </div>

    </section>
  </Container>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
      }
    }
  }
`
