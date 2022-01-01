import React, { Component } from 'react';
import OptionBlock from './OptionBlock.js';
import Hashcat from './Hashcat.js';
import JohnTheRipper from './JohnTheRipper';

class OptionsBox extends Component{

    
    render() {
        return (
            <div className="options_container">
                <Hashcat className="options_block">Hashcat</Hashcat>
                <JohnTheRipper className="options_block">JohnTheRipper</JohnTheRipper>
                <OptionBlock className="options_block">Option3</OptionBlock>
                <OptionBlock className="options_block">Option4</OptionBlock>
                <OptionBlock className="options_block">Option5</OptionBlock>
            </div>
        );
    }
}

export default OptionsBox;
