import React, { Component } from 'react'
import VideosList from '../../widgets/videosList/VideosList'

export default class VideosMain extends Component {
    render() {
        return (
            <div>
                <VideosList type='card' title={false} loadmore={true} start={1} amount={7}/>                
            </div>
        )
    }
}
