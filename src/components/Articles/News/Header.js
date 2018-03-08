import React, { Component } from 'react'
import TeamInfo from './TeamInfo'
import PostData from './PostData'

export default class Header extends Component {
    render() {
        const { teamData, date, author } = this.props
        const teamInfo = (team) => {
            return team ? <TeamInfo team={team} /> : null
        }
        const postData = (date, author) => {
           return <PostData date={date} author={author} />
        }
        return (
            <div>
                {teamInfo(teamData)}
                {postData(date, author)}
            </div>
        )
    }
}
