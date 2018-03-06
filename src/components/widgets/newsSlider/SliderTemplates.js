import React, { Component } from 'react'
import Slick from 'react-slick'
import './slider.scss'
import { Link } from 'react-router-dom'

export default class SliderTemplates extends Component {
    render() {
        const { data, type} = this.props
        let template = null

        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            ...this.props.settings
        }
        switch (type) {
            case ('featured'):
                template = data.map((item, i) => {
                    return (
                        <div key={i} className='featured_item'>
                            <div className="featured_image"
                                style={{
                                    background: `url(img/articles/${item.image})`
                                }}></div>
                                <Link to={`/articles/${item.id}`}>
                                    <div className='featured_caption'>
                                        {item.title}
                                    </div>
                                </Link>
                        </div>
                    )
                })
                break;
            default: template = null
        }
        return (
            <div>
                <Slick {...settings}>
                    {template}
                </Slick>
            </div>
        )
    }
}
