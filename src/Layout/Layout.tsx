import { ReactNode } from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

const Layout = ({children}:GlobalLayoutProps) => {
  return <div className="mx-10 ">{children}</div>;
};

export default Layout;
