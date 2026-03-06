import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuActive(prev => !prev);
    const closeMenu = () => setMenuActive(false);

    const handleNav = (e, href) => {
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(href);
        if (!target) return;
        const navbarHeight = 72; // px — adjust if navbar height changes
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className={`nav-menu ${menuActive ? 'active' : ''}`} id="nav-menu">
                    {NAV_LINKS.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="nav-link"
                            onClick={e => handleNav(e, href)}
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <div
                    className={`hamburger ${menuActive ? 'active' : ''}`}
                    id="hamburger"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

