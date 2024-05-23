import dbConnect from '../../../utils/dbConnect';
import Comment from '../../../models/Comment';
import Post from '../../../models/Post';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const { method } = req;
  const { postId } = req.query;
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const comments = await Comment.find({ post: postId }).sort({ createdAt: -1 });
        res.status(200).json(comments);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching comments' }); // Corrected syntax
      }
      break;

    case 'POST':
      try {
        const { content } = req.body;
        if (!content) {
          return res.status(400).json({ error: 'Content is required' });
        }

        const post = await Post.findById(postId);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }

        const newComment = new Comment({
          content,
          author: session.user.email,
          post: postId,
        });

        await newComment.save();
        res.status(201).json(newComment);
      } catch (error) {
        res.status(500).json({ error: 'Error creating comment' }); // Corrected syntax
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
