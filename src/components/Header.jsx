// import { useState } from 'react';
// import { Link as ScrollLink } from 'react-scroll';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent">
//         <div className="text-2xl font-bold font-serif">B — A</div>
//         <button
//           onClick={() => setMenuOpen(true)}
//           className="border px-3 py-1 text-sm font-bold hover:cursor-pointer"
//         >
//           MENU
//         </button>
//       </header>

//       {menuOpen && (
//         <div className="fixed inset-0 bg-black text-white z-50 transition duration-300 ease-in-out">
//           <div className="flex justify-between items-start px-6 py-4">
//             <div className="text-2xl font-bold font-serif">B — A</div>
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="border border-white px-3 py-1 text-sm font-bold"
//             >
//               CLOSE
//             </button>
//           </div>

//           <div className="flex flex-col justify-center h-[80%] px-10 md:px-32">
//             {[
//               { id: 'project', text: 'WORKS', number: '01' },
//               { id: 'about', text: 'ABOUT', number: '02' },
//               { id: 'contact', text: 'CONTACT', number: '03' },
//             ].map((item, index) => (
//               <div key={index} className="flex items-center justify-between gap-6 py-6 border-t border-white/20">
//                 <p className="text-xl text-neutral-300">{item.number}</p>
//                 <ScrollLink
//                   to={item.id}
//                   smooth={true}
//                   duration={600}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-4xl md:text-8xl font-serif cursor-pointer hover:opacity-80 transition"
//                 >
//                   {item.text}
//                 </ScrollLink>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-between items-center px-6 py-4 text-xs">
//             <span>© 2025 Baburao Adkane. All rights reserved.</span>
//             <a href="https://github.com/bgadkane27" target="_blank" rel="noopener noreferrer">
//               Github
//             </a>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-[#030014]">
        <div className="text-2xl font-bold font-serif">B — A</div>
        <button
          onClick={() => setMenuOpen(true)}
          className="border px-3 py-1 text-sm font-bold hover:cursor-pointer"
        >
          MENU
        </button>
      </header>

      {/* Overlay Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#030014] text-white z-50 flex flex-col"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.8}}
          >
            <div className="flex justify-between items-start px-6 py-4">
              <div className="text-2xl font-bold font-serif">B — A</div>
              <button
                onClick={() => setMenuOpen(false)}
                className="border border-white px-3 py-1 text-sm font-bold"
              >
                CLOSE
              </button>
            </div>

            <div className="flex flex-col justify-center h-full px-10 md:px-32">
              {[
                { id: 'hero', text: 'HOME', number: '01' },
                { id: 'about', text: 'ABOUT', number: '02' }, 
                { id: 'project', text: 'WORKS', number: '03' },                
                { id: 'contact', text: 'CONTACT', number: '04' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-6 py-6 border-t border-white/20"
                >
                  <p className="text-xl text-neutral-300">{item.number}</p>
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={1500}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl md:text-8xl font-serif cursor-pointer hover:opacity-80 transition"
                  >
                    {item.text}
                  </ScrollLink>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 justify-between items-center px-6 py-4 text-xs">
              <span>© 2025 Baburao Adkane. All rights reserved.</span>
              <a
                href="https://github.com/bgadkane27"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

