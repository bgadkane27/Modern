import { useState, useRef, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { contact } from '../constants';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-[#030014]">
        <div className="text-2xl font-bold font-serif">B — A</div>
        <button
          onClick={() => setMenuOpen(true)}
          className="border px-3 py-1 text-sm font-bold hover:cursor-pointer"
        >
          MENU
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className="fixed top-0 right-0 w-80 bg-[#030014] z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-start px-10 py-4">
              <div className="text-2xl font-bold font-serif">B — A</div>
              <button
                onClick={() => setMenuOpen(false)}
                className="border px-3 py-1 text-sm font-bold"
              >
                CLOSE
              </button>
            </div>

            <div className="flex flex-col justify-center h-full px-10">
              {[
                { id: 'hero', text: 'HOME', number: '01' },
                { id: 'about', text: 'ABOUT', number: '02' },
                { id: 'project', text: 'PROJECTS', number: '03' },
                { id: 'contact', text: 'CONTACT', number: '04' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-6 py-6 border-t border-white/20"
                >
                  <p className="text-xs text-neutral-400">{item.number}</p>
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={1500}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl md:text-xl font-serif cursor-pointer hover:opacity-80 transition"
                  >
                    {item.text}
                  </ScrollLink>
                </div>
              ))}
            </div>
            <hr />
            <div className="flex flex-wrap items-center justify-center gap-8 py-2">
              {contact.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-sm mt-1 block"
                    >
                      <Icon className="mb-3 text-[#8C39D9]" size={16} />
                    </a>
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="flex flex-col gap-6 justify-between items-center px-6 py-4 text-xs">
              <span>© {new Date().getFullYear()} Baburao Adkane. All rights reserved.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;