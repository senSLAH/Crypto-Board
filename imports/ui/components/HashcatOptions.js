import React, { useState } from 'react'
import CommandGenerator from '../CommandGenerator';

const HashcatOptions = (data) => {

    const [generatorVisibility, setGeneratorVisibility] = useState(false)

    let listOfOptions = ["MD4,900","MD5,0","SHA1,100","SHA2-224,1300","SHA2-256,1400","SHA2-384,10800","SHA2-512,1700","SHA3-224,17300","SHA3-256,17400","SHA3-384,17500","SHA3-512,17600","RIPEMD-160,6000","BLAKE2b-512,600","GOST R 34.11-2012 (Streebog) 256-bit,11700","GOST R 34.11-2012 (Streebog) 512-bit,11800","GOST R 34.11-94,6900","Half MD5,5100","Whirlpool,6100"] 
    let html_listOfOptions = []; 

    listOfOptions.forEach(element => {
        let option = element.split(',')[0];
        let option_code = element.split(',')[1]
        html_listOfOptions.push(<li key={option+option_code} onClick={() => showGenerator(option, option_code)} value={option}>{option}</li>)
    });


    function showGenerator(choice,choice_kod) {
        
        const blocks_Attacks = document.querySelectorAll(".type_of_Attacks");
        blocks_Attacks.forEach(b_data => { 
                b_data.classList.add("none");
        })
        if (generatorVisibility) {
            setGeneratorVisibility(false);
            localStorage.setItem("option", null)
        } else {
            setGeneratorVisibility(true);
            localStorage.setItem("option", [choice,choice_kod])
        }
    }

    function search(val){
        console.log(val);
        const regex = new RegExp(".{0,}" + val + ".{0,}", "ig");
        let choices = document.querySelectorAll("li")
        choices.forEach(element => {
            if(val == ""){
                element.classList.remove('none')
            }
            else if((element.innerHTML).match(regex)){
                element.classList.remove('none')
            }else{
                element.classList.add('none')
            }
        });
    }

    return (
        <>
            <div className="type_of_Attacks">
                <div>Search hashcat option:</div>
                <form>
                    <label>
                        <input className="input_option" onChange={(e) => search(e.target.value)} type="text" name="name" />
                    </label>
                </form>
                <ul render={html_listOfOptions} className="listOfOptions">
                    {html_listOfOptions}
                </ul>
            </div>


            <CommandGenerator show={generatorVisibility} />
        </>
    );
}

export default HashcatOptions;