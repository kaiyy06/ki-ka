import { useRef, useEffect, useCallback } from 'react';

const IMAGE_IDS = [
    '1518609878373-06d740f60d8b',
    '1529333166437-7750a6dd5a70',
    '1522673607200-164d1b6ce486',
    '1516589091380-5d8e87df6999',
    '1474552226712-ac0f0961a954',
    '1519671282429-b44660ead0a2',
    '1508214751196-bcfd4ca60f91',
    '1521119989659-a83eee488004',
    '1502823403499-6ccfcf4fb453',
    '1541701494587-cb58502866ab',
    '1520854221256-17451cc331bf',
    '1513279922550-250d2fd73db0',
    '1469371670807-013ccf25f16a',
    '1516101922849-6e2f6d632dff',
    '1536640712-4d4c36ff0e4e',
];

const AUTO_SCROLL_SPEED = 0.3;

function getCardWidth() {
    if (typeof window === 'undefined') return 240;
    if (window.innerWidth < 480) return 200;
    if (window.innerWidth < 768) return 240;
    return 280;
}

interface GalleryProps {
    running: boolean;
}

export default function Gallery({ running }: GalleryProps) {
    const viewportRef = useRef<HTMLDivElement>(null);
    const stripRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);

    const currentScroll = useRef(0);
    const targetScroll = useRef(0);
    const isDragging = useRef(false);
    const lastX = useRef(0);
    const velocity = useRef(0);

    const animate = useCallback(() => {
        if (!stripRef.current) return;
        const cards = stripRef.current.children;
        const cardWidth = getCardWidth();
        const totalSetWidth = IMAGE_IDS.length * cardWidth;

        if (!isDragging.current) {
            targetScroll.current += velocity.current;
            velocity.current *= 0.95;
            targetScroll.current += AUTO_SCROLL_SPEED;
        }

        currentScroll.current +=
            (targetScroll.current - currentScroll.current) * 0.1;

        const vw = window.innerWidth;

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i] as HTMLElement;
            let virtualIndex = i * cardWidth - currentScroll.current;

            while (virtualIndex < -totalSetWidth / 2) virtualIndex += totalSetWidth;
            while (virtualIndex > totalSetWidth / 2) virtualIndex -= totalSetWidth;

            if (Math.abs(virtualIndex) < vw) {
                card.style.display = 'block';
                const progress = virtualIndex / (vw / 1.5);
                const x = virtualIndex;
                const z = -Math.pow(Math.abs(progress), 2) * (vw < 480 ? 300 : 600);
                const rotateY = progress * (vw < 480 ? 25 : 35);

                card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`;
                card.style.opacity = String(1 - Math.pow(Math.abs(progress), 3));
            } else {
                card.style.display = 'none';
            }
        }

        rafRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        if (running) {
            rafRef.current = requestAnimationFrame(animate);
        }
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [running, animate]);

    useEffect(() => {
        const vp = viewportRef.current;
        if (!vp) return;

        const onMouseDown = (e: MouseEvent) => {
            isDragging.current = true;
            lastX.current = e.clientX;
            velocity.current = 0;
            vp.style.cursor = 'grabbing';
        };
        const onMouseUp = () => {
            isDragging.current = false;
            vp.style.cursor = 'grab';
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isDragging.current) return;
            const delta = e.clientX - lastX.current;
            lastX.current = e.clientX;
            targetScroll.current -= delta * 1.5;
            velocity.current = -delta * 0.5;
        };

        const onTouchStart = (e: TouchEvent) => {
            isDragging.current = true;
            lastX.current = e.touches[0].clientX;
            velocity.current = 0;
        };
        const onTouchEnd = () => {
            isDragging.current = false;
        };
        const onTouchMove = (e: TouchEvent) => {
            if (!isDragging.current) return;
            const x = e.touches[0].clientX;
            const delta = x - lastX.current;
            lastX.current = x;
            targetScroll.current -= delta * 1.5;
            velocity.current = -delta * 0.5;
        };

        vp.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mousemove', onMouseMove);
        vp.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchend', onTouchEnd);
        window.addEventListener('touchmove', onTouchMove, { passive: true });

        return () => {
            vp.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mousemove', onMouseMove);
            vp.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('touchmove', onTouchMove);
        };
    }, []);

    return (
        <div className="gallery-viewport" ref={viewportRef} id="viewport">
            <div className="strip-container" ref={stripRef} id="strip">
                {IMAGE_IDS.map((id, index) => (
                    <div className="card" key={id} data-index={index}>
                        <div className="card-inner">
                            <img
                                src={`https://images.unsplash.com/photo-${id}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                                alt={`Memory ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
