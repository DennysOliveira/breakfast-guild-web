import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="headerContainer">
        <nav className="headerContent">
            <ul>
                <li><Image className="image" src="/unchained.png" width="40px" height="40px"/></li>
                <li><h1 className="mainHeader">Breakfast Guild</h1></li>    
                <li>
                    <Link href="/">
                        <a className="navListItemAnchor">Home</a>
                    </Link>
                </li>
                
                <li>
                    <Link href="/about">
                        <a className="navListItemAnchor">About</a>
                    </Link>
                </li>      
                <li>
                    <Link href="/join">
                        <a className="navListItemAnchor">Join</a>
                    </Link>
                </li>
                <li>
                    <Link href="/strats">
                        <a className="navListItemAnchor">Strategies Lookup</a>
                    </Link>
                </li>

            </ul>
        </nav>
        </div>
    )
}