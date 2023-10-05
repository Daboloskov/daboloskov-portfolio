"use client"; // This is a client component

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/activeSectionContext';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: { opacity: 0, transition: { duration: 0.2, ease: [0.12, 0, 0.39, 0] } },
    open: { opacity: 1, transition: { duration: 0.2, ease: [0.12, 0, 0.39, 1] } },
  }

  const mobileLinks = {
    closed: { y: "30vh", transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] } },
    open: { y:"0", transition: { duration: 0.4, ease: [0.12, 0, 0.39, 1] } },
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
    <header className='z-[999] relative'>
        <div className="fixed top-10 right-10 text-xl z-100">
            <button onClick={toggleMenu} className="sm:hidden block text-gray-500 focus:outline-none">
                <FiMenu size={32} className="text-gray-700 h-[3rem] w-[3rem] p-2 rounded-xl bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]"/>
            </button>
        </div>
        <motion.div className="hidden fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full sm:block"
            initial={{ y: -500, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1}}
        ></motion.div>



        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                variants={menuVariants}
                initial="closed"
                animate={isMenuOpen ? 'open' : 'closed'}
                exit="closed"
                className={clsx(
                    'fixed', 
                    'top-0',
                    'w-full',
                    'items-center',
                    'justify-center',
                    'h-screen',
                    'bg-gray-50',
                    {
                        hidden: !isMenuOpen,
                        'sm:flex': isMenuOpen,
                    }
                )}
            >
                <div className="fixed top-10 right-10 text-xl z-100">
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 focus:outline-none">
                        <MdClose size={32} className="text-gray-700 h-[3rem] w-[3rem] p-2 bg-black bg-opacity-5 rounded-full"/>
                    </button>
                </div>
                <nav className="pt-[6rem]">
                    <ul className="flex flex-col justify-between h-full">
                        {links.map(link =>(
                            <motion.li
                                variants={mobileLinks}
                                initial="closed"
                                animate={isMenuOpen ? 'open' : 'closed'}
                                exit="closed"
                                className="flex-grow py-6 flex items-center justify-center relative"
                                key={link.hash}
                            >
                                <Link
                                    className={clsx("items-center justify-center text-4xl relative font-medium hover:text-gray-950 transition", {
                                        "text-gray-950": activeSection === link.name
                                    })}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name)
                                        setTimeOfLastClick(Date.now())
                                        setIsMenuOpen(false)
                                    }}
                                >
                                {link.name}
                                {link.name === activeSection && (
                                    <span
                                        className="bg-black bg-opacity-5 rounded-full absolute top-[-0.3rem] bottom-[-0.3rem] left-[-1.2rem] right-[-1.2rem] -z-10"
                                    ></span>
                                )}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
            )}
        </AnimatePresence>

        <nav className="hidden fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 sm:flex">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {links.map(link =>(
                    <motion.li
                        className="h-3/4 flex items-center justify-center"
                        key={link.hash}
                        initial={{ y: -500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1}}
                    >
                        <Link
                            className={clsx("flex flex-col w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition", {
                                "text-gray-950": activeSection === link.name
                            })}
                            href={link.hash}
                            onClick={() => {
                                setActiveSection(link.name)
                                setTimeOfLastClick(Date.now())
                            }}
                        >
                            {link.name}
                            {link.name === activeSection && (
                                <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-gray-700 w-1 h-1 rounded-full absolute mt-[1.7rem]"></motion.span>
                            )}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    </header>
  )
}
