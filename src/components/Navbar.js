import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="text-2xl font-medium z-20 relative">
            <ul className="flex gap-12">
                <Link href={'/'}><li>About Me</li></Link>
                <Link href={'/projects'}><li>Projects</li></Link>
                <Link href={'/contact'}><li>Contact Me</li></Link>
            </ul>
        </nav>
    )
}