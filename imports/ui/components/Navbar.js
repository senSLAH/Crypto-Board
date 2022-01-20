import React from 'react'

const Navbar = () => {
	function setDefault(){
		window.location.reload();//temporary
	}
    return (
        <div className="navbar">
            <button onClick={setDefault} className="home_button">Crypto Board</button>
            <button className="navbar_button">Help</button>
        </div>
    )
}

export default Navbar;