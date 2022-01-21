import React, { useState } from 'react'
import Help from './Help';

const Navbar = () => {
    const [helpPageVisibility, setHelpPageVisibility] = useState(false)

    function setDefault() {
        window.location.reload();//temporary
    }
    function setHelpPage() {
        if (helpPageVisibility) {
            setHelpPageVisibility(false);
        } else {
            setHelpPageVisibility(true);
        }
    }

    return (
        <>
            <div className="navbar">
                <button onClick={setDefault} className="home_button">Crypto Board</button>
                <button onClick={setHelpPage} className="navbar_button">Help</button>
            </div>
            <Help show={helpPageVisibility} />
        </>
    )
}

export default Navbar;