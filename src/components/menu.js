import React from "react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

const links = [
  {
    pathname: "/",
    text: "Blog"
  },
  {
    pathname: "/portfolio",
    text: "Portfolio"
  }
];

function Menu({ location }) {
  return (
    <div style={{ marginBottom: rhythm(1) }}>
      {links.map((link, index) => (
        <>
          {index > 0 ? <> &bull; </> : null}
          {location.pathname === link.pathname ? (
            link.text
          ) : (
            <Link key={link.pathname} to={link.pathname}>
              {link.text}
            </Link>
          )}
        </>
      ))}
    </div>
  );
}

export default Menu;
