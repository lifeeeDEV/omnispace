import dbConnect from '../../../utils/dbConnect';
import Vote from '../../../models/Vote';
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
    case 'POST':
      try {
        const { value } = req.body;
        if (![1, -1].includes(value)) {
          return res.status(400).json({ error: 'Invalid vote value' });
        }

        const post = await Post.findById(postId);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }

        const existingVote = await Vote.findOne({
          user: session.user.id,
          post: postId,
        });

        if (existingVote) {
          await Vote.findByIdAndUpdate(existingVote._id, { value });
        } else {
          const newVote = new Vote({
            user: session.user.id,
            post: postId,
            value,
          });
          await newVote.save();
        }

        const votes = await Vote.find({ post: postId });
        const voteScore = votes.reduce((sum, vote) => sum + vote.value, 0);

        await Post.findByIdAndUpdate(postId, { voteScore });

        res.status(200).json({ voteScore });
      } catch (error) {
        res.status(500).json({ error: 'Error voting' });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
