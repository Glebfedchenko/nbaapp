import React, { Component } from 'react'
import './videosList.scss'
import axios from 'axios'
import Button from '../Buttons/Buttons'

export default class VideosList extends Component {
    state={
        teams:[],
        videos:[],
        start: this.props.start,
        end: this.props.amount + this.props.start,
        amount: this.props.amount
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
