import React, { Component } from 'react';
import classes from './Options.module.css';
import OptionBlock from './OptionBlock.js';

class OptionsBox extends Component{

    
    render() {
        return (
            <div className={classes.options_container}>
                <OptionBlock className={classes.options_block}>Hashcat</OptionBlock>
                <OptionBlock className={classes.options_block}>JohnTheRipper</OptionBlock>
                <OptionBlock className={classes.options_block}>Option3</OptionBlock>
                <OptionBlock className={classes.options_block}>Option4</OptionBlock>
                <OptionBlock className={classes.options_block}>Option5</OptionBlock>
            </div>
        );
    }
}

export default OptionsBox;
