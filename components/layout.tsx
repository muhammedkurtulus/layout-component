import React from "react";
  
const Header = () => {
  return <h3>This is Header</h3>;
};
  
const Footer = () => {
  return <h3>This is Footer</h3>;
};
 
type LayoutProps= {
  children: React.ReactNode,
};

const Layout = ({ children }:LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;
