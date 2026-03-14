import React from 'react';
export const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div>
      <header style={{padding:10, background:'#eee'}}>CleanOps Admin</header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
