import React, { useState } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';




const defaultState = {
    dictionary: false,
    bruteForce: false,
};

const CommandGenerator = (props) => {

    const [isBruteForce, setIsBruteForce] = useState(false);
    const [isDictionary, setIsDictionary] = useState(false);
    const [Command, setCommand] = useState("");
    const [status, setStatus] = useState(null);
    const [decrypted, setDecrypted] = useState(null);
    const [width, setWidth] = useState(100);
    const [passLength, setPassLength] = useState(1);

    const [passContent, setPassContent] = useState([]);

    let command;
    let pass_content = [];


    createNotification = (type) => {

        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    }

    const generate_command = () => {
        command = "./hashcat";
        if (isDictionary) {
            command += " -a 0"
        } else if (isBruteForce) {
            command += " -a 3"
        }
        command += " -m " + localStorage.getItem("option").split(',')[1]

        command += " " + document.querySelector(".secure").value;

        if (isBruteForce) {
            let selectors = document.querySelectorAll(".pass_selectors")
            command += " "
            for (let i = 0; i < selectors.length; i++) {
                command += selectors[i].value
            }
        }
        if (isDictionary) {
            command += " rockyou.txt"
        }
        setCommand(command)
        setWidth(((command.length + 1) * 10) + 'px')
        
    }

    const execute_on_server = () => {
        let copyText = document.querySelector(".command_to_execute");
        if(copyText.value == ""){
            NotificationManager.warning('Set properties and click Generate button','Warning',4000);
            return;
        }
        if(document.querySelector((".secure")).value == ""){
            NotificationManager.warning('You forgot to enter hash!','Warning',4000);
            return;
        }
        let full_command = "cd /Users/illiaaldabaiev/hashcat && " + Command;
        let secure = document.querySelector(".secure").value
        NotificationManager.info('Sending request...')
        Meteor.call('runCode', [full_command, secure], function (err, response) {
            let status = response.match(/Status...........:.[A-Z][a-z]{0,}/g);
            let result = new RegExp("^.*" + secure + ".*$", 'm');

            if(status != null && status[0].split(' ')[1] == "Exhausted"){
                NotificationManager.error('Error', 'Click here to see probable reason', 5000, () => {
                    alert('Sometimes you can get error, because of: \n* Mismatched algoritm \n* Mismatched properties or misspelled hash \n* Server crash');
                });
            }else if (status != null) {
                setStatus(status[0].split(' ')[1]);
                setDecrypted(response.match(result)[0].split(':')[1]);
                NotificationManager.success('Successfully Cracked!')
            }else if(response.length > 20){
                NotificationManager.error('Error', 'Click here to see probable reason', 5000, () => {
                    alert('Sometimes you can get error, because of: \n* Mismatched algoritm \n* Mismatched properties or misspelled hash \n* Server crash');
                });
            }else {
                setStatus("Cracked");
                setDecrypted(response);
                NotificationManager.success('Successfully Cracked!')
            }
        });
    }

    function copy_to_clickboard() {
        let copyText = document.querySelector(".command_to_execute");
        console.log(document.querySelector((".secure")).value)
        if(copyText.value == ""){
            NotificationManager.warning('Set properties and click Generate button','Warning',4000);
            return;
        }
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    }

    function inputChangedHandler(event) {
        const updatedKeyword = event.target.value;
        setCommand(updatedKeyword)
        setWidth(((event.target.value.length + 1) * 8) + 'px');
    }

    function setup_pass_content(length) {
        setPassLength(length)
        for (let i = 1; i <= length; i++) {
            pass_content.push(<select className="pass_selectors" key={i + length}>
                <option value="?l" title="abcdefghijklmnopqrstuvwxyz">[a-z]</option>
                <option value="?u" title="ABCDEFGHIJKLMNOPQRSTUVWXYZ">[A-Z]</option>
                <option value="?d" title="0123456789">[0-9]</option>
                <option value="?h" title="0123456789abcdef">[0-9a-f]</option>
                <option value="?H" title="0123456789ABCDEF">[0-9A-F]</option>
                <option value="?s" title="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~">[?%.*!$ etc.]</option>
            </select>)
        }
        setPassContent(pass_content)
    }

    return (
        <div className={props.show ? "commandGenerator" : "none"}>
            <NotificationContainer />
            <div className="generator_skeleton">
                <div className='generator_tag'>
                    Set properties for cracking {localStorage.getItem("option").split(',')[0]}
                </div>
                <div className='generator'>
                    Choose type of attack:
                    <div>
                        <button className={isBruteForce ? "generator_button_selected" : "generator_button"}
                            onClick={() => {
                                if (isBruteForce) { setIsBruteForce(false) } else { setIsBruteForce(true); setIsDictionary(false) }
                            }}>
                            Brute Force
                        </button>
                        <button className={isDictionary ? "generator_button_selected" : "generator_button"}
                            onClick={() => { if (isDictionary) { setIsDictionary(false) } else { setIsDictionary(true); setIsBruteForce(false) } }}>
                            Dictionary Attack
                        </button>
                    </div>
                </div>
                <div className={isBruteForce ? "generator" : "none"}>
                    <div className="generator_conteiner">
                        Length:
                        <input style={{ width: "40px" }} onChange={(event) => setup_pass_content(event.target.value)} value={passLength} min="1" max="20" type="number" /><br />
                        {passContent}
                    </div>
                </div>
                <div className={isDictionary || isBruteForce ? "generator" : "none"}>
                    Input you hash:
                    <form className='input_your_hash'>
                        <label>
                            <input className='secure' type="text" name="name" />
                        </label>
                    </form>
                </div>
                <div>
                    <button className="generator_bttons" onClick={() => generate_command()}>Generate</button><br />
                    <div>
                        <input className='command_to_execute' style={{ width }} onChange={(event) => inputChangedHandler(event)} readOnly value={Command} type="text" name="name" />
                    </div>
                </div>
            </div>
            <button className="generator_bttons"  onClick={() => copy_to_clickboard()}>Copy command</button>
            <button className="generator_bttons"  onClick={() => { execute_on_server() }}>Execute</button>

            <div className={status && decrypted ? "cracke_results" : "none"}>
                Status: {status} <br />
                Decrypted: {decrypted}
            </div>
        </div>
    );
}

export default CommandGenerator;