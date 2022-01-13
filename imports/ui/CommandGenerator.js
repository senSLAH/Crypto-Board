import React, { useState } from 'react'

const defaultState = {
    dictionary: false,
    bruteForce: false,
};

const CommandGenerator = (props) => {

    const [isBruteForce, setIsBruteForce] = useState(false)
    const [isDictionary, setIsDictionary] = useState(false)

    const print_state = () => {
        console.log("Brute Force: " + isBruteForce);
        console.log("Dictionary: " + isDictionary);
    }


    return (
        <div className={props.show ? "commandGenerator" : "none"}>
            <button onClick={print_state}>TEST_BUTTON</button>
            <div className="generator_skeleton">
                Set properties for cracking
                <div className='generator'>
                    Choose type of attack:
                    <div>
                        <button className={isBruteForce ? "generator_button_selected" : "generator_button"} onClick={() => isBruteForce ? setIsBruteForce(false) : setIsBruteForce(true)}>
                            Brute Force
                        </button>
                        <button className={isDictionary ? "generator_button_selected" : "generator_button"} onClick={() => isDictionary ? setIsDictionary(false) : setIsDictionary(true)}>
                            Dictionary Attack
                        </button>
                    </div>
                </div>
                <div className='generator'>
                    generator
                </div>
                <div>
                    Input you hash:
                    <form>
                        <label>
                            <input type="text" name="name" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CommandGenerator;