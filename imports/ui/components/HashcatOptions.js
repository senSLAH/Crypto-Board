import React, { useState } from 'react'
import CommandGenerator from '../CommandGenerator';

const HashcatOptions = (data) => {

    const [generatorVisibility, setGeneratorVisibility] = useState(false)

    function showGenerator(choice){
        if(generatorVisibility){
            setGeneratorVisibility(false);
            localStorage.setItem("option", null)
        }else{
            setGeneratorVisibility(true);
            localStorage.setItem("option", choice)

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
                <li onClick={() => showGenerator("md5")}>MD5</li>
                <li onClick={() => showGenerator("wpa/wpa2")}>WPA/WPA2</li>
            </ul>

            <CommandGenerator show={generatorVisibility}/>
        </>
    );
}

export default HashcatOptions;