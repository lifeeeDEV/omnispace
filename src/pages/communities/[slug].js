import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';

const CommunityPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`/api/communities/${slug}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Community not found');
          }
          return res.json();
        })
        .then((data) => {
          setCommunity(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching community:', error);
          setLoading(false);
        });

      fetch(`/api/communities/${slug}/posts`)
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error('Error fetching posts:', error));
    }
  }, [slug]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!community) {
    return <Typography variant="h6">Community not found</Typography>;
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            {community.name}
          </Typography>
          <Typography variant="body1">
            {community.description}
          </Typography>
        </CardContent>
      </Card>
      <div>
        <Typography variant="h5" component="div">
          Posts
        </Typography>
        {posts.map((post) => (
          <Card key={post._id} className="mb-4">
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2">{post.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
