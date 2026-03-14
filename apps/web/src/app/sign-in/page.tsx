import React from 'react';

export default function SignIn() {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label>Email</label><br/>
        <input type="email" />
        <br/>
        <label>Password</label><br/>
        <input type="password" />
        <br/>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
