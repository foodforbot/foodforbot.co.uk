import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

import Section from "../components/Section"
import ProfileCard from "../components/ProfileCard"

const ProfileSection = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Profiles = () => (
  <Section id="who" color="#FED70A">
    <StaticQuery
      query={graphql`
        query WhoQuery {
          contentfulHomePage {
            who {
              title
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              profiles {
                name
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                avatar {
                  fixed(
                    height: 230
                    width: 230
                    quality: 100
                    resizingBehavior: FILL
                    toFormat: PNG
                  ) {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { profiles, title, description } = data.contentfulHomePage.who

        return (
          <>
            <h2>{title}</h2>
            <ReactMarkdown
              source={description.childMarkdownRemark.rawMarkdownBody}
            />
            <div style={{ margin: "0 auto", maxWidth: 750 }}>
              <ProfileSection>
                {profiles.map(({ name, description, avatar }) => (
                  <ProfileCard
                    avatar={avatar.fixed.src}
                    name={name}
                    description={
                      description.childMarkdownRemark.rawMarkdownBody
                    }
                  />
                ))}
              </ProfileSection>
            </div>
          </>
        )
      }}
    />
  </Section>
)

export default Profiles
