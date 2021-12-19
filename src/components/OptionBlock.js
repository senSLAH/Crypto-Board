import classes from './Options.module.css';

import React from 'react'

const OptionBlock = (data) => {
    function openOption(option){
        const blocks = document.querySelectorAll(`.${classes.options_block}`);
        blocks.forEach(block => {
            console.log(block)
            if(block.innerHTML === option){
                block.style.backgroundColor = 'blue';
                block.classList.add(`${classes.selected}`)
            }else{
                block.classList.add(`${classes.unselected}`)
            }
        })
    }
    return(
        <>
            <div className={classes.options_block} onClick={() => openOption(data.children)}>{data.children}</div>
        </>
    );
}

export default OptionBlock;