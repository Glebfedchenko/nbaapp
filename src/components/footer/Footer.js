import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import logo from '../../styles/img/basic/nba_logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Link to='/' className='logo'><img className='footerLogo' src={logo} alt="" /></Link>
                <div className="right">
                    {`@NBA ${new Date().getFullYear()} All rights reserved`}
                </div>
            </div>
        )
    }
}
