/**
 * Created by vaibhav on 4/7/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from "react-helmet";
import HomePageTemplate from '../components/HomePageTemplate'

const HomePage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <div>
            <Helmet>
                <title>{frontmatter.meta_title}</title>
                <meta name='description' content={frontmatter.meta_description}/>
            </Helmet>
            <HomePageTemplate
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                offerings={frontmatter.offerings}
                cta_strip={frontmatter.cta_strip}
            />
        </div>
    )
}

HomePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        meta_title
        meta_description
        title
        subtitle
        offerings {
          blurbs {
            image
            title
            text
          }
        }
        cta_strip {
          heading
          subheading
        }
      }
    }
  }
`
