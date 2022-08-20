import axios from "axios"

const BASE_URL = `http://localhost:5000/`
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjM3MjJjZDZkMzIzYjg0MmViMTRhMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDk3NDIxNiwiZXhwIjoxNjYxMjMzNDE2fQ.u1hN2LpVl6zBpoDQIZZ8xD2buG1YreVf0BgYsqUx8nw"

export const publicRequest = axios.create({
  baseURL: BASE_URL
})
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
})
