import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'


import {responsiveTitle1} from '../components/typography.module.css'


const AboutPage = props => {
  return (
    <Layout>
      <SEO title='About' />
      <Container>
        <h1 className={responsiveTitle1}>About</h1>
        <p><span>Hi, My name is Colin.</span> I like to use technology to solve problems and am always learning new things.</p>
      </Container>
    </Layout>
  )
}

export default AboutPage
