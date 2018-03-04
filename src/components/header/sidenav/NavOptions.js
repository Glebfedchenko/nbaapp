import React, { Fragment } from 'react'
import './sidenav.scss';
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import {options} from './options'

const NavOptions = () => {
    const showOptions = () => {
        return options.map((option, i) => <div key={i} className={option.type}>
            <Link to={option.link}>
                <FontAwesome name={option.icon} />
                {option.text}
            </Link>
        </div>)
    }
    return (
        <Fragment>
            {showOptions()}
        </Fragment>
    )
}

export default NavOptions
