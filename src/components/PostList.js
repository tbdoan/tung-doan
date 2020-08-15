import React from 'react';
import Post from './Post';

const PostList = ({ dataArray }) => {
  if (!Array.isArray(dataArray)) { return <br /> };
  return dataArray.map((data, index) => {
    return (
      <Post
        key={index}
        date={Date()}
        title={data.title}
        author={data.author}
        content={data.content}
      />
    )
  })
}

export default PostList;