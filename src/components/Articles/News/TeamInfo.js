import React, { Component } from 'react'
import '../articles.scss'

export default class TeamInfo extends Component {
    render() {
        const { team } = this.props
        return (
            <div className='teamHeader'>
                <div className="leftInner"
                    style={{ background: `url('/img/teams/${team.logo}'` }}
                >
                </div>
                <div className="rightInner">
                    <div>
                        <span>{team.city} {team.name}</span>
                    </div>
                    <div>
                        <strong>
                            W{team.stats[0].wins}-L{team.stats[0].defeats}
                        </strong>
                    </div>
                </div>
            </div>
        )
    }
}
