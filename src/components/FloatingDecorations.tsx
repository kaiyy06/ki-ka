import { useMemo } from 'react';

const SYMBOLS = ['✦', '✧', '*', '﹡', '✻'];
const COUNT = 35;

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
        return Array.from({ length: COUNT }, () => ({
            char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            left: Math.random() * 100,
            size: Math.random() * 14 + 8,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 10,
            opacity: Math.random() * 0.4 + 0.1,
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
