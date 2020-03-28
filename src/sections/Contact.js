import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import Section from "../components/Section"
import ContactLink from "../components/ContactLink"

const Text = styled.div`
  margin: 10px 0;
`

const Contact = () => (
  <Section id="contact" color="#FF4A4A" style={{ color: "#ffffff" }}>
    <StaticQuery
      query={graphql`
        query ContactQuery {
          contentfulHomePage {
            contact {
              title
              description {
                description
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
            {description.description.split("\n").map(line => (
              <Text>{line}</Text>
            ))}
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
