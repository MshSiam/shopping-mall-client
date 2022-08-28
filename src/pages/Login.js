import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(55, 55, 55, 0.5)),
    url("https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  ${mobile({ width: "70%" })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  ${mobile({ marginBottom: "7px" })}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0;
  padding: 10px;
  font-size: 15px;
  ${mobile({ marginTop: "5px" })}
`

const Button = styled.button`
  background-color: teal;
  color: aliceblue;
  border: 1px solid white;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.4s;
  width: 100%;
  margin: 10px auto;
  &:hover {
    color: teal;
    background-color: aliceblue;
    border: 1px solid teal;
  }
`

const Link = styled.a`
  margin: 10px 0;
  cursor: pointer;
  text-decoration: underline;
`

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { userName, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleClick}>LOGIN </Button>
          <Link>Forget Password?</Link>
          <Link>Create a New Accounr?</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
