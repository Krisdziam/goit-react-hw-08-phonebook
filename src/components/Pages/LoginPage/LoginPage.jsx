import React from 'react'

export default function LoginPage() {
  return (
    <form  autoComplete="off">
    <label >
      Email
      <input type="email" name="email" />
    </label>
    <label >
      Password
      <input type="password" name="password" />
    </label>
    <button type="submit">Log In</button>
  </form>
  )
}
