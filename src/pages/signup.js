import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Signup() {
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.error) {
      // handle error
      console.error(data.error);
    } else {
      // redirect to login
      router.push('/login');
    }
  };

  return (
    <div className="flex justify-center text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <p className="mb-3">Have an Account? <Link href="/login">Login</Link></p>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          className="mb-4 p-2 w-full rounded bg-gray-700 border border-gray-600"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="mb-4 p-2 w-full rounded bg-gray-700 border border-gray-600"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="mb-4 p-2 w-full rounded bg-gray-700 border border-gray-600"
        />
        <button type="submit" className="p-2 bg-primary rounded w-full">Sign Up</button>
      </form>
    </div>
  );
}
