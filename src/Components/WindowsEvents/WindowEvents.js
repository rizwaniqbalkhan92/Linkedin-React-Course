import React, { useEffect } from 'react'

const WindowEvents = () => {
    useEffect(() => {

        const doubleCLick = () => {
            alert(' Mouse Pressed ')
        }
        window.addEventListener('dblclick', doubleCLick);
        return () => window.removeEventListener("dblclick", doubleCLick);

    }, [])




    return (
        <div>
            <h1>Windows Event Here...!</h1>


        </div>
    )
}

export default WindowEvents