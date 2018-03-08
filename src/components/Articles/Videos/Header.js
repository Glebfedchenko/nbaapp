import React, { Component } from 'react'
import TeamInfo from '../News/TeamInfo'

export default class Header extends Component {
    render() {
        const { teamData } = this.props
        const teamInfo = (team) => {
            return team ?
                <TeamInfo team={teamData} />
                : null
        }
        return (
            <div>
                {teamInfo(teamData)}
            </div>
        )
    }
}
