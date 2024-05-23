import Link from 'next/link';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';
import { useState } from 'react';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} round min-h-screen bg-gray-900 text-white rounded-lg`}>
      <header className="p-4 bg-gray-800 flex justify-between items-center shadow-md rounded-lg">
        <Link href="/">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Omni
        </h1>
        </Link>
        <nav className="flex space-x-4 round bg-gray-800">
          <Link href="/login" className=" p-2 rounded hover:bg-gray-700 transition-colors duration-300">Sign In
          </Link>
          <Link href="/communities" classsName="p-2 rounded hover:bg-gray-700 transition-colors duration-300">Communities
          </Link>
          <Link href="/feed" className="p-2 rounded hover:bg-gray-700 transition-colors duration-300">Feed
          </Link>
        </nav>
      </header>
      <div className="flex">
        <LeftSidebar />
        <main className="flex-1 p-4">{children}</main>
        <RightSidebar />
      </div>
    </div>
  );
}
