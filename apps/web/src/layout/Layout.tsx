import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: 20 }}>
        <h1>CleanOps UI</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
