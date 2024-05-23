import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

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
      <Link href="/communities/create">
      <Button className="round bg-4 mb-4 ml-4">Create a Community</Button>
      </Link>
      {Array.isArray(communities) && communities.length > 0 ? (
        communities.map((community) => (
          <Card key={community._id} className="mb-4 bg-gray-800">
            <CardContent className="bg-gray-800">
              <Typography variant="h5" className="text-white">{community.name}</Typography>
              <Typography variant="body1" className="text-white">{community.description}</Typography>
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
