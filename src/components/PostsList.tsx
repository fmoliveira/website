import React, { FC } from "react";
import { Link } from "gatsby";

interface Props {
  posts: {
    frontmatter: {
      title: string;
      date: string;
    };
    fields: {
      slug: string;
    };
  }[];
}

const PostsList: FC<Props> = ({ posts }) => (
  <ul>
    <h2 className="text-xl text-yellow-500">Latest Posts</h2>
    {posts.map((post) => (
      <li>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </li>
    ))}
  </ul>
);

export default PostsList;
