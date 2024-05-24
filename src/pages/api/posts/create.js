import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';
import { authOptions } from "../auth/[...nextauth]"
import { getServerSession } from 'next-auth/next';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();


  switch (method) {
    case 'POST':
      const session = await getServerSession(req, res, authOptions);
      console.log('Session:', session);
      if (!session) {
        return res.status(401).json({ message: 'Not authenticated' });
      }

      const { title, content } = req.body;

      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
      }

      try {
        const newPost = new Post({
          title,
          content,
          author: session.user.email,  // Use the email from the session
        });

        await newPost.save();
        res.status(201).json(newPost);
      } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}