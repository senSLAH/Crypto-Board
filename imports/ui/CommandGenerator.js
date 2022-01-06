import React from 'react'

const CommandGenerator = (props) => {

    
    return(
        <>
            <div className={props.show ? "commandGenerator" : "none"}>
                Generator
            </div>
        </>
    );
}

export default CommandGenerator;