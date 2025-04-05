import React, { Component } from 'react'

export default class EstacaoClimatica extends Component {

    timer = null

    state = {
        date: null
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date().toLocaleString()
            })
        }, 1000)
        console.log(this.timer)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log('render')
        return (
            <div className='card'>
                <div className='card-body'>
                    <div
                        className='d-flex align-items-center border rounded mb-2'
                        style={{ height: '6rem' }}>
                        <i className={`fas fa-5x ${this.props.icon}`} />
                        <p className='w-75 ms-3 text-center fs-1'>
                            {this.props.season}
                        </p>
                    </div>
                    <div>
                        <p className='text-center'>
                            {
                                this.props.latitude ?
                                    `Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.date}` :
                                    'Clique no botão para obter sua estação'
                            }
                        </p>
                    </div>
                    <div>
                        <button
                            type='button'
                            className='btn btn-outline-primary w-100 mt-2'
                            onClick={() => this.props.getLocation()}>
                            Qual a minha estação?
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
