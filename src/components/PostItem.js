import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Link from 'next/link';

const PostItem = ({ post }) => {
  const { data: session } = useSession();
  const [voteScore, setVoteScore] = useState(post.voteScore);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleVote = async (value) => {
    if (!session) {
      setSnackbarMessage('Please sign in to vote');
      setSnackbarOpen(true);
      return;
    }

    try {
      const res = await fetch(`/api/votes/${post._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });

      if (res.ok) {
        const data = await res.json();
        setVoteScore(data.voteScore);
      } else {
        const errorData = await res.json();
        console.error('Error voting:', errorData);
      }
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Card className="mb-4">
      <CardContent>
        <Link href={`/posts/${post._id}`} passHref>
          <Typography variant="h6" component="a">
            {post.title}
          </Typography>
        </Link>
        <Typography variant="body2">{post.content}</Typography>
        <div className="flex items-center mt-2">
          <IconButton onClick={() => handleVote(1)} color="primary">
            <ThumbUpIcon />
          </IconButton>
          <IconButton onClick={() => handleVote(-1)} color="secondary">
            <ThumbDownIcon />
          </IconButton>
          <Typography variant="body2" className="ml-2">
            {voteScore} votes
          </Typography>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          <span>Posted in {post.communityId && (
            <Link href={`/communities/${post.communityId.name.toLowerCase()}`}>
          <span>{post.communityId.name} </span>
          </Link>
          )} 
          by {post.author}</span> | <span>{new Date(post.createdAt).toLocaleString()}</span>
        </div>
      </CardContent>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="warning">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default PostItem;
