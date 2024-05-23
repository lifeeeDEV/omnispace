import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

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
    console.log('Session before fetch:', session); // Log the session

    const res = await fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include the token from the session in the Authorization header
        'Authorization': `Bearer ${session.token}`,
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      router.push('/feed');
    } else {
      const errorData = await res.json();
      console.error('Error creating post', errorData);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Create a New Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
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
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
