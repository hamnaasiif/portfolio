import React, { useEffect, useRef, useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const DeskSVG = () => (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="retro-desk-svg">
            <g id="study">
                <rect width="64" height="64" fill="transparent" />
                <g id="smoke">
                    <path id="smoke-2" d="M9 10C9 10 10 9.22082 10 8C10 6.77918 9 6 9 6" stroke="var(--color-obsidian)" />
                    <path id="smoke-1" d="M12 11C12 11 13 10.2208 13 9C13 7.77918 12 7 12 7" stroke="var(--color-obsidian)" />
                </g>
                <g id="laptop">
                    <rect id="laptop-base" x="17" y="28" width="20" height="3" fill="var(--color-lavender)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="laptop-screen" x="18" y="17" width="18" height="11" fill="var(--color-obsidian)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="line-1" x="20" y="19" width="14" height="1" fill="var(--color-cherry)" />
                    <rect id="line-2" x="20" y="21" width="14" height="1" fill="var(--color-cherry)" />
                    <rect id="line-3" x="20" y="23" width="14" height="1" fill="var(--color-cherry)" />
                    <rect id="line-4" x="20" y="25" width="14" height="1" fill="var(--color-cherry)" />
                </g>
                <g id="cup">
                    <rect id="Rectangle 978" x="5" y="24" width="5" height="7" fill="var(--color-cherry)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <path id="Ellipse 416" d="M11 28C12.1046 28 13 27.1046 13 26C13 24.8954 12.1046 24 11 24" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="Rectangle 996" x="6" y="25" width="3" height="1" fill="var(--color-lavender)" />
                </g>
                <g id="books">
                    <rect id="Rectangle 984" x="58" y="27" width="4" height="14" transform="rotate(90 58 27)" fill="var(--color-cherry)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="Rectangle 985" x="56" y="23" width="4" height="14" transform="rotate(90 56 23)" fill="var(--color-lavender)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="Rectangle 986" x="60" y="19" width="4" height="14" transform="rotate(90 60 19)" fill="var(--color-cherry)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="Rectangle 993" x="47" y="20" width="12" height="1" fill="var(--color-obsidian)" />
                    <rect id="Rectangle 994" x="43" y="24" width="12" height="1" fill="var(--color-obsidian)" />
                    <rect id="Rectangle 995" x="45" y="28" width="12" height="1" fill="var(--color-obsidian)" />
                </g>
                <g id="desk">
                    <rect id="Rectangle 973" x="4" y="31" width="56" height="5" fill="var(--color-lavender)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="Rectangle 987" x="10" y="36" width="30" height="6" fill="var(--color-lavender)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="Rectangle 975" x="6" y="36" width="4" height="24" fill="var(--color-lavender)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="Rectangle 974" x="40" y="36" width="18" height="24" fill="var(--color-lavender)" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <line id="Line 129" x1="40" y1="48" x2="58" y2="48" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <line id="Line 130" x1="22" y1="39" x2="28" y2="39" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <line id="Line 142" x1="46" y1="42" x2="52" y2="42" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <line id="Line 131" x1="46" y1="54" x2="52" y2="54" stroke="var(--color-obsidian)" strokeWidth="2" />
                    <rect id="Rectangle 988" x="11" y="37" width="28" height="1" fill="var(--color-obsidian)" />
                    <rect id="Rectangle 992" x="5" y="32" width="54" height="1" fill="var(--color-obsidian)" />
                    <rect id="Rectangle 989" x="7" y="37" width="2" height="1" fill="var(--color-obsidian)" />
                    <rect id="Rectangle 990" x="41" y="37" width="16" height="1" fill="var(--color-obsidian)" />
                    <rect id="Rectangle 991" x="41" y="49" width="16" height="1" fill="var(--color-obsidian)" />
                    <line id="Line 143" y1="60" x2="64" y2="60" stroke="var(--color-obsidian)" strokeWidth="2" />
                </g>
            </g>
        </svg>
    );

    const windowPath = activeTab === 'home'
        ? 'C:\\HAMNA\\portfolio'
        : activeTab === 'profile'
            ? 'C:\\HAMNA\\portfolio\\profile.txt'
            : activeTab === 'contact'
                ? 'C:\\HAMNA\\contact'
                : 'C:\\HAMNA\\resume.pdf';

    return (
        <section
            className={`about-desktop-section ${isVisible ? 'is-visible' : ''}`}
            id="about"
            ref={sectionRef}
        >
            <div className="desktop-container">

                {/* Left Icons */}
                <div className="desktop-side-nav left-nav">
                    <div
                        className="desktop-icon-wrapper"
                        onClick={() => setActiveTab('profile')}
                    >
                        <div className="desktop-icon">
                            <span className="icon-letter">h</span>
                        </div>
                        <span className="icon-label">profile</span>
                    </div>
                </div>

                {/* Center Window */}
                <div className="profile-window">
                    <div className="window-header">
                        <span className="window-path">{windowPath}</span>
                        <div
                            className="window-close"
                            onClick={() => setActiveTab('home')}
                        >
                            ✕
                        </div>
                    </div>
                    <div className="window-content">
                        {activeTab === 'home' && (
                            <>
                                <div className="avatar-container-retro">
                                    <div className="avatar-circle">
                                        <img src={`${import.meta.env.BASE_URL}ava.png`} alt="Hamna Asif" className="retro-avatar" />
                                    </div>
                                </div>
                                <div className="profile-text">
                                    <p className="greeting">hi! i'm</p>
                                    <h2 className="name">Hamna Asif</h2>
                                    <p className="title">Computer Science Student &amp; Developer</p>
                                    <p className="tagline">"I write code. I think in design."</p>
                                </div>
                            </>
                        )}

                        {activeTab === 'profile' && (
                            <div className="extended-profile">
                                <div className="svg-animation-container">
                                    <DeskSVG />
                                </div>
                                <div className="extended-text">
                                    <p>I move between code and design like they're the same language because to me, they kind of are. I work in the MERN stack.</p>
                                    <p>I like building things that are clean under the hood and make sense on the surface. There's a lot of "why does this feel off" until it doesn't and I'm okay with that.</p>
                                    <p>I paint in my free time, which probably explains why I can't leave a misaligned div alone.</p>
                                    <p>What drives me is the gap between "it works" and "it's good." I want the things I make to actually matter to the person using them. Not just functional. Intentional.</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="window-contact-tab">
                                <div className="wct-line wct-comment">
                                    <span className="wct-prompt">&gt;</span>
                                    <span className="wct-text">you found the contact page.</span>
                                </div>
                                <div className="wct-line wct-muted">
                                    <span className="wct-prefix">{'// '}</span>
                                    <span className="wct-text">that's already a good sign.</span>
                                </div>
                                <div className="wct-spacer" />
                                <div className="wct-line">
                                    <span className="wct-prompt">&gt;</span>
                                    <a href="mailto:hamnaasif2601@gmail.com" className="wct-link">hamnaasif2601@gmail.com</a>
                                    <span className="wct-tag">[open_mail]</span>
                                </div>
                                <div className="wct-line">
                                    <span className="wct-prompt">&gt;</span>
                                    <a href="https://github.com/hamnaasiif" target="_blank" rel="noopener noreferrer" className="wct-link">github.com/hamnaasiif</a>
                                    <span className="wct-tag">[open_github]</span>
                                </div>
                                <div className="wct-line">
                                    <span className="wct-prompt">&gt;</span>
                                    <a href="tel:+923040168058" className="wct-link">+92 304 0168058</a>
                                </div>
                                <div className="wct-line wct-cursor-line">
                                    <span className="wct-prompt">&gt;</span>
                                    <span className="wct-cursor">_</span>
                                </div>
                            </div>
                        )}

                        {activeTab === 'resume' && (
                            <div className="window-contact-tab">
                                <div className="wct-line wct-muted">
                                    <span className="wct-prefix">{'// '}</span>
                                    <span className="wct-text">the formal version of everything you just read.</span>
                                </div>
                                <div className="wct-spacer" />
                                <div className="wct-line">
                                    <span className="wct-prompt">&gt;</span>
                                    <a
                                        href={`${import.meta.env.BASE_URL}hamna_asif_resume.pdf`}
                                        download
                                        className="wct-link"
                                    >
                                        hamna_asif_resume.pdf
                                    </a>
                                    <span className="wct-tag resume-download">[download ↓]</span>
                                </div>
                                <div className="wct-line wct-cursor-line">
                                    <span className="wct-prompt">&gt;</span>
                                    <span className="wct-cursor">_</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Icons */}
                <div className="desktop-side-nav right-nav">
                    <div
                        className="desktop-icon-wrapper"
                        onClick={() => setActiveTab('contact')}
                    >
                        <div className="desktop-icon folder-icon">
                            <div className="folder-tab"></div>
                            <div className="folder-body">
                                <div className="folder-cutout"></div>
                            </div>
                        </div>
                        <span className="icon-label">contact</span>
                    </div>
                    <div
                        className="desktop-icon-wrapper"
                        onClick={() => setActiveTab('resume')}
                    >
                        <div className="desktop-icon folder-icon">
                            <div className="folder-tab"></div>
                            <div className="folder-body">
                                <div className="folder-cutout"></div>
                            </div>
                        </div>
                        <span className="icon-label">resume</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
