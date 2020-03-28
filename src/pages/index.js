import React from "react"

import Layout from "../components/Layout"
import About from "../sections/About"
import Profiles from "../sections/Profiles"
import Contact from "../sections/Contact"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <About />
        <Profiles />
        <Contact />
      </Layout>
    )
  }
}
