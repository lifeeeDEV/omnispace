import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link href="/" style={{ marginRight: '10px' }}>Home</Link>
        {session && (
          <Link href="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
        )}
      </div>
      <div>
        {!session && (
          <>
            <Link href="/login" style={{ marginRight: '10px' }}>
              <button>Login</button>
            </Link>
            <Link href="/signup">
              <button>Register</button>
            </Link>
          </>
        )}
        {session && (
          <button onClick={() => signOut()}>Sign Out</button>
        )}
      </div>
    </nav>
  );
}
