import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background-color: #000000;
  height: 80px;
  display: flex;
  align-items: center;
`

const Text = styled.div`
  flex: 1;
  color: #ffffff;
`

export default () => {
  return (
    <Footer>
      <Text>Steal our content if you like</Text>
    </Footer>
  )
}
