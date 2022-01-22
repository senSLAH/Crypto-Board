import React from 'react'

const Help = (props) => {

    return (
        <>  
            <div className={props.show ? "helpPageContent" : "none"}>
            <span className='helpPage'>Help page<br/></span>
            <br />If you are on the generator page:<br />
            * Choose type of attack "Brute Force" or "Dictionary attack"<br />

            <br />If you choose "Brute Force" attack:<br /><br />
            1) Set password length and mask. More about mask you can find on official <a href='https://hashcat.net/wiki/doku.php?id=mask_attack'>hashcat page</a><br />
            2) Enter your hash<br />
            3) Click "Generate" button<br />
            4) Click "Copy command" or "Execute" to execute command on server<br />
            <br />If you choose "Dictionary attack" attack:<br /><br />
            1) Enter your hash<br />
            2) Click "Generate" button and application automaticaly select "rockyou.txt" dictionary<br />
            3) Click "Copy command" or "Execute" to execute command on server<br />
            </div>   
        </>
    );
}

export default Help