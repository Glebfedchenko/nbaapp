import React, { Component } from 'react'
import NewsSlider from './widgets/newsSlider/NewsSlider'
export default class Home extends Component {
    render() {
        return (
            <div>
                Home
                <NewsSlider />
            </div>
        )
    }
}
