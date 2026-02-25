interface ExploreButtonProps {
    label?: string;
    onClick?: () => void;
}

export default function ExploreButton({
    label = 'Explore the Archives',
    onClick,
}: ExploreButtonProps) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            alert('Opening the archives...');
        }
    };

    return (
        <div className="waitlist-container">
            <button className="explore-btn" onClick={handleClick}>
                {label}
            </button>
        </div>
    );
}
