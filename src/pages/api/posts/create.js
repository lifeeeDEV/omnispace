import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      const session = await getSession({ req });
      console.log('Session:', session);
      if (!session) {
        return res.status(401).json({ message: 'Not authenticated' });
      }

      const { title, content, author } = req.body;

      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
      }

      try {
        const newPost = new Post({
          title,
          content,
          author,
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
