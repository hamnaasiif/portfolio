import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        num: '01',
        name: 'Art Gallery Web App',
        command: '> 01_art-gallery',
        tag: '[active]',
        year: '2024',
        color: '#C0392B',
        description: '// a full-stack space where art meets the internet.\n\nA platform for art showcase, exhibitions, and e-commerce\n— with user auth, image uploads, and real transactions.',
        stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Multer', 'Cloudinary', 'Nodemailer'],
        demo: `${import.meta.env.BASE_URL}demos/01_art-gallery.mp4`,
        repo: 'https://github.com/hamnaasiif/Arte-Gallery-Demo',
    },
    {
        id: 2,
        num: '02',
        name: 'RPS Gesture Game',
        command: '> 02_rps-gesture-game',
        tag: '',
        year: '2024',
        color: '#6B7C3A',
        description: '// rock paper scissors, but your hands are the controller.\n\nReal-time hand gesture recognition using computer vision.\nShow your hand. The AI reads it. 60fps, no lag.',
        stack: ['React', 'MediaPipe', 'TensorFlow.js', 'WebGL', 'Tailwind'],
        repo: 'https://github.com/hamnaasiif/rps-gesture-game',
        liveUrl: 'https://hamnaasiif.github.io/rps-gesture-game',
    },
    {
        id: 3,
        num: '03',
        name: 'Signity (FYP)',
        command: '> 03_signity',
        tag: '[FYP ★]',
        year: '2024',
        color: '#B8941F',
        description: '// because language barriers shouldn\'t include sign language.\n\nAI platform that translates Urdu/English video into \nPakistani Sign Language glosses — speech to gloss, end to end.',
        stack: ['Node.js', 'MongoDB', 'OpenAI Whisper', 'NLP Engine', 'JWT', 'FFmpeg', 'React'],
        demo: `${import.meta.env.BASE_URL}demos/03_signity.mp4`,
        repo: null,
    }
];

const Works = () => {
    const [activeId, setActiveId] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [demoSrc, setDemoSrc] = useState(null);
    const active = projects.find(p => p.id === activeId);

    const openDemo = (src) => {
        setDemoSrc(src);
        setShowModal(true);
    };

    const closeDemo = () => {
        setShowModal(false);
        setTimeout(() => setDemoSrc(null), 300); // clear after animation
    };

    return (
        <section className="works-section" id="works">
            <div className="works-inner">

                {/* Section Header */}
                <div className="works-header">
                    <h2 className="works-title">selected works</h2>
                </div>

                {/* Folder UI */}
                <div className="folder-ui">

                    {/* All 4 tabs always visible at top */}
                    <div className="folder-tabs-bar">
                        {projects.map((p) => {
                            const isActive = p.id === activeId;
                            return (
                                <button
                                    key={p.id}
                                    className={`ftab${isActive ? ' ftab--active' : ''}`}
                                    style={{ '--tc': p.color }}
                                    onClick={() => setActiveId(p.id)}
                                    aria-label={`View ${p.name}`}
                                >
                                    <span className="ftab__num">{p.num}</span>
                                    <span className="ftab__name">{p.name}</span>
                                    <span className="ftab__year">{p.year}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Single folder body — content swaps on tab change */}
                    <div
                        className="folder-panel"
                        style={{ borderTopColor: active.color }}
                    >
                        {/* Tinted top strip matching active tab color */}
                        <div
                            className="folder-panel__stripe"
                            style={{ background: active.color }}
                        />
                        <div className="folder-panel__content">
                            <h3 className="fp-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Courier New', Courier, monospace", fontSize: '1.2rem' }}>
                                <span>{active.command}</span>
                                {active.tag && <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>{active.tag}</span>}
                            </h3>
                            <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-obsidian)', opacity: 0.2, margin: '1rem 0' }} />
                            <p className="fp-desc" style={{ whiteSpace: 'pre-wrap' }}>{active.description}</p>

                            <div className="fp-stack">
                                <span className="fp-stack__label">stack:</span>
                                {active.stack.map((s, i) => (
                                    <React.Fragment key={i}>
                                        <span className="fp-stack__item">{s}</span>
                                        {i < active.stack.length - 1 && (
                                            <span className="fp-stack__sep"> · </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="fp-links">
                                {active.demo && (
                                    <button onClick={() => openDemo(active.demo)} className="fp-link" style={{ background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                                        <span className="fp-link__prompt">&gt;</span>
                                        <span className="fp-link__text">play_demo</span>
                                        <span className="fp-link__tag">[mp4]</span>
                                    </button>
                                )}
                                {active.liveUrl && (
                                    <a href={active.liveUrl} target="_blank" rel="noopener noreferrer" className="fp-link">
                                        <span className="fp-link__prompt">&gt;</span>
                                        <span className="fp-link__text">watch_live</span>
                                        <span className="fp-link__tag">[open ↗]</span>
                                    </a>
                                )}
                                {active.repo && (
                                    <a href={active.repo} target="_blank" rel="noopener noreferrer" className="fp-link">
                                        <span className="fp-link__prompt">&gt;</span>
                                        <span className="fp-link__text">github_repo</span>
                                        <span className="fp-link__tag">[open ↗]</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinematic Video Modal */}
            {showModal && (
                <div className="demo-modal" onClick={closeDemo}>
                    <div className="demo-modal__content" onClick={e => e.stopPropagation()}>
                        <div className="demo-modal__header">
                            <span className="demo-modal__title">playing_demo.exe</span>
                            <button className="demo-modal__close" onClick={closeDemo} aria-label="Close demo">[x]</button>
                        </div>
                        <div className="demo-modal__body">
                            <video src={demoSrc} controls autoPlay className="demo-modal__video">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Works;
