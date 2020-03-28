import React from "react"
import { graphql, StaticQuery } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

import Section from "../components/Section"
import Button from "../components/Button"

const Logo = styled.img`
  height: 80px;
  margin-bottom: 25px;
`

const Text = styled.div`
  margin: 10px 0;
`

const About = () => (
  <Section id="food-for-bot" color="#0AD2FE">
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulHomePage {
            about {
              title
              description {
                description
              }
              details {
                details
              }
              logo {
                fixed(resizingBehavior: SCALE, height: 80) {
                  src
                }
              }
              button {
                title
                scrollTo
              }
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          description,
          details,
          logo,
          button,
        } = data.contentfulHomePage.about

        return (
          <>
            <Logo src={logo.fixed.src} alt="foodforbot logo" />
            <h1>{title}</h1>
            <h2>{description.description}</h2>
            {details.details.split("\n").map(line => (
              <Text>{line}</Text>
            ))}
            <div style={{ textAlign: "center", marginTop: 50 }}>
              <Button
                title={button.title}
                onClick={() => scrollTo(`#${button.scrollTo}`)}
              />
            </div>
          </>
        )
      }}
    />
  </Section>
)

export default About
