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

const Avatar = styled.div`
  background-image: url(${props => props.avatar});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: inline-block;
  width: 225px;
  height: 225px;
  border-radius: ${225 / 2}px;
  background-color: #c4c4c4;
`

export default function ProfileCard({ avatar, name, description }) {
  return (
    <Container>
      <Card>
        <Avatar avatar={avatar} />
        <h2>{name}</h2>
        <div>{description}</div>
      </Card>
    </Container>
  )
}
