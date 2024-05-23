import dbConnect from '../../utils/dbConnect';
import Community from '../../models/Community';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const communities = await Community.find({});
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching communities' });
  }
}
