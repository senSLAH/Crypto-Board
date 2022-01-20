import React, { Component } from 'react';
import OptionBlock from './OptionBlock.js';
import Hashcat from './Hashcat.js';
import JohnTheRipper from './JohnTheRipper';

class OptionsBox extends Component {

    

    render() {
        return (
            <div className="options_container">
                <Hashcat className="options_block">
                    <div>Hashcat</div>
                </Hashcat>
                {/* <JohnTheRipper className="options_block">JohnTheRipper</JohnTheRipper> */}
            </div>
        );
    }
}

export default OptionsBox;
