import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';

export default async function handler(req, res) {
  const { method } = req;
  const { postId } = req.query;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const post = await Post.findById(postId);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching post' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
