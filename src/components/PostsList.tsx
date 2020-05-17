import React, { FC } from "react";

interface Props {
  posts: {
    title: string;
    date: string;
  }[];
}

const PostsList: FC<Props> = ({ posts }) => (
  <ul>
    <h2 className="text-xl text-yellow-500">Latest Posts</h2>
    {posts.map((post) => (
      <li>{post.title}</li>
    ))}
  </ul>
);

export default PostsList;
