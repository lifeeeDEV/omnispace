import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const CreateCommunity = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/communities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('Community created:', data); // Log the response
      router.push('/');
    } else {
      const errorData = await res.json();
      console.error('Error creating community', errorData);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Create a New Community
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default CreateCommunity;
