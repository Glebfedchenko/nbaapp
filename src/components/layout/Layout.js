import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './layout.scss'

export default class Layout extends Component {
    state = {
        showNav: false
    }
    toggleSidenav = () => {
        this.setState({ showNav: !this.state.showNav })
    }
    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={this.toggleSidenav} />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
