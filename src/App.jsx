import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import PreviewSection from './components/sections/PreviewSection';
import PreorderSection from './components/sections/PreorderSection';
import VisionSection from './components/sections/VisionSection';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import './App.css';

export default function App() {
    const [showToast, setShowToast] = useState(false);

    const handleFormSubmit = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <div className="bg-slate-950 text-gray-300">
            <Navbar />
            <Toast 
                message="✅ 신청이 완료되었습니다! 가장 먼저 소식을 전해드릴게요." 
                show={showToast} 
            />
            
            <main>
                <HeroSection onFormSubmit={handleFormSubmit} />
                <FadeInSection><ProblemSection /></FadeInSection>
                <FadeInSection><SolutionSection /></FadeInSection>
                <FadeInSection><PreviewSection /></FadeInSection>
                <FadeInSection><PreorderSection onFormSubmit={handleFormSubmit} /></FadeInSection>
                <FadeInSection><VisionSection /></FadeInSection>
            </main>

            <Footer />
        </div>
    );
}