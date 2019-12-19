import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>
          <h1
            style={{
              ...scale(1),
              marginBottom: rhythm(1.5),
              marginTop: 0
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
