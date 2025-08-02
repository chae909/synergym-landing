import React from 'react';

// EmailForm 컴포넌트 (간단한 버전)
const EmailForm = ({ onSubmit }) => {
  const handleSubmit = () => {
    // 실제 구현에서는 input value를 가져와야 합니다
    onSubmit && onSubmit('example@email.com');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        placeholder="이메일 주소를 입력하세요"
        className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
      >
        예약하기
      </button>
    </div>
  );
};

// 건강과 활력을 상징하는 파티클들
const HealthParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full animate-float opacity-40"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        backgroundColor: [
          '#10b981', // emerald-500
          '#06b6d4', // cyan-500
          '#22c55e', // green-500
          '#14b8a6', // teal-500
          '#84cc16', // lime-500
        ][Math.floor(Math.random() * 5)],
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${20 + Math.random() * 15}s`
      }}
    />
  ));

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles}</div>;
};

// 딥블루 톤의 유기적 형태들
const DeepBlueShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 큰 유기적 형태 1 - 딥블루 계열 */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-float-slow -top-48 -left-48" />
      
      {/* 큰 유기적 형태 2 - 네이비/청색 계열 */}
      <div className="absolute w-80 h-80 bg-gradient-to-r from-slate-600/15 to-blue-700/15 rounded-full blur-3xl animate-float-reverse -bottom-40 -right-40" />
      
      {/* 중간 크기 형태들 - 차분한 블루 톤 */}
      <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/12 to-cyan-600/12 rounded-full blur-2xl animate-pulse-slow top-1/4 right-1/4" />
      <div className="absolute w-48 h-48 bg-gradient-to-r from-indigo-500/12 to-blue-600/12 rounded-full blur-2xl animate-float-gentle bottom-1/3 left-1/3" />
      
      {/* 작은 형태들 - 액센트 블루 */}
      <div className="absolute w-32 h-32 bg-gradient-to-r from-cyan-500/15 to-sky-600/15 rounded-full blur-xl animate-float-fast top-2/3 right-1/2" />
      <div className="absolute w-24 h-24 bg-gradient-to-r from-blue-400/15 to-indigo-500/15 rounded-full blur-xl animate-float-reverse-fast top-1/2 left-1/4" />
    </div>
  );
};

// SkeletalNetwork 컴포넌트 추가
const SkeletalNetwork = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        
        {/* 네트워크 노드들 */}
        <circle cx="200" cy="150" r="4" fill="url(#nodeGradient)" className="animate-pulse" />
        <circle cx="400" cy="200" r="3" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1s'}} />
        <circle cx="600" cy="100" r="5" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '2s'}} />
        <circle cx="800" cy="250" r="3" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        
        {/* 연결선들 */}
        <line x1="200" y1="150" x2="400" y2="200" stroke="#3b82f6" strokeWidth="1" opacity="0.3" className="animate-pulse" />
        <line x1="400" y1="200" x2="600" y2="100" stroke="#1d4ed8" strokeWidth="1" opacity="0.3" className="animate-pulse" />
        <line x1="600" y1="100" x2="800" y2="250" stroke="#06b6d4" strokeWidth="1" opacity="0.3" className="animate-pulse" />
      </svg>
    </div>
  );
};

// 메인 HeroSection 컴포넌트
const HeroSection = ({ onFormSubmit }) => {
  return (
    <>
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(-100%) scaleY(1); opacity: 0; }
          25% { transform: translateX(-50%) scaleY(1.2); opacity: 0.3; }
          50% { transform: translateX(0%) scaleY(1); opacity: 0.6; }
          75% { transform: translateX(50%) scaleY(0.8); opacity: 0.4; }
          100% { transform: translateX(100%) scaleY(1); opacity: 0; }
        }
        
        .animate-wave { animation: wave 8s ease-in-out infinite; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(5px); opacity: 0.6; }
          50% { transform: translateY(-10px) translateX(-5px); opacity: 0.8; }
          75% { transform: translateY(-15px) translateX(3px); opacity: 0.5; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(20px) rotate(90deg); }
          50% { transform: translateY(-60px) translateX(0px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(-20px) rotate(270deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(30px) translateX(-20px) rotate(-90deg); }
          50% { transform: translateY(60px) translateX(0px) rotate(-180deg); }
          75% { transform: translateY(30px) translateX(20px) rotate(-270deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(10px); }
        }
        
        @keyframes float-reverse-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(40px) translateX(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 30s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 25s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 15s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 12s ease-in-out infinite; }
        .animate-float-reverse-fast { animation: float-reverse-fast 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        
        .bg-gradient-main {
          background: linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569);
          background-size: 400% 400%;
          animation: gradient-shift 20s ease infinite;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #3b82f6, #1d4ed8, #06b6d4, #2563eb);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
      
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-main p-6 pt-20 relative overflow-hidden">
        {/* 움직이는 배경 요소들 */}
        <DeepBlueShapes />
        <SkeletalNetwork />
        
        {/* 메인 콘텐츠 */}
        <div className="relative w-full max-w-4xl mx-auto text-center z-10">
          <div className="relative bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              우리는 모두 <span className="gradient-text">의자에 앉아</span><br />
              세상을 움직입니다.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
              하지만 그 시간 동안, 우리의 몸은 서서히 중심을 잃어갑니다.<br />
              <strong className="text-blue-400">Synergym AI</strong>는 피할 수 없는 현대인의 삶 속에서,<br className="hidden md:block" /> 
              당신이 스스로 몸의 균형을 되찾도록 돕는 첫 번째 솔루션이 될 것입니다.
            </p>
            <EmailForm onSubmit={onFormSubmit} />
            <p className="mt-4 text-sm text-blue-400 animate-pulse">
              사전 예약자에게만 드리는 특별한 런칭 혜택을 놓치지 마세요!
            </p>
          </div>
        </div>
        
        {/* 추가 장식 요소 */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;