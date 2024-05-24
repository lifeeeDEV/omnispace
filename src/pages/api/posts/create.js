import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';
import User from '../../../models/User'; 
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

        const { email } = session.user;
        const user = await User.findOne({ email });

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        const { title, content, communityId } = req.body;
        console.log('Request Body:', req.body);

        if (!title || !content) {
          return res.status(400).json({ message: 'Title and content are required' });
        }

        const newPost = new Post({
          title,
          content,
          author: user.username, // Use the username instead of email
          communityId: communityId || null,
          createdAt: new Date(),
        });

        await newPost.save();
        console.log('New Post:', newPost);
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
