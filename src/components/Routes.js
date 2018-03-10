import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './Home'
import Post from './Articles/News/Post'
import VideoArticle from './Articles/Videos/VideoArticle'
import NewsMain from './Articles/News/Main'
import VideosMain from './Articles/Videos/Main'


const Routes = () =>
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/news' component={NewsMain} />
            <Route exact path='/videos' component={VideosMain} />
            <Route exact path='/articles/:id' component={Post} />
            <Route exact path='/videos/:id' component={VideoArticle} />
        </Switch>
    </Layout>
export default Routes