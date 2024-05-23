import React from 'react';
import { useRouter } from 'next/router';
import { Button, Typography, Card, CardContent } from '@mui/material';

const RightSidebar = () => {
  const router = useRouter();

  const handleCreatePost = () => {
    router.push('/posts/create');
  };

  return (
    <div className="w-1/4 p-4 ">
      <Card className="bg-gray-800">
        <CardContent>
          <Typography variant="h6" className="text-white">Omni Space</Typography>
          <Typography variant="body1" className="text-white" paragraph>
            The all in one platform for chatting, discussing, memes, politics and much more.
          </Typography>
          <Button variant="contained" color="primary" className="text-white" onClick={handleCreatePost}>
            Create Post
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
