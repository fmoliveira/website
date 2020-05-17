import React, { FC } from "react";
import { Helmet } from "react-helmet";

import "./Layout.css";

interface LinkProps {
  to: string;
}

const NavLink: FC<LinkProps> = ({ children, to }) => (
  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-700" href={to}>
      {children}
    </a>
  </li>
);

const Layout: FC = ({ children }) => (
  <div className="m-8">
    <Helmet titleTemplate="%s - fmoliveira.dev">
      <title>Welcome</title>
    </Helmet>
    <h1 className="text-3xl">fmoliveira.dev</h1>
    <ul className="flex mb-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/garden">Garden</NavLink>
      <NavLink to="/lessons">Lessons</NavLink>
      <NavLink to="/about">Contact</NavLink>
    </ul>
    <div>{children}</div>
  </div>
);

export default Layout;
