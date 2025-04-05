import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center border mt-2 rounded p-3'>
                <div
                    className='spinner-border text-primary'
                    style={{ width: '3rem', height: '3rem' }}>
                </div>
                <p className='text-primary p-3'>
                    {this.props.message}
                </p>
            </div>
        )
    }
}

Loading.defaultProps = {
    message: 'Aguardando...'
}