import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="max-w-[95rem] w-full mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="mb-4 md:mb-4">
          <h1 className="text-3xl font-bold text-red-400">LOGO</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 justify-center">
          <Link to="/" className="text-green-500 hover:bg-red-500 hover:text-blue-400 hover:px-3 hover:py-3 hover:rounded-2xl">Home</Link>
          <Link to="/blog" className="text-blue-500 hover:bg-pink-500 hover:text-blue-400 hover:px-3 hover:py-3 hover:rounded-2xl">Blog</Link>
          <Link to="/About" className="text-yellow-500 hover:bg-green-500 hover:text-blue-400 hover:px-3 hover:py-3 hover:rounded-2xl">About</Link>
          <Link to="/Contact" className="text-yellow-500 hover:bg-green-500 hover:text-blue-400 hover:px-3 hover:py-3 hover:rounded-2xl">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
