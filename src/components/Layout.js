import React from "react"

import SEO from "./seo"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <>{children}</>
      <Footer />
    </>
  )
}
