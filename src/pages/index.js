import { getSession, useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function LandingPage() {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Welcome to Omni
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          A place to share and discuss your ideas
        </p>
        <div className="flex justify-center space-x-4">
          {!session ? (
            <>
              <button
                onClick={() => signIn()}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                Sign In
              </button>
              <button
                onClick={() => signIn()}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <p className="text-lg">Welcome, {session.user.email}</p>
              <button
                onClick={() => signOut()}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                Sign Out
              </button>
              <Link href="/feed">
                <a className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full shadow-md transition-transform transform hover:scale-105">
                  Go to Feed
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/feed',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
