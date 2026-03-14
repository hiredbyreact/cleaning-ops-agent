import React from 'react';
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ padding: 16, background: '#111827', color: '#fff' }}>
        CleanOps Admin
      </header>
      <main>{children}</main>
    </div>
  );
}
