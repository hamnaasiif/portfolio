const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    {/* Left Side - Portfolio Text with Soria Font */}
                    <div className="portfolio-text">
                        <div className="portfolio-lines">
                            <div className="portfolio-line-0">
                                <span className="hamna-name">Hamna Asif</span>
                            </div>
                            <div className="portfolio-line-1">
                                <span className="letter">P</span>
                                <span className="letter">O</span>
                                <span className="letter">R</span>
                                <span className="letter">T</span>
                            </div>
                            <div className="portfolio-line-2">
                                <span className="letter">F</span>
                                <span className="letter">O</span>
                                <span className="letter">L</span>
                                <span className="letter">I</span>
                                <span className="letter">O</span>
                            </div>
                        </div>
                        <a href="#works" className="hero-cta" onClick={e => { e.preventDefault(); const el = document.querySelector('#works'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>See My Work <i className="fas fa-arrow-right"></i></a>
                    </div>

                    {/* Right Side - Avatar */}
                    <div className="avatar-container">
                        <img src="/avatar.png" alt="Hamna Asif" className="hero-avatar" />
                    </div>
                </div>

                {/* Skills Badge */}
                <div className="skills-badge">
                    <div className="skill-item">Python</div>
                    <div className="skill-item">Web Dev</div>
                    <div className="skill-item">UI/UX Design</div>
                </div>

                {/* Decorative Elements */}
                <div className="decorative-elements">
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                    <div className="decorative-line"></div>
                    <div className="geometric-pattern">
                        <div className="pattern-circle"></div>
                        <div className="pattern-triangle"></div>
                        <div className="pattern-square"></div>
                    </div>
                </div>

                {/* Left Side Decorative Elements */}
                <div className="left-decorative">
                    <div className="vertical-line"></div>
                    <div className="side-dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
