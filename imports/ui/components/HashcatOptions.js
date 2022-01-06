import React, { useState } from 'react'
import CommandGenerator from '../CommandGenerator';

const HashcatOptions = (data) => {

    const [generatorVisibility, setGeneratorVisibility] = useState(false)

    function showGenerator(){
        if(generatorVisibility){
            setGeneratorVisibility(false);
        }else{
            setGeneratorVisibility(true);
        }
    }


    return (
        <>
            <div>Choose option:</div>
            <form>
                <label>
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Open" />
            </form>
                <a>hashcat</a>

            <ul className="listOfOptions">
                <li onClick={showGenerator}>MD5</li>
                <li>WPA/WPA2</li>
            </ul>

            <CommandGenerator show={generatorVisibility}/>
        </>
    );
}

export default HashcatOptions;