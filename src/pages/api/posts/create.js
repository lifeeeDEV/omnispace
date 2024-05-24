import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';
import { authOptions } from '../auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const session = await getServerSession(req, res, authOptions);
        console.log('Session:', session);

        if (!session) {
          return res.status(401).json({ message: 'Not authenticated' });
        }

        const { title, content, communityId } = req.body;
        console.log('Request Body:', req.body);

        if (!title || !content) {
          return res.status(400).json({ message: 'Title and content are required' });
        }

        const newPost = new Post({
          title,
          content,
          author: session.user.email,
          communityId: communityId || null,
          createdAt: new Date(),
        });

        await newPost.save();
        res.status(201).json(newPost);
      } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Error creating post', error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
