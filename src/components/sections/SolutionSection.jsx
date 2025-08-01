import React from 'react';
import nonmunImage from '../../assets/nonmun.webp';

const SolutionSection = () => (
    <section id="solution" className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                그래서, <span className="gradient-text">Synergym AI</span>가 시작됩니다.
            </h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
                우리는 '원래 다 그래'라는 말로 통증과 불균형을 외면하는 시대를 끝내려 합니다.
                <br />
                Synergym AI는 국민대학교 스포츠산업대학원의 석사학위 논문으로 검증된 자세분석 알고리즘을 기반으로, 
                <br />
                당신의 몸을 정확히 진단하고 과학적인 SNPE 바른자세척추운동을 처방합니다.
            </p>
            <div className="relative max-w-2xl mx-auto bg-slate-900 p-4 rounded-2xl border border-slate-700">
                <img 
                    src={nonmunImage} 
                    alt="검증된 알고리즘을 시각적으로 표현한 이미지" 
                    className="rounded-xl opacity-70" 
                    style={{ filter: 'blur(1.5px)' }}
                />
                <p className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    검증된 알고리즘 기반
                </p>
            </div>
        </div>
    </section>
);

export default SolutionSection;