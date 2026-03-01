import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import './Header.css';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Journey', href: '#journey' },
    { label: 'Letter', href: '#letter' },
    { label: 'Reasons', href: '#reasons' },
    { label: 'Quiz', href: '#quiz' },
    { label: 'Stories', href: '#anthology' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
            <div className="container header-inner">
                <a href="#hero" className="header-brand" onClick={handleLinkClick}>
                    <Heart size={16} fill="var(--color-burgundy)" stroke="none" />
                    <span>Our Story</span>
                </a>

                <button
                    className="header-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                <nav className={`header-nav${menuOpen ? ' header-nav--open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="header-nav-link"
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile overlay backdrop */}
            {menuOpen && (
                <div className="header-backdrop" onClick={() => setMenuOpen(false)} />
            )}
        </header>
    );
}
