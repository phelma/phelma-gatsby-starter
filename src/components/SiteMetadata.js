import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { dataYaml } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        dataYaml {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return dataYaml.siteMetadata
}

export default useSiteMetadata
