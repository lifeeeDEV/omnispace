import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      // Use getSession to fetch session on the server side
      const session = await getSession({ req });
      console.log('Session:', session); // Debug session
      if (!session) {
        return res.status(401).json({ message: 'Not authenticated' });
      }

      const { title, content } = req.body;

      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
      }

      await dbConnect();

      try {
        const newPost = new Post({
          title,
          content,
          author: session.user.email, // Adjust this based on your user model
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

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Session before fetch:', session); // Debug session

  const res = await fetch('/api/posts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Include the token from the session in the Authorization header
      'Authorization': `Bearer ${session?.token}`,
    },
    body: JSON.stringify({ title, content }),
  });

  if (res.ok) {
    router.push('/feed');
  } else {
    const errorData = await res.json();
    console.error('Error creating post', errorData);
  }
};

