import React from 'react'
import Card from 'primereact/card'

export default class Card extends Component {
    render () {
        return (
            <Card title={this.props.title} style={styles.card}>
                <div className={`${styles.inner} ${{this.props.className}}`}>
                    {this.props.children}
                </div>
            </Card>
        )
    }
}

const styles = {
    card: {
        
    }
}