import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${props => props.color};
  padding: 70px 50px;
  @media (max-width: 600px) {
    padding: 70px 25px;
  }
  ... ${props => props.style};
`

export default function Section({ id, color, children, style }) {
  return (
    <Container id={id} style={style} color={color}>
      {children}
    </Container>
  )
}
