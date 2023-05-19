import React from 'react'
import Mynotebook from './Mynotebook'

function Myhome(props) {
    document.title = "Drive | Eease"
    return (
        <div>
            <Mynotebook mode={props.mode} showAlert={props.showAlert} />
        </div>
    )
}

export default Myhome