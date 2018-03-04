import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './Home'

const Routes = () =>
<Layout>
    <Switch>
        <Route exact path='/' component={Home}/>
    </Switch>
    </Layout>
export default Routes