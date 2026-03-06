import React, { useEffect, useRef, useState } from 'react';

const lines = [
    { text: 'C:\\HAMNA> session_end.exe', delay: 0, className: 'se-line--prompt' },
    { text: null, delay: 900, className: 'se-line--pause' }, // pause gap
    { text: '// you\'ve reached the end.', delay: 1400, className: 'se-line--comment' },
    { text: '// thanks for scrolling this far, it means something.', delay: 2400, className: 'se-line--comment se-line--comment-soft' },
    { text: null, delay: 3600, className: 'se-line--pause' }, // longer pause gap
    { text: '> hamna_asif · 2026', delay: 4400, className: 'se-line--credit', cursor: true },
];

const GLITCH_CHARS = '!<>-_\\/[]{}=+*^?#_@$%';

function useTypewriter(text, startDelay, isVisible) {
    const [displayed, setDisplayed] = useState('');
    const [glitching, setGlitching] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!isVisible || !text) return;

        let glitchTimer;
        let typeTimer;

        // glitch phase: scramble for ~300ms before typing
        glitchTimer = setTimeout(() => {
            setGlitching(true);
            let glitchCount = 0;
            const glitchInterval = setInterval(() => {
                const scrambled = text
                    .split('')
                    .map((ch) =>
                        ch === ' ' ? ' ' : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
                    )
                    .join('');
                setDisplayed(scrambled);
                glitchCount++;
                if (glitchCount > 6) {
                    clearInterval(glitchInterval);
                    setGlitching(false);
                    // now actually type
                    let i = 0;
                    typeTimer = setInterval(() => {
                        i++;
                        setDisplayed(text.slice(0, i));
                        if (i >= text.length) {
                            clearInterval(typeTimer);
                            setDone(true);
                        }
                    }, 38);
                }
            }, 45);
        }, startDelay);

        return () => {
            clearTimeout(glitchTimer);
            clearTimeout(typeTimer);
        };
    }, [isVisible, text, startDelay]);

    return { displayed, glitching, done };
}

// Individual animated line
function AnimatedLine({ text, delay, className, cursor, isVisible }) {
    const { displayed, glitching, done } = useTypewriter(text, delay, isVisible);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!isVisible) return;
        const t = setTimeout(() => setShow(true), delay - 100 < 0 ? 0 : delay - 100);
        return () => clearTimeout(t);
    }, [isVisible, delay]);

    if (!text) return null; // pause lines are empty spacers handled in parent

    return (
        <div className={`se-line ${className || ''} ${show ? 'se-line--visible' : ''}`}>
            <span className={`se-line-text ${glitching ? 'se-glitch' : ''}`}>
                {displayed}
            </span>
            {cursor && done && (
                <span className="se-cursor" aria-hidden="true">_</span>
            )}
        </div>
    );
}

// Pause spacer
function PauseLine({ delay, isVisible }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (!isVisible) return;
        const t = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(t);
    }, [isVisible, delay]);
    return <div className={`se-pause-gap ${show ? 'se-pause-gap--visible' : ''}`} />;
}

const SessionEnd = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`session-end-section${isVisible ? ' is-visible' : ''}`}
            id="session-end"
            ref={sectionRef}
            aria-label="Session End"
        >
            {/* Vignette overlay */}
            <div className="se-vignette" aria-hidden="true" />

            {/* Scanline overlay */}
            <div className="se-scanlines" aria-hidden="true" />

            {/* Terminal lines */}
            <div className="se-terminal">
                {lines.map((line, i) =>
                    line.text === null ? (
                        <PauseLine key={i} delay={line.delay} isVisible={isVisible} />
                    ) : (
                        <AnimatedLine
                            key={i}
                            text={line.text}
                            delay={line.delay}
                            className={line.className}
                            cursor={line.cursor}
                            isVisible={isVisible}
                        />
                    )
                )}
            </div>
        </section>
    );
};

export default SessionEnd;
