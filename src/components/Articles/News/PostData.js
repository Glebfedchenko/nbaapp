import React, { Component } from 'react'
import '../articles.scss'

export default class Postdata extends Component {
    render() {
        const {date, author} = this.props
        return (
            <div className='articlePostData'>
                <div>
                    Date:
                    <span>{date}</span>
                </div>
                <div>
                    Author:
                    <span>{author}</span>
                </div>
            </div>
        )
    }
}
