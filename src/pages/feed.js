import React from 'react';
import { getSession, useSession } from 'next-auth/react';
import dbConnect from '../utils/dbConnect';
import Post from '../models/Post';
import Community from '../models/Community';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import PostList from '../components/PostList';
import Link from 'next/link';

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
          <Link key={post._id} href={`/posts/${post._id}`} passHref
             className="block p-4 mb-4 bg-white rounded shadow-md hover:bg-gray-100 transition duration-300">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-2">{post.content}</p>
              <div className="text-sm text-gray-500">
                <span>Posted by {post.author}</span> | <span>{new Date(post.createdAt).toLocaleString()}</span>
              </div>
              {post.communityId && (
                <div className="text-sm text-gray-500">
                  Community: {post.communityId.name}
                </div>
              )}

          </Link>
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

  const postsResult = await Post.find({}).populate('communityId').sort({ createdAt: -1 }); // Sort by createdAt descending
  const posts = postsResult.map(doc => {
    const post = doc.toObject();
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
