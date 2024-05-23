import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

const CommunitiesPage = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const res = await fetch('/api/communities');
        const data = await res.json();
        console.log('Fetched communities:', data); // Log the fetched communities
        setCommunities(data);
      } catch (error) {
        console.error('Error fetching communities:', error);
      }
    };

    fetchCommunities();
  }, []);

  return (
    <div>
      <Typography variant="h4" component="div">
        Communities
      </Typography>
      <Button className="round bg-4 mb-4 ml-4">Create a Community</Button>
      {Array.isArray(communities) && communities.length > 0 ? (
        communities.map((community) => (
          <Card key={community._id} className="mb-4">
            <CardContent>
              <Typography variant="h5">{community.name}</Typography>
              <Typography variant="body1">{community.description}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1">No communities found</Typography>
      )}
    </div>
  );
};

export default CommunitiesPage;
