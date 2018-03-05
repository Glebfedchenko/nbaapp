import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './newsList.scss'

export default class NewsList extends Component {
    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount() {
        axios.get(`http://localhost:3030/articles?
        _start=${this.state.start}&_end=${this.state.end}`)
            .then(resp => {
                this.setState({
                    items: [...this.state.items, ...resp.data]
                })
            })
    }
    showNews = (type) => {
        let template = null
        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) => {
                    return (
                        <div className='flex-wrapper' >
                            <div className="newslist_item">
                                <Link to={`/articles/${item.id}`}>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    )
                })
                break
            default: template = null
        }
        return template
    }

    render() {
        const {type} = this.props
        return (
            <div>
                {this.showNews(type)}
            </div>
        )
    }
}
