import React, { Component } from 'react'
import NewsSlider from '../../widgets/newsSlider/NewsSlider'
import NewsList from '../../widgets/newsList/NewsList'


export default class NewsMain extends Component {
    render() {
        return (
            <div>
                <NewsSlider
                    type='featured'
                    settings={{ dots: false }}
                    start={1}
                    amount={3} />
                <NewsList 
                    type='card'
                    loadMore={true}
                    start={3}
                    amount={10}/>
            </div>
        )
    }
}
