import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ padding: 8, background: '#111' }}>
        <strong>CleanOps App</strong>
      </header>
      <main>{children}</main>
    </div>
  );
}
