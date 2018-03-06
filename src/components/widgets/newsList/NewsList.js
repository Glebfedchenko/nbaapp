import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './newsList.scss'
import Button from '../Buttons/Buttons'
import CardInfo from '../CardInfo/CardInfo'


export default class NewsList extends Component {
    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
        teams:[]
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }
    request = (start, end) => {

        if(this.state.teams.length<1){
            axios.get(`http://localhost:3030/teams`)
            .then(resp => {
                this.setState({
                    teams:resp.data
                })
            })
        }
        axios.get(`http://localhost:3030/articles?_start=${start}&_end=${end}`)
            .then(resp => {
                this.setState({
                    items: [...this.state.items, ...resp.data],
                    start,
                    end
                })
            })
    }
    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)

    }
    showNews = (type) => {
        let template = null
        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) => {
                    return (
                        <CSSTransition
                            classNames={{
                                enter: 'newsList_wrapper',
                                enterActive: 'newsList_wrapper_enter'
                            }}
                            timeout={500}
                            key={i}
                        >
                            <div>
                                <div className='flex-wrapper' >
                                    <div className="newslist_item">
                                        <Link to={`/articles/${item.id}`}>
                                        <CardInfo 
                                            teams={this.state.teams}
                                            team={item.team}
                                            date={item.date}/>
                                            <h2>{item.title}</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })
                break
            default: template = null
        }
        return template
    }

    render() {
        const { type } = this.props
        return (
            <div>
                <TransitionGroup
                    component='div'
                    className='list'
                >
                    {this.showNews(type)}
                </TransitionGroup>
                <Button type='loadmore'
                    loadMore={()=>this.loadMore()}
                    text='Load More News' />
            </div>
        )
    }
}
