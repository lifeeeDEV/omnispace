import dbConnect from '../../../utils/dbConnect';
import Community from '../../../models/Community';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const communities = await Community.find({});
        res.status(200).json(communities);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching communities' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
