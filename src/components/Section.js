import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${props => props.color};
  padding: 70px 50px;
  ... ${props => props.style};
`

export default function Section({ id, color, children, style }) {
  return (
    <Container id={id} style={style} color={color}>
      {children}
    </Container>
  )
}
