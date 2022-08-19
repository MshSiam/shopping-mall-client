import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(55, 55, 55, 0.5)),
    url("https://thumbs.dreamstime.com/b/futuristic-technology-trend-smart-retail-concept-customer-login-to-online-network-which-use-augmented-mixed-virtual-reality-to-195994343.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
  ${mobile({ width: "70%" })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  height: 35px;
  margin: 20px 10px 0 0;
  font-size: 17px;
  ${mobile({ fontSize: "15px" })}
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const Button = styled.button`
  background-color: teal;
  color: aliceblue;
  border: 1px solid white;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.4s;
  width: 80%;
  margin: 0 auto;
  &:hover {
    color: teal;
    background-color: aliceblue;
    border: 1px solid teal;
  }
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="user name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating account , I consent to processing of my personal data in
            accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
