import React, { useRef, useEffect } from 'react';
// 기존 이미지들을 import
import uploadImg from '../../assets/upload.png';
import analysisImg from '../../assets/analysis.png';
import airecomImg from '../../assets/airecom.png';
import airecom2Img from '../../assets/airecom2.png';
import shareImg from '../../assets/share.png';
import youtubeImg from '../../assets/youtube.png';
import recordImg from '../../assets/record.png';
import emotionImg from '../../assets/emotion.png';
import chartImg from '../../assets/chart.png';
import commuImg from '../../assets/commu.png';
import mobileVideo from '../../assets/mobile.mp4';

const PreviewSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(console.error);
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.3 } // 30% 보일 때 재생 시작
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);
    const steps = [
        { 
            title: '촬영 및 분석', 
            description: '정면, 측면 사진 두 장이면 충분합니다. AI가 당신의 신체 주요 포인트를 인식하여 불균형 데이터를 추출하게 됩니다.',
            image: uploadImg
        },
        { 
            title: '진단 및 매칭', 
            description: '추출된 데이터를 기반으로, 어떤 부위가 어떻게 틀어졌는지 진단하고 시각화한 차트를 제공합니다. 그에 맞는 검증된 네이버 건강백과 운동을 자동으로 찾아냅니다.',
            image: analysisImg
        },
        { 
            title: '진단 내용 공유', 
            description: '나의 자세 진단 결과를 친구들과 공유할 수 있습니다. SNS에 공유하거나, 커뮤니티에 올려 서로의 변화를 응원할 수 있습니다.',
            image: shareImg
        },
        { 
            title: '매칭된 운동 동영상 제공', 
            description: '당신의 불균형에 딱 맞는 운동 동영상을 제공합니다. 유튜브에서 가장 인기 있는 운동 영상을 선별하여 내용과 댓글 반응을 AI가 요약합니다.',
            image: youtubeImg
        },
        { 
            title: '나만의 루틴과 목표 설계', 
            description: '당신의 불균형 정도와 숙련도에 따라 AI가 운동의 강도, 횟수, 달성률을 세밀하게 조정한 당신만의 루틴이 설계됩니다.',
            image: airecom2Img
        },
        { 
            title: '맞춤 루틴 실행', 
            description: '내가 설정한 맞춤 루틴을 따라 매일 운동을 진행합니다. 달력에 쌓이는 운동 기록을 통해 당신의 성취를 시각적으로 확인할 수 있습니다.',
            image: recordImg
        },
        { 
            title: '오늘의 감정 기록', 
            description: '매일 운동 후, 오늘의 감정을 기록합니다. AI는 이 데이터를 분석하여 당신의 운동 습관과 감정 변화를 이해하고, 더 나은 루틴을 제안합니다.',
            image: emotionImg
        },
        { 
            title: '데일리 AI 운동 추천', 
            description: '당신의 운동 기록과 감정 데이터를 기반으로, AI가 매일 최적의 운동을 추천합니다. 당신의 몸과 마음이 필요로 하는 운동을 정확히 찾아냅니다.',
            image: airecomImg
        },
        { 
            title: '나의 변화 여정 확인', 
            description: '자세 분석과 운동 기록을 통해, 당신의 몸이 어떻게 변화하고 있는지 시각적으로 확인할 수 있습니다. 매일매일의 작은 변화가 모여 큰 변화를 만들어냅니다.',
            image: chartImg
        },
        { 
            title: '커뮤니티 참여', 
            description: '당신의 변화 여정을 다른 사용자들과 공유하고, 서로의 경험을 나누며 동기부여를 받을 수 있는 커뮤니티에 참여할 수 있습니다.',
            image: commuImg
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
                            className="relative bg-slate-800 rounded-2xl border border-slate-700 transition hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden min-h-[400px]"
                            style={{
                                backgroundImage: `url(${step.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* 배경 오버레이 - 더 약하게 */}
                            <div className="absolute inset-0 bg-slate-900/30"></div>
                            
                            {/* 콘텐츠 영역 */}
                            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                                {/* 텍스트 영역에 약한 blur 배경 */}
                                <div className="bg-slate-800/60 backdrop-blur-[1px] rounded-xl p-6">
                                    <div className="text-blue-400 font-black text-6xl mb-4">
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-200">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* 모바일 비디오 섹션 */}
                <div className="mt-16 flex justify-center">
                    <div className="relative max-w-sm w-full">
                        <video
                            ref={videoRef}
                            className="w-full h-auto rounded-2xl shadow-2xl shadow-blue-500/20"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        >
                            <source src={mobileVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        {/* 비디오 설명 텍스트 */}
                        <div className="mt-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-2">
                                모바일에서 간편하게
                            </h3>
                            <p className="text-gray-300">
                                언제 어디서나 쉽게 사용할 수 있는 모바일 앱
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreviewSection;