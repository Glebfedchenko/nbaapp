import React, { Component } from 'react'
import SideNav from 'react-simple-sidenav'
import NavOptions from './NavOptions'

export default class SideNavigation extends Component {
    render() {
        const { showNav, onHideNav } = this.props
        return (
            <div>
                <SideNav
                    showNav={showNav}
                    onHideNav={onHideNav}
                    navStyle={{
                        background: '#242424'
                    }}>
                    <NavOptions />
                </SideNav>
            </div>
        )
    }
}
