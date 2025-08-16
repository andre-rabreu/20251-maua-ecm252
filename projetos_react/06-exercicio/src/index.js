import React, { Component } from 'react'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import 'primereact/resources/themes/md-dark-deeppurple/theme.css'

export default class App extends Component {
    render () {
        return (
            <div>
                App
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));