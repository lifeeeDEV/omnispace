import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (res.error) {
      // handle error
      console.error(res.error);
    } else {
      // redirect to homepage or dashboard
      router.push('/feed');
    }
  };

  return (
    <div className=" flex justify-center text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2><p className="mb-3">Don't have an Account? <Link href="/signup">Sign Up</Link></p>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="mb-4 p-2 w-full rounded bg-gray-700 border border-gray-600"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="mb-4 p-2 w-full rounded bg-gray-700 border border-gray-600"
        />
        <button type="submit" className="p-2 bg-primary rounded w-full">Login</button>
      </form>
    </div>
  );
}
