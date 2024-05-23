import dbConnect from '../../../utils/dbConnect';
import UserProfile from '../../../models/UserProfile';

const handler = async (req, res) => {
  await dbConnect();

  const { userId } = req.query;

  try {
    const profile = await UserProfile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
};

export default handler;
