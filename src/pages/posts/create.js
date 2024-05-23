import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';

const CreatePost = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    signIn();
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Session before fetch:', session);

    const res = await fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, author: session.user.email }),
    });

    if (res.ok) {
      router.push('/feed');
    } else {
      const errorData = await res.json();
      console.error('Error creating post', errorData);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Create a New Post
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            size="small"
          />
          <TextField
            label="Content"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            size="small"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
