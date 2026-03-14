import React from 'react';

export default function SignIn() {
  return (
    <main>
      <h1>Sign In</h1>
      <form>
        <label>Email: <input type="email" name="email" /></label>
        <br/>
        <label>Password: <input type="password" name="password" /></label>
        <br/>
        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}
