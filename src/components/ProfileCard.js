import React from "react"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 50px;
`

const Card = styled.div`
  max-width: 300px;
  display: inline-block;
`

export default function ProfileCard({ avatar, name, description }) {
  return (
    <Container>
      <Card>
        <img src={`${avatar + "&r=max"}`} alt={`${name}s avatar`} />
        <h2>{name}</h2>
        <div>{description}</div>
      </Card>
    </Container>
  )
}
