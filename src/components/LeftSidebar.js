import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LeftSidebar() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await fetch('/api/communities');
        const data = await response.json();
        setCommunities(data);
      } catch (error) {
        console.error('Error fetching communities:', error);
      }
    };

    fetchCommunities();
  }, []);

  return (
    <aside className="w-64 bg-gray-800 p-4  sticky top-0 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Communities</h2>
      <ul className="space-y-2">
        {communities.map((community) => (
          <li key={community._id}>
<Link href={`/communities/${community.name.toLowerCase()}`}
               className="block p-2 rounded text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
                {community.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
