import React from 'react'
import HashcatOptions from './HashcatOptions';

const Hashcat = (data) => {
    let content = data.children;

    function openOption(option){
        const blocks_content = document.querySelectorAll(".none");
        const blocks_options = document.querySelectorAll(".options_block");
        blocks_content.forEach(b_data => {
            if(b_data.id == data.children){
                b_data.classList.remove("none");
                b_data.classList.add("show_option");
            }
        })
        blocks_options.forEach(bo_data => {
            bo_data.classList.add("none");
        })
    }
    return(
        <>
            <div className="options_block" onClick={() => openOption(data.children)}>
                <div>Hashcat</div>
                <br></br>
                <div>Hashat is a particularly fast, efficient, and versatile hacking tool that assists brute-force attacks by conducting them with hash values of passwords that the tool is guessing or applying. When used for benign purposes, such as in penetration testing one’s own infrastructure, it can reveal compromised or easy to guess credentials.</div>    
            </div>
            <div className="none" id={data.children}>
                <HashcatOptions/>
            </div>
        </>
    );
}

export default Hashcat;