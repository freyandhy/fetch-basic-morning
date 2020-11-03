import React from 'react';

const PostList = (props) => {
  return props.data.map(data => (
    <div key={data.id} className="post-list">
      <h2>{data.title}</h2>
      <hr />
    </div>
  ))
}

export default PostList;