import React from 'react';

const PreviewSection = () => {
    const steps = [
        { 
            title: '촬영 및 분석', 
            description: '정면, 측면 사진 두 장이면 충분합니다. AI가 당신의 신체 주요 포인트를 인식하여 불균형 데이터를 추출하게 됩니다.' 
        },
        { 
            title: '진단 및 매칭', 
            description: '추출된 데이터를 기반으로, 어떤 부위가 어떻게 틀어졌는지 진단하고 그에 맞는 SNPE 운동 그룹을 자동으로 찾아냅니다.' 
        },
        { 
            title: '강도 및 순서 설계', 
            description: '당신의 불균형 정도와 숙련도에 따라 운동의 강도, 횟수, 순서가 세밀하게 조정된 당신만의 루틴이 설계됩니다.' 
        },
        { 
            title: '맞춤 루틴 실행', 
            description: '매일 새롭게 주어지는 맞춤 루틴을 따라하며, 변화하는 당신의 몸을 직접 확인하게 될 것입니다.' 
        },
    ];

    return (
        <section id="preview" className="py-20 md:py-32 bg-slate-900 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
                    출시 후, 당신이 경험하게 될 <br className="sm:hidden" />놀라운 과정
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step, i) => (
                        <div 
                            key={i} 
                            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 transition hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="text-blue-400 font-black text-6xl mb-4">
                                0{i + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PreviewSection;