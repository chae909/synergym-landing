import React from 'react';

const ProblemSection = () => {
    const problems = [
        { 
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M12 3a9 9 0 0 1 9 9a9 9 0 0 1-9 9a9 9 0 0 1-9-9a9 9 0 0 1 9-9m0 2.25a6.75 6.75 0 0 0-6.75 6.75a6.75 6.75 0 0 0 6.75 6.75a6.75 6.75 0 0 0 6.75-6.75a6.75 6.75 0 0 0-6.75-6.75m-2.25 4.5h4.5m-4.5 3h4.5m-4.5 3h1.5"/>
                </svg>
            ), 
            title: '어깨 높이 불균형', 
            description: '거울 속 미세하게 다른 어깨 높이를 발견한 적 있나요?' 
        },
        { 
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm-1.5 6l3 3-3 3m3-6l-3 3 3 3"/>
                </svg>
            ), 
            title: '운동 시 불편함', 
            description: '운동할 때 유독 한쪽 관절이나 근육만 불편한 느낌이 드나요?' 
        },
        { 
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M12 6.343l2.828 2.829-2.828 2.828-2.829-2.828L12 6.343zm0 5.657l2.828 2.828-2.828 2.829-2.829-2.829 2.829-2.828zM6.343 12l2.829-2.828 2.828 2.828-2.828 2.829L6.343 12zm5.657 0l2.828-2.828 2.828 2.828-2.828 2.829-2.828-2.828z"/>
                </svg>
            ), 
            title: '만성 피로', 
            description: '이유를 알 수 없는 피로와 집중력 저하를 겪고 있나요?' 
        },
    ];

    return (
        <section id="problem" className="py-20 md:py-32 bg-slate-900 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    어쩌면, 당신의 노력은<br />몸을 향하고 있지 않았습니다.
                </h2>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
                    밤새워 공부한 뒤 찾아오는 목의 뻐근함, 중요한 프로젝트를 끝낸 후의 허리 통증. 
                    <br />
                    우리는 때로 이런 불편함을 성실함의 <strong className="text-blue-400">'훈장'</strong>처럼 여겨왔습니다.
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                    우리를 끊임없이 앉아있게 만드는 사회. 잠시 스트레칭으로 몸을 펴도, 다시 모니터 앞으로 돌아가야 하는 현실. <br />
                    사회의 시스템을 당장 바꿀 수는 없지만, 그 안에서 우리 몸을 지키기 위한 노력은 시작할 수 있습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((p, i) => (
                        <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                            <div className="flex items-center justify-center w-16 h-16 mb-6 bg-slate-700 rounded-full mx-auto">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                            <p className="text-gray-400">{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;