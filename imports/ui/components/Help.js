import React from 'react'

const Help = (props) => {

    return (
        <div className={props.show ? "helpPage" : "none"}>
            help page!<br></br>
            this instuction for you
        </div>);
}

export default Help