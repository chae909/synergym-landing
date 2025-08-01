import React from 'react';
import EmailForm from '../EmailForm';

const HeroSection = ({ onFormSubmit }) => (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-main p-6 pt-20">
        <div className="relative w-full max-w-4xl mx-auto text-center">
            <div className="absolute inset-0 -z-10 opacity-10">
                <img 
                    src="https://placehold.co/1200x800/020617/1e293b?text=Synergym+AI" 
                    alt="책상에 앉아 몰두하는 사람의 뒷모습" 
                    className="w-full h-full object-cover rounded-3xl blur-sm" 
                />
            </div>
            <div className="bg-black bg-opacity-20 backdrop-blur-sm p-8 md:p-12 rounded-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                    우리는 모두 <span className="gradient-text">의자에 앉아</span><br />
                    세상을 움직입니다.
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                    하지만 그 시간 동안, 우리의 몸은 서서히 중심을 잃어갑니다.<br />
                    <strong>Synergym AI</strong>는 피할 수 없는 현대인의 삶 속에서,<br className="hidden md:block" /> 
                    당신이 스스로 몸의 균형을 되찾도록 돕는 첫 번째 솔루션이 될 것입니다.
                </p>
                <EmailForm onSubmit={onFormSubmit} />
                <p className="mt-4 text-sm text-blue-400">
                    사전 예약자에게만 드리는 특별한 런칭 혜택을 놓치지 마세요!
                </p>
            </div>
        </div>
    </section>
);

export default HeroSection;