import React from "react"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

import SEO from "../components/seo"
import Section from "../components/Section"
import Button from "../components/Button"
import ProfileCard from "../components/ProfileCard"
import ContactLink from "../components/ContactLink"
import Footer from "../components/Footer"

const Logo = styled.img`
  height: 80px;
  margin-bottom: 25px;
`

const Text = styled.div`
  margin: 10px 0;
`

const ProfileSection = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export default class IndexPage extends React.Component {
  render() {
    const {
      title,
      tags,
      logo,
      heroText,
      tagLine,
      description,
      getInTouchButtonLabel,
      whoAreWeTitle,
      whoAreWeDescription,
      botOneName,
      botOneDescription,
      botOneAvatar,
      botTwoName,
      botTwoDescription,
      botTwoAvatar,
      contactUsTitle,
      contactUsDescription,
      email,
      phone,
    } = this.props.data.contentfulHomePage

    return (
      <>
        <SEO title={title} keywords={tags} />
        <div>
          <Section id="food-for-bot" color="#0AD2FE">
            <Logo src={logo.fixed.src} alt="foodforbot logo" />
            <h1>{heroText}</h1>
            <h2>{tagLine.tagLine}</h2>
            {description.description.split("\n").map(line => (
              <Text>{line}</Text>
            ))}
            <div style={{ textAlign: "center", marginTop: 50 }}>
              <Button
                title={getInTouchButtonLabel}
                onClick={() => scrollTo("#contact-us")}
              />
            </div>
          </Section>
          <Section id="who-are-we" color="#FED70A">
            <h2>{whoAreWeTitle}</h2>
            {whoAreWeDescription.whoAreWeDescription.split("\n").map(line => (
              <Text>{line}</Text>
            ))}
            <div style={{ margin: "0 auto", maxWidth: 750 }}>
              <ProfileSection>
                <ProfileCard
                  avatar={botOneAvatar.fixed.src}
                  name={botOneName}
                  description={botOneDescription.botOneDescription}
                />
                <ProfileCard
                  avatar={botTwoAvatar.fixed.src}
                  name={botTwoName}
                  description={botTwoDescription.botTwoDescription}
                />
              </ProfileSection>
            </div>
          </Section>
          <Section id="contact-us" color="#FF4A4A" style={{ color: "#ffffff" }}>
            <h2>{contactUsTitle}</h2>
            {contactUsDescription.contactUsDescription.split("\n").map(line => (
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
          </Section>
          <Footer />
        </div>
      </>
    )
  }
}

export const pageQuery = graphql`
  query HomeQuery {
    contentfulHomePage(title: { eq: "home" }) {
      title
      tags
      logo {
        fixed(resizingBehavior: SCALE, height: 80) {
          src
        }
      }
      heroText
      tagLine {
        tagLine
      }
      description {
        description
      }
      getInTouchButtonLabel
      whoAreWeTitle
      whoAreWeDescription {
        whoAreWeDescription
      }
      botOneName
      botOneDescription {
        botOneDescription
      }
      botOneAvatar {
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
      botTwoName
      botTwoDescription {
        botTwoDescription
      }
      botTwoAvatar {
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
      contactUsTitle
      contactUsDescription {
        contactUsDescription
      }
      email
      phone
    }
  }
`
