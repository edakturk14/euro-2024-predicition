import Link from "next/link";

export function Header() {

    return (
        <div>
            <div className="navbar flex justify-between items-center px-4 font-body">
                <nav className="flex items-center gap-4 text-gray-500 font-semibold text-hotPink">
                    <Link href="/" className="hover:text-blue-600">EURO 2024</Link>
                    <Link href="/" className="hover:text-blue-600">How to play</Link>
                    <Link href="/" className="hover:text-blue-600">Leaderboard</Link>
                </nav>
            </div>
        </div>
    );
}
export default Header;