import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
}
