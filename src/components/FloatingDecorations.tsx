import { useMemo } from 'react';

const SYMBOLS = ['✦', '✧', '♡', '﹡', '✻'];

function getCount() {
    if (typeof window === 'undefined') return 20;
    return window.innerWidth < 768 ? 15 : 30;
}

interface SymbolData {
    char: string;
    left: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

export default function FloatingDecorations() {
    const symbols: SymbolData[] = useMemo(() => {
        const count = getCount();
        return Array.from({ length: count }, () => ({
            char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            left: Math.random() * 100,
            size: Math.random() * 12 + 8,
            duration: Math.random() * 12 + 12,
            delay: Math.random() * 12,
            opacity: Math.random() * 0.3 + 0.08,
        }));
    }, []);

    return (
        <div className="decoration-container">
            {symbols.map((s, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        bottom: '-40px',
                        left: `${s.left}%`,
                        fontSize: `${s.size}px`,
                        color: `rgba(212,175,55,${s.opacity})`,
                        animation: `floatSym ${s.duration}s linear ${s.delay}s infinite`,
                        pointerEvents: 'none',
                    }}
                >
                    {s.char}
                </div>
            ))}
        </div>
    );
}
