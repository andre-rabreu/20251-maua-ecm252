import React from 'react'

const Feedback = props => {
    return (
        <div classname="d-flex .justify-content-evenly m-2">
            <>
                <button
                    classname="btn btn-primary"
                    type="button" onClick={props.funcaoOK}>
                    {props.textoOK}
                </button>
                <button
                    classname="btn btn-primary"
                    type="button" onClick={props.funcaoOK}>
                    {props.textoOK}
                </button>
            </>
        </div >
    )
}

export default Feedback