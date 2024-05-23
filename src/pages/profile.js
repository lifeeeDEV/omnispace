import React, { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

export default function Profile() {
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ username: '', bio: '' });

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/profile')
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          setFormData({ username: data.username, bio: data.bio });
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/profile', {
      method: profile ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const updatedProfile = await res.json();
      setProfile(updatedProfile);
    } else {
      console.error('Error updating profile');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    signIn();
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          User Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Bio"
            variant="outlined"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
