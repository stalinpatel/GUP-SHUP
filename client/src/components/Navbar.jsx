import React from 'react';
import ThemeDropdown from './ThemeDropdown';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-base-100 backdrop-blur-sm shadow-black/80 shadow-md mb-2 flex flex-row">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Gup-Shup</a>
                </div>
                <ThemeDropdown />
            </div>
        </nav>
    );
};

export default Navbar;