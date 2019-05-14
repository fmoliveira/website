import React from "react";

const Project = ({ name, description, year, image, links = [] }) => (
  <div>
    <header>
      <strong>{name}</strong> &bull; {year}
      {links.map(({ href, text }) => (
        <>
          {" "}
          &bull;{" "}
          <a href={href} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </>
      ))}
    </header>
    <p>{description}</p>
    {image && <img src={image} alt={name} />}
  </div>
);

export default Project;
