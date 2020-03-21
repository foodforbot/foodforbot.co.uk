import React from "react"
import styled from "styled-components"

const Label = styled.span`
  color: #ffffff;
  text-decoration-color: #ffffff;
  text-decoration: underline;
`

const LinkLabel = styled.span`
  text-decoration: underline;
`

export default function ContactLink({ label, link, href, containerStyle }) {
  return (
    <div style={containerStyle}>
      <a href={href}>
        <Label>{label}:</Label>
        <LinkLabel>{` ${link}`}</LinkLabel>
      </a>
    </div>
  )
}
