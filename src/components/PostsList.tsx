import React, { FC } from "react";
import { Link } from "gatsby";

import IconNormal from "./icons/IconNormal";
import IconGarden from "./icons/IconGarden";
import IconLesson from "./icons/IconLesson";

import "./PostsList.css";

const icons = {
  normal: <IconNormal />,
  garden: <IconGarden />,
  lesson: <IconLesson />,
};

interface Props {
  posts: {
    frontmatter: {
      title: string;
      date: string;
      type: string;
    };
    fields: {
      slug: string;
    };
  }[];
}

const PostsList: FC<Props> = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <Link
        to={post.fields.slug}
        className="flex my-1 p-2 rounded-md hover:bg-gray-800"
      >
        <span className="post-icon mr-2">
          {icons[post.frontmatter.type || "normal"]}
        </span>
        <span>
          {post.frontmatter.title} {post.frontmatter.type}
        </span>
      </Link>
    ))}
  </div>
);

export default PostsList;
