import React, { FC } from "react";
import { Helmet } from "react-helmet";

import "./Layout.css";

interface LinkProps {
  to: string;
}

const NavLink: FC<LinkProps> = ({ children, to }) => {
  const external = to.startsWith("https://");

  return (
    <li className="mr-6">
      <a
        href={to}
        target={external && "_blank"}
        rel={external && "noopener noreferrer"}
      >
        {children}
      </a>
    </li>
  );
};

const Layout: FC = ({ children }) => (
  <div className="container mx-auto px-8 py-4">
    <Helmet titleTemplate="%s - fmoliveira.dev">
      <title>Welcome</title>
    </Helmet>
    <div className="mb-12">
      <header>fmoliveira.dev</header>
      <ul className="flex mb-4 list-none">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/garden">Garden</NavLink>
        {/* <NavLink to="/lessons">Lessons</NavLink> */}
        {/* <NavLink to="/about">Contact</NavLink> */}
        <NavLink to="https://twitter.com/tfmoliveira">Twitter</NavLink>
      </ul>
    </div>
    <div>{children}</div>
  </div>
);

export default Layout;
