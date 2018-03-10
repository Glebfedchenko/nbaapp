import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import '../articles.scss'
import VideosRelated from '../../widgets/videosList/VideosRelated'

export default class VideoArticle extends Component {
    state = {
        article: [],
        team: [],
        teams: [],
        related: []
    }
    componentWillMount() {
        axios.get(`http://localhost:3030/videos?id=${this.props.match.params.id}`)
            .then(resp => {
                let article = resp.data[0]
                axios.get(`http://localhost:3030/teams?id=${article.team}`)
                    .then(resp => {
                        this.setState({
                            article: article,
                            team: resp.data
                        })
                        this.getRelated();
                    })
            })
    }
    getRelated = () => {
        axios.get(`http://localhost:3030/teams`)
            .then(resp => {
                let teams = resp.data
                axios.get(`http://localhost:3030/videos?q=${this.state.team[0].city}&_limit=3`)
                    .then(resp => {
                        this.setState({
                            teams,
                            related: resp.data
                        })
                    })
            })
    }
    render() {
        const { article, team } = this.state
        return (
            <div>
                <Header teamData={team[0]} />
                <div className="videoWrapper">
                    <h1>{article.title}</h1>
                    <iframe
                        title='videoplayer'
                        width='100%'
                        height='300px'
                        src={`https://www.youtube.com/embed/${article.url}`} >
                    </iframe>
                </div>
                <VideosRelated
                    data={this.state.related}
                    teams={this.state.teams} />
            </div>
        )
    }
}
