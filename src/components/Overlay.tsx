interface OverlayProps {
    visible: boolean;
    text?: string;
}

export default function Overlay({ visible, text = 'RESTORING MEMORIES...' }: OverlayProps) {
    return (
        <div className={`overlay${visible ? '' : ' hidden'}`}>
            <div className="loader-text">{text}</div>
        </div>
    );
}
