import React, { Component } from 'react'
import Slick from 'react-slick'

export default class SliderTemplates extends Component {
    render() {
        const { data } = this.props
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div>
                <Slick {...settings}>
        
                </Slick>
            </div>
        )
    }
}
