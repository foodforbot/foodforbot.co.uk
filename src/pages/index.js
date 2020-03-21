import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

import SEO from "../components/seo"
import Section from "../components/Section"
import Button from "../components/Button"
import ProfileCard from "../components/ProfileCard"
import ContactLink from "../components/ContactLink"
import Footer from "../components/Footer"

import LOGO from "../images/foodforbot_logo.png"
import RAMSAY_AVATAR from "../images/ramsay.jpg"
import DAZ_AVATAR from "../images/daz.jpg"

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

export default function IndexPage() {
  return (
    <>
      <SEO
        title="home"
        keywords={[
          `web`,
          `development`,
          `ramsay`,
          `daz`,
          `apps`,
          `drinks`,
          `food`,
          `beer`,
          `spirits`,
          `pizza`,
        ]}
      />
      <div>
        <Section id="food-for-bot" color="#0AD2FE">
          <Logo src={LOGO} alt="foodforbot logo" />
          <h1>Food for Bot</h1>
          <h2>We are here to help the food & drink industry</h2>
          <Text>Now is not the time for marketing jargon.</Text>
          <Text>
            We build websites for businesses in the food & drink industry.
          </Text>
          <Text>We are here to help kick-start your digital journey.</Text>
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Button
              title="Get in touch"
              onClick={() => scrollTo("#contact-us")}
            />
          </div>
        </Section>
        <Section id="who-are-we" color="#FED70A">
          <h2>Who are we?</h2>
          <div>We are Food for Bot.</div>
          <div style={{ margin: "0 auto", maxWidth: 750 }}>
            <ProfileSection>
              <ProfileCard
                avatar={RAMSAY_AVATAR}
                name="Ramsay"
                description="Bot 1: Loves pizza. Builds websites and apps using good tech."
              />
              <ProfileCard
                avatar={DAZ_AVATAR}
                name="Daz"
                description="Bot 2: Also loves pizza. Does design stuff and anything else that
              lets Ramsay do web stuff."
              />
            </ProfileSection>
          </div>
        </Section>
        <Section id="contact-us" color="#FF4A4A" style={{ color: "#ffffff" }}>
          <h2>Contact us</h2>
          <Text>Get in touch.</Text>
          <Text>Consulations are free.</Text>
          <Text>We will be open and upfront on the short term cost.</Text>
          <div style={{ padding: "30px 0" }}>
            <ContactLink
              label="Email"
              link="hello@foodforbot.co.uk"
              href="mailto:hello@foodforbot.co.uk"
              containerStyle={{ margin: "0 0 30px 0" }}
            />
            <ContactLink
              label="Call"
              link="07853650201"
              href="tel:07853650201"
            />
          </div>
        </Section>
        <Footer />
      </div>
    </>
  )
}
