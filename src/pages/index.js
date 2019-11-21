import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const profileHeader = get(this, 'props.data.contentfulProfileHeader')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <h2>{profileHeader.leilaConti}</h2>
          <h4>{profileHeader.developer}</h4>
          <h4>{profileHeader.location}</h4>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulProfileHeader {
      leilaConti
      location
      developer
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`
