import React from 'react'

const OptionBlock = (data) => {
    function openOption(option){
        const blocks = document.querySelectorAll(".options_block}");
        blocks.forEach(block => {
            console.log(block)
            if(block.innerHTML === option){
                block.style.backgroundColor = 'blue';
                block.classList.add("selected")
            }else{
                block.classList.add("unselected}")
            }
        })
    }
    return(
        <>
            <div className="options_block" onClick={() => openOption(data.children)}>{data.children}</div>
        </>
    );
}

export default OptionBlock;