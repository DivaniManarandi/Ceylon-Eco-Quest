import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/CEQ logo.png';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClass = "font-headline font-bold text-lg tracking-tight transition-colors";
    
    if (isActive) {
      return `${baseClass} text-primary dark:text-primary-fixed border-b-2 border-secondary pb-1`;
    }
    return `${baseClass} text-primary/70 dark:text-slate-400 hover:text-primary dark:hover:text-primary-fixed`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-none bg-gradient-to-b from-white/40 to-transparent shadow-none">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center">
            <img 
              alt="Ceylon Eco Quest Logo" 
              className="h-16 w-auto object-contain cursor-pointer" 
              src={logo} 
            />
            <span className="ml-3 font-headline text-2xl font-black text-primary dark:text-primary-fixed italic">Ceylon Eco Quest</span>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <Link className={getLinkClass('/')} to="/">Home</Link>
          <Link className={getLinkClass('/destinations')} to="/destinations">Tour Destinations</Link>
          <Link className={getLinkClass('/about')} to="/about">About</Link>
          <Link className={getLinkClass('/gallery')} to="/gallery">Gallery</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
