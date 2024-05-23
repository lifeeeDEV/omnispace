import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <p>No posts available</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Card key={post._id} className="mb-4">
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
