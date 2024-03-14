'use client'

import getCookies from "@/actions/get-cookies"
import { useState } from "react"

export default function Cookie() {
  const [token, setToken] = useState('')

  async function handleClick() {
    const token = await getCookies('token')
    if(token) setToken(token)
  }

  return (
    <div>
      <h2>Cookie: {token}</h2>
      <button onClick={handleClick}>Pegar Cookie</button>
    </div>
  )
}