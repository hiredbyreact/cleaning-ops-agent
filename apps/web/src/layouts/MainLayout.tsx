import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
        <strong>CleanOps Admin</strong>
      </header>
      <main style={{ padding: 16 }}>{children}</main>
    </div>
  );
}
