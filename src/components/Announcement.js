import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: orange;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Announcement = () => {
  return (
    <div>
      <Container>Super Deal ! Free Shipping on Orders Over $50.</Container>
    </div>
  )
}

export default Announcement
