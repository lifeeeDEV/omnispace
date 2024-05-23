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
          <Typography variant="h6" className="text-white">This is Omni...</Typography>
          <Typography variant="body1" className="text-white" paragraph>
            A safe place for people with cool odds :p
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
