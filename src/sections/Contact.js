import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

import Section from "../components/Section"
import ContactLink from "../components/ContactLink"

const Contact = () => (
  <Section id="contact" color="#FF4A4A" style={{ color: "#ffffff" }}>
    <StaticQuery
      query={graphql`
        query ContactQuery {
          contentfulHomePage {
            contact {
              title
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              email
              phone
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          description,
          email,
          phone,
        } = data.contentfulHomePage.contact

        return (
          <>
            <h2>{title}</h2>
            <ReactMarkdown
              source={description.childMarkdownRemark.rawMarkdownBody}
            />
            <div style={{ padding: "30px 0" }}>
              <ContactLink
                label="Email"
                link={email}
                href={`mailto:${email}`}
                containerStyle={{ margin: "0 0 30px 0" }}
              />
              <ContactLink label="Call" link={phone} href={`tel:${phone}`} />
            </div>
          </>
        )
      }}
    />
  </Section>
)

export default Contact
