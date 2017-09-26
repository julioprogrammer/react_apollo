import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LinkList from './components/LinkList'
import CreateLink from './components/CreateLink'
import Login from './components/Login'

export default () => (
  <Switch>
    <Route exact path='/' component={LinkList}/>
    <Route exact path='/create' component={CreateLink}/>
    <Route exact path='/login' component={Login}/>
  </Switch>
)
