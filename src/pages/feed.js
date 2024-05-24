import React from 'react';
import { getSession, useSession } from 'next-auth/react';
import dbConnect from '../utils/dbConnect';
import Post from '../models/Post';
import Community from '../models/Community';
import Link from 'next/link';
import PostItem from '../components/PostItem';

const Feed = ({ posts, communities }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Please log in to see the feed.</p>;
  }

  return (
    <div className="flex">
      <div className="flex-grow p-4">
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  await dbConnect();

  const postsResult = await Post.find({}).populate('communityId').sort({ createdAt: -1 }).lean();
  const posts = postsResult.map(doc => {
    const post = doc;
    post._id = post._id.toString();
    if (post.createdAt) {
      post.createdAt = post.createdAt.toISOString();
    }
    if (post.updatedAt) {
      post.updatedAt = post.updatedAt.toISOString();
    }
    if (post.communityId) {
      post.communityId._id = post.communityId._id.toString();
    }
    return post;
  });

  const communitiesResult = await Community.find({});
  const communities = communitiesResult.map(doc => {
    const community = doc.toObject();
    community._id = community._id.toString();
    return community;
  });

  return {
    props: {
      posts,
      communities,
    },
  };
}

export default Feed;
