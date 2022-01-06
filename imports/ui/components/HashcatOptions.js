import React from 'react'

const HashcatOptions = (data) => {



    return (
        <>
            <div>Choose option:</div>
            <form>
                <label>
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Open" />
            </form>
                <a>hashcat</a>

            <ul className="listOfOptions">

                <li>MD5</li>
                <li>WPA/WPA2</li>

            </ul>
        </>
    );
}

export default HashcatOptions;