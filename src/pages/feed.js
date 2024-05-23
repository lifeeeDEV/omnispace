import React, { useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import dbConnect from '../utils/dbConnect';
import Post from '../models/Post';
import Community from '../models/Community';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import PostList from '../components/PostList';
import Link from 'next/link';

const Feed = ({ posts, communities }) => {
  const { data: session, id, status } = useSession();

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
          <Link key={post._id} href={`/posts/${post._id}`}>

              <PostList posts={[post]} />

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

  const postsResult = await Post.find({});
  const posts = postsResult.map(doc => {
    const post = doc.toObject();
    post._id = post._id.toString();
    if (post.createdAt) {
      post.createdAt = post.createdAt.toISOString();
    }
    if (post.updatedAt) {
      post.updatedAt = post.updatedAt.toISOString();
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
