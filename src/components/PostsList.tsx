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
  <div>
    {posts.map((post) => (
      <Link
        to={post.fields.slug}
        className="block my-1 p-2 rounded-md hover:bg-gray-800"
      >
        {post.frontmatter.title}
      </Link>
    ))}
  </div>
);

export default PostsList;
