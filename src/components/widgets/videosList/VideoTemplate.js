import React, { Component } from 'react'
import './videosList.scss'
import CardInfo from '../CardInfo/CardInfo'
import { Link } from 'react-router-dom'

export default class VideoTemplate extends Component {
    render() {
        const { data, teams } = this.props
        return (
            data.map((item, i) => {

                return (<Link to={`/videos/${item.id}`} key={i}>
                    <div className='videoListItem_wrapper'>
                        <div className="left"
                            style={{
                                background: `url(/img/videos/${item.image})`
                            }}
                        >
                            <div></div>
                        </div>
                        <div className="right">
                            <CardInfo
                                teams={teams}
                                team={item.team}
                                date={item.date} />
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                </Link>
                )
            })
        )
    }
}
