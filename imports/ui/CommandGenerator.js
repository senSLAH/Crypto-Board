import React, { useState } from 'react'

const defaultState = {
    dictionary: false,
    bruteForce: false,
};

const CommandGenerator = (props) => {

    const [isBruteForce, setIsBruteForce] = useState(false);
    const [isDictionary, setIsDictionary] = useState(false);
    const [Command, setCommand] = useState("./hash");

    let command;

    const print_state = () => {
        console.log("Brute Force: " + isBruteForce);
        console.log("Dictionary: " + isDictionary);
    }
    const generate_command = () => {
        command = "./hashcat";
        if(isDictionary){
            command += " -a 0"
        }
        if(localStorage.getItem("option") == "md5"){//md5 in Future
            command += " -m 0"
        }
        command += " " + document.querySelector(".secure").value;
        if(isDictionary){
            command += " example.dict"
        }
        setCommand(command)
    }
    const execute_on_server = () => {
        let full_command = "cd /Users/illiaaldabaiev/hashcat && " + Command;
        Meteor.call('runCode', full_command,function (err, response) {
            console.log(response);
          });
    }


    return (
        <div className={props.show ? "commandGenerator" : "none"}>
            <div className="generator_skeleton">
                Set properties for cracking
                <div className='generator'>
                    Choose type of attack:
                    <div>
                        <button className={isBruteForce ? "generator_button_selected" : "generator_button"} 
                                onClick={() => {
                                    if(isBruteForce){ setIsBruteForce(false)} else{ setIsBruteForce(true) } }}>
                            Brute Force
                        </button>
                        <button className={isDictionary ? "generator_button_selected" : "generator_button"} 
                                onClick={() =>{ if(isDictionary){ setIsDictionary(false)} else { setIsDictionary(true) } }}>
                            Dictionary Attack
                        </button>
                    </div>
                </div>
                <div className={isBruteForce ? "generator" : "none"}>
                    generator
                </div>
                <div className={isDictionary || isBruteForce ? null : "none"}>
                    Input you hash:
                    <form>
                        <label>
                            <input className='secure' type="text" name="name" />
                        </label>
                    </form>
                </div>
                <div>
                    Command:
                    <div>
                        {Command}
                    </div>
                </div>
            </div>
            <button onClick={() => generate_command()}>TEST_BUTTON</button>
            <button onClick={() => execute_on_server()}>Execute</button>
        </div>
    );
}

export default CommandGenerator;