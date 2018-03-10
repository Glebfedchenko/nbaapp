import React, { Component } from 'react'
import NewsSlider from './widgets/newsSlider/NewsSlider'
import NewsList from './widgets/newsList/NewsList'
import VideosList from './widgets/videosList/VideosList'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NewsSlider
                    type='featured'
                    start={6}
                    end={10}
                    settings={{
                        dots: false
                    }}
                />
                <NewsList
                    type='card'
                    load={true}
                    start={0}
                    amount={3}
                />
                <VideosList
                    type='card'
                    title={true}
                    loadmore={true}
                    start={0}
                    amount={3}
                />
            </div>
        )
    }
}
