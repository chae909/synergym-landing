import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }
        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-opacity duration-700 ease-out transform transition-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;