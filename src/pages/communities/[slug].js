import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

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
        .then((data) => {
          if (Array.isArray(data)) {
            setPosts(data);
          } else {
            setPosts([]); // Ensure posts is an array if data is not an array
          }
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
          setPosts([]); // Ensure posts is an array in case of error
        });
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
      <Card className="bg-gray-800 mb-4">
        <CardContent>
          <Typography variant="h4" className="text-white" component="div">
            {community.name}
          </Typography>
          <Typography variant="body1" className="text-white">
            {community.description}
          </Typography>
        </CardContent>
      </Card>
      <div>
        <Typography variant="h5" component="div" className="mb-4">
          Posts
        </Typography>
        {posts.map((post) => (
          <Card key={post._id} className="mb-4">
            <CardContent>
              <Link href={`/posts/${post._id}`} passHref>
                <Typography variant="h6" component="a">
                  {post.title}
                </Typography>
              </Link>
              <Typography variant="body2">{post.content}</Typography>
              <Typography variant="caption" className="text-gray-500">
                Posted by {post.author} on {new Date(post.createdAt).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
