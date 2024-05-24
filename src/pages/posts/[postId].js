import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { TextField, Button, Card, CardHeader, CardContent, Typography, List, ListItem } from '@mui/material';
import dbConnect from '../../utils/dbConnect';
import Post from '../../models/Post';
import Comment from '../../models/Comment';

const PostPage = ({ post, initialComments }) => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: session, status } = useSession();
  const [comments, setComments] = useState(initialComments || []);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (postId && !initialComments) {
      fetch(`/api/comments/${postId}`)
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((error) => console.error('Error fetching comments:', error));
    }
  }, [postId, initialComments]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      signIn();
      return;
    }

    const res = await fetch(`/api/comments/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments([newComment, ...comments]);
      setContent('');
    } else {
      console.error('Error creating comment');
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <Card>
      <CardHeader title={post.title} />
      <CardContent>
        <Typography variant="body1">{post.content}</Typography>
        <Typography variant="h6">Comments</Typography>
        <form onSubmit={handleCommentSubmit}>
          <TextField
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add Comment
          </Button>
        </form>
        <List>
          {comments.map((comment) => (
            <ListItem key={comment._id}>
              <Typography variant="body2">{comment.content}</Typography>
              <Typography variant="caption">By {comment.author}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export async function getServerSideProps(context) {
  await dbConnect();
  const { postId } = context.params;

  const postResult = await Post.findById(postId).populate('communityId').lean();
  if (!postResult) {
    return {
      notFound: true,
    };
  }

  postResult._id = postResult._id.toString();
  if (postResult.createdAt) {
    postResult.createdAt = postResult.createdAt.toISOString();
  }
  if (postResult.updatedAt) {
    postResult.updatedAt = postResult.updatedAt.toISOString();
  }
  if (postResult.communityId) {
    postResult.communityId = {
      _id: postResult.communityId._id.toString(),
      name: postResult.communityId.name,
    };
  }

  const commentsResult = await Comment.find({ post: postId }).lean();
  const comments = commentsResult.map(comment => {
    comment._id = comment._id.toString();
    if (comment.createdAt) {
      comment.createdAt = comment.createdAt.toISOString();
    }
    if (comment.updatedAt) {
      comment.updatedAt = comment.updatedAt.toISOString();
    }
    return comment;
  });

  return {
    props: {
      post: postResult,
      initialComments: comments,
    },
  };
}

export default PostPage;
