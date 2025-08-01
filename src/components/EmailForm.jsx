import React from 'react';

const EmailForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        e.target.reset();
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
        >
            <input 
                type="email" 
                required 
                placeholder="이메일 주소를 입력해주세요" 
                className="w-full flex-grow px-5 py-4 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition" 
            />
            <button 
                type="submit" 
                className="cta-button bg-blue-600 text-white font-bold px-6 py-4 rounded-lg whitespace-nowrap"
            >
                출시 알림 신청하기
            </button>
        </form>
    );
};

export default EmailForm;