import React from 'react';
import EmailForm from '../EmailForm';

const PreorderSection = ({ onFormSubmit }) => {
    const benefits = [
        { 
            icon: '🚀', 
            title: '가장 빠른 출시 알림:', 
            text: '누구보다 먼저 Synergym AI를 만나보세요.' 
        },
        { 
            icon: '💰', 
            title: '사전 예약자 전용 할인:', 
            text: '출시 후 유료 플랜 이용 시 특별 할인을 제공합니다.' 
        },
        { 
            icon: '⭐', 
            title: '초기 사용자 그룹 초대:', 
            text: '서비스 개선에 직접 참여할 수 있는 커뮤니티에 참여할 기회를 드립니다.' 
        },
    ];

    return (
        <section id="preorder" className="py-20 md:py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    가장 먼저, <span className="gradient-text">가장 큰 혜택</span>으로 시작하세요.
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Synergym AI의 첫 번째 사용자가 되어주세요. 당신의 건강한 변화를 응원하며, 
                    사전 예약자분들께만 특별한 혜택을 약속합니다.
                </p>
                <div className="max-w-md mx-auto text-left space-y-4 mb-12">
                    {benefits.map((b, i) => (
                        <div key={i} className="flex items-start space-x-3">
                            <span className="text-blue-500 mt-1">{b.icon}</span>
                            <p>
                                <strong className="text-white">{b.title}</strong> {b.text}
                            </p>
                        </div>
                    ))}
                </div>
                <EmailForm onSubmit={onFormSubmit} />
            </div>
        </section>
    );
};

export default PreorderSection;