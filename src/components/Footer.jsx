import React from 'react';

const Footer = () => (
    <footer className="bg-slate-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div>
                    <h4 className="text-lg font-bold text-white">Synergym AI</h4>
                    <p className="text-sm">Team Synerge: 채정윤, 정인우, 노지혜</p>
                </div>
                <div className="flex space-x-6 my-6 md:my-0">
                    <a href="#" className="hover:text-white transition">개인정보처리방침</a>
                    <a href="#" className="hover:text-white transition">문의하기</a>
                </div>
                <div className="flex space-x-4">
                    <a href="#" aria-label="Instagram">
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="hover:text-white transition"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Facebook">
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="hover:text-white transition"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
                <p>Copyright © 2025 Synergym AI. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;