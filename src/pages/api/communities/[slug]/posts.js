import dbConnect from '../../../../utils/dbConnect';
import Post from '../../../../models/Post';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  const { communityId } = req.query;

  switch (method) {
    case 'GET':
      try {
        const posts = await Post.find({ community: communityId });
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching posts' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
