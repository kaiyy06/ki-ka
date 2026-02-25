interface HeaderProps {
    brand: string;
    curatedBy: string;
}

export default function Header({ brand, curatedBy }: HeaderProps) {
    return (
        <header className="header">
            <div className="brand">{brand}</div>
            <div className="meta">
                Curated with Care<br />
                by {curatedBy}
            </div>
        </header>
    );
}
