import React from 'react'

const JohnTheRipper = (data) => {
    let content = data.children;

    function openOption(option){
        const blocks_content = document.querySelectorAll(".none");
        blocks_content.forEach(b_data => {
            if(b_data.id == data.children){
                b_data.classList.remove("none");
                b_data.classList.add("show_option");

            }
        })
    }
    return(
        <>
            <div className="options_block" onClick={() => openOption(data.children)}>{content}</div>
            <div className="none" id={data.children}>
                important datat about JohnTheRipper
            </div>
        </>
    );
}

export default JohnTheRipper;