import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './header.scss'
import SideNavigation from './sidenav/Sidenavigation'
import logo from '../../styles/img/basic/nba_logo.png'

export default class Header extends Component {
    render() {
        const { showNav, onHideNav } = this.props
        return (
            <div className='header'>
                <SideNavigation {...this.props} />
                <div className='headerOpt'>
                    <div className='bars'>
                        <FontAwesome
                            onClick={onHideNav}
                            name='bars' style={{ color: '#dfdfdf', padding: '10px', cursor: 'pointer' }} />
                    </div>
                    <Link to='/' className='logo'><img src={logo} alt="" /></Link>
                </div>
            </div>
        )
    }
}
