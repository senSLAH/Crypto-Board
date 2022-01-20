import React, { useState } from 'react'
import CommandGenerator from '../CommandGenerator';

const HashcatOptions = (data) => {

    const [generatorVisibility, setGeneratorVisibility] = useState(false)

    function showGenerator(choice) {
        
        const blocks_Attacks = document.querySelectorAll(".type_of_Attacks");
        blocks_Attacks.forEach(b_data => { 
                b_data.classList.add("none");
        })
        if (generatorVisibility) {
            setGeneratorVisibility(false);
            localStorage.setItem("option", null)
        } else {
            setGeneratorVisibility(true);
            localStorage.setItem("option", choice)
        }
    }

    return (
        <>
            <div className="type_of_Attacks">
                <div>Choose option:</div>
                <form>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Open" />
                </form>
                <a>hashcat</a>

                <ul className="listOfOptions">
                    <li onClick={() => showGenerator("MD5")}>MD5</li>
                    <li onClick={() => showGenerator("wpa/wpa2")}>WPA/WPA2</li>
                </ul>
            </div>


            <CommandGenerator show={generatorVisibility} />
        </>
    );
}

export default HashcatOptions;