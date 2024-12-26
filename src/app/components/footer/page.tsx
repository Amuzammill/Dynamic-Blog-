import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800  text-white px-6 ">
      <div className="container mx-auto text-center">
        <p className="mb-4 ">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-4 ">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-500" size={24} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500" size={24} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400" size={24} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500" size={24} />
          </Link>
        </div>
        <p>Designed and Developed with  by [Muzamil Ahmed]</p>
      </div>
    </footer>
  );
};

export default Footer;
