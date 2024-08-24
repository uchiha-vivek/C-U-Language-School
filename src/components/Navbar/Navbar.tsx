import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../ui/button';

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-300 text-black shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
              Logo
            </Link>
          </div>

          {/* Left Menu */}
          <div className="hidden md:flex flex-grow space-x-8 ml-10 text-black">
            <Link href="/languages" className="text-black hover:text-gray-800">
              Languages
            </Link>
            <Link href="/courses" className="text-black hover:text-gray-800">
              Courses
            </Link>
            <Link href="/about-us" className="text-black hover:text-gray-800">
              About Us
            </Link>
            <Link href="/how-it-works" className="text-black hover:text-gray-800">
              How it Works
            </Link>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/language" className="text-black hover:text-gray-800">
              English
            </Link>
            <Link href="/help" className="text-black hover:text-gray-800">
              Help
            </Link>
            <Link href="/login" className="text-black hover:text-gray-800">
              Login
            </Link>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
