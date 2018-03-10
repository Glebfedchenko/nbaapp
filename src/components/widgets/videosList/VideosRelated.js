import React, { Component } from 'react'
import './videosList.scss'
import VideoTemplate from './VideoTemplate'

export default class VideosRelated extends Component {
    render() {
        const {data, teams} = this.props
        return (
            <div className='relatedWrapper'>
                <VideoTemplate data={data} teams={teams}/>                
            </div>
        )
    }
}
