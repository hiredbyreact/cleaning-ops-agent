import React from 'react';
type LayoutProps = { children: React.ReactNode };
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
