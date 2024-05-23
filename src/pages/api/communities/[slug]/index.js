import dbConnect from '../../../../utils/dbConnect';
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
        res.status(200).json(community);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching community', error });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
