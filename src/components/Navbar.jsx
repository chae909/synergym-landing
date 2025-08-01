import React, { useState, useEffect } from 'react';
import synergyLogo from '../assets/synergym_logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#problem', text: '문제의식' },
        { href: '#solution', text: '솔루션' },
        { href: '#preview', text: '미리보기' },
        { href: '#preorder', text: '사전예약' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-slate-950/80 backdrop-blur-sm shadow-md' : ''
            }`}
        >
            <div className="container mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
                <a href="#home" className="flex items-center space-x-3">
                    <img 
                        src={synergyLogo} 
                        alt="Synergym AI Logo" 
                        className="h-8 w-auto"
                    />
                    <span className="text-xl font-bold text-white">Synergym AI</span>
                </a>
                
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="text-gray-300 hover:text-white transition"
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="text-white focus:outline-none"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={() => setIsMenuOpen(false)} 
                            className="block py-3 px-6 text-white text-center hover:bg-slate-800 transition"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;