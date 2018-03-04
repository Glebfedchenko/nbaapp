import React, { Component } from 'react'
import axios from 'axios'
import SliderTemplates from './SliderTemplates'

export default class NewsSlider extends Component {
    state = {
        news: []
    }
    componentWillMount() {
        axios.get(`http://localhost:3030/articles?_start=0&_end=3`)
            .then(resp => {
                this.setState({ news: resp.data })
            })
    }
    render() {
        return (
            <div>
                <SliderTemplates data={this.state.news}/>
            </div>
        )
    }
}
