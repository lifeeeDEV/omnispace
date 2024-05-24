import dbConnect from '../../../../utils/dbConnect';
import Post from '../../../../models/Post';
import Community from '../../../../models/Community';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  const { slug } = req.query;

  switch (method) {
    case 'GET':
      try {
        const community = await Community.findOne({ slug });
        if (!community) {
          return res.status(404).json({ message: 'Community not found' });
        }
        const posts = await Post.find({ communityId: community._id }).sort({ createdAt: -1 });
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
