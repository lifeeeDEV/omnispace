import { getSession } from 'next-auth/react';

export default async function auth(req, res, next) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  req.user = session.user;
  next();
}
