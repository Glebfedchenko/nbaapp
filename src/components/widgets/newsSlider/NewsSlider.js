import React, { Component } from 'react'
import axios from 'axios'
import SliderTemplates from './SliderTemplates'

export default class NewsSlider extends Component {
    state = {
        news: []
    }
    componentWillMount() {
        axios.get(`http://localhost:3030/articles?_start=${this.props.start}&_end=${this.props.end}`)
            .then(resp => {
                this.setState({ news: resp.data })
            })
    }
    render() {
        const {type, settings} = this.props
        const {news} = this.state
        return (
            <div>
                <SliderTemplates
                    data={news}
                    type={type}
                    settings={settings} />
            </div>
        )
    }
}
