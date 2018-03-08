import React, { Component } from 'react'
import './videosList.scss'
import axios from 'axios'
import Button from '../Buttons/Buttons'
import VideoTemplate from './VideoTemplate'

export default class VideosList extends Component {
    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.amount + this.props.start,
        amount: this.props.amount
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        if (this.state.teams.length < 1) {
            axios.get(`http://localhost:3030/teams`)
                .then(resp => {
                    this.setState({
                        teams: resp.data
                    })
                })
        }
        axios.get(`http://localhost:3030/videos?_start=${start}&_end=${end}`)
            .then(resp => {
                this.setState({
                    videos: [...this.state.videos, ...resp.data],
                    start,
                    end
                })
            })
    }
    renderVideos = () => {
        let template = null
        switch (this.props.type) {
            case ('card'):
                template = <VideoTemplate
                    data={this.state.videos}
                    teams={this.state.teams} />
                break;
            default: template = null
        }
        return template
    }
    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }
    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type='loadmore'
                loadmore={this.loadMore}
                text='Load More Videos' />
            :
            <Button type='linkTo' cta='More videos' linkTo='/videos' />
    }
    renderTitle = () => {
        return this.props.title ?
            <h3><strong>NBA</strong>Videos</h3>
            : null
    }
    render() {
        return (
            <div className='videoList_wrapper'>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}
