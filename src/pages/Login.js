import React from "react"
import styled from "styled-components"

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
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
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
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />

          <Button>LOGIN </Button>
          <Link>Forget Password?</Link>
          <Link>Create a New Accounr?</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
