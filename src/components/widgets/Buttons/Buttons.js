import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './buttons.scss'

export default class Button extends Component {
    button = () => {
        let template = null
        switch (this.props.type) {
            case 'loadmore':
                template =
                    <div className='blue_btn'
                        onClick={this.props.loadMore}>
                        {this.props.text}
                    </div>
                break
            default: template = null
        }
        return template
    }
    render() {
        return (
            <div>
                {this.button()}
            </div>
        )
    }
}
