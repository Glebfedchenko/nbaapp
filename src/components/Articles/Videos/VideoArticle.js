import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import '../articles.scss'

export default class VideoArticle extends Component {
    state = {
        article: [],
        team: []
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
                    })
            })
    }

    render() {
        const { article, team } = this.state
        return (
            <div>
                <Header teamData={team[0]}/>
                <div className="videoWrapper">
                    <h1>{article.title}</h1>
                     <iframe 
                        title='videoplayer'
                        width='100%'
                        height='300px'
                        src={`https://www.youtube.com/embed/${article.url}`} >
                        </iframe>
                </div>
            </div>
        )
    }
}
