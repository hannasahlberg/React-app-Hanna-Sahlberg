import '../css/sidebar.css';
import { useState } from 'react';
function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
        </button>
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul>
            <li><a href="#uppgifttvå" onClick={() => setIsOpen(false)}>Uppgift 2</a></li>
            <li><a href="#uppgifttre" onClick={() => setIsOpen(false)}>Uppgift 3</a></li>
            </ul>
        </aside>
        </>
    );
}

export default Sidebar;