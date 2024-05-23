import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function CreatePost() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ title: '', content: '', community: '' });

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn();
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'authenticated') {
      const res = await fetch('/api/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push('/feed');
      } else {
        console.error('Error creating post');
      }
    } else {
      signIn();
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />
        <input
          name="community"
          type="text"
          placeholder="Community"
          value={form.community}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
