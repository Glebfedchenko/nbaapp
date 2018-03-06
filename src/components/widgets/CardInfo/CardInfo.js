import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './cardInfo.scss'

export default class CardInfo extends Component {
    teamName = (teams, team) => {
        let data = teams.find((i) => {
            return i.id === team
        })
        if (data) {
            return data.name
        }
    }

    render() {
        const { date, teams, team } = this.props
        return (
            <div className='cardNfo'>
                <span className='teamName'>
                    {this.teamName(teams, team)}
                </span>
                <span className='date'>
                    <FontAwesome name='clock-o' />
                    {date}
                </span>
            </div>
        )
    }
}
