import classes from './Navbar.module.css';
import React from 'react'

const Navbar = () => {
	function setDefault(){
		window.location.reload();//temporary
	}
    return (
        <div className={classes.navbar}>
            <button onClick={setDefault} className={classes.home_button}>Crypto Board</button>
            <button className={classes.navbar_button}>Menu</button>
        </div>
    )
}

export default Navbar;