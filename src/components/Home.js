import React, { Component } from 'react'
import NewsSlider from './widgets/newsSlider/NewsSlider'
import NewsList from './widgets/newsList/NewsList'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NewsSlider
                    type='featured'
                    start={0}
                    end={3}
                    settings={{
                        dots: false
                    }}
                />
                <NewsList
                    type='card'
                    load={true}
                    start={2}
                    amount={4}
                />
            </div>
        )
    }
}
