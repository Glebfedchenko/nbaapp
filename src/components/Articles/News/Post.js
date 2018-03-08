import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

export default class Post extends Component {
    state = {
        article: [],
        team: []
    }
    componentWillMount() {
        axios.get(`http://localhost:3030/articles?id=${this.props.match.params.id}`)
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
            <div className='articleWrapper'>
                <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author} />
                <div className="articleBody">
                    <h1>{article.title}</h1>
                    <div className="articleImage" 
                    style={{background:`url('/img/articles/${article.image}')`}}>
                    </div>
                    <div className="articleText">
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}
