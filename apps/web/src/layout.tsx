import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div style={{ padding: 20 }}>
          <h1>CleanOps AI</h1>
          <nav style={{ marginBottom: 16 }}>
            <a href="/landing" style={{ marginRight: 12 }}>Landing</a>
            <a href="/signIn" style={{ marginRight: 12 }}>Sign In</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
