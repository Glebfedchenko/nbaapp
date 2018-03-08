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
                        onClick={this.props.loadmore}>
                        {this.props.text}
                    </div>
                break
            case 'linkTo':
                template = 
                    <Link to={this.props.linkTo} className='blue_btn'>
                        {this.props.cta}
                    </Link>
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
