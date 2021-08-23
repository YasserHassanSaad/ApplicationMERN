// Importing all the needed libraries. 
import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// Importing all the needed modules. 
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import PostDetails from './components/PostDetails/PostDetails.jsx'


// Our App function logic. 
const App = () => {
    const user = JSON.parse(localStorage.getItem("profile"))

    return (
        <BrowserRouter>
            <Container maxidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
                    <Route path="/posts" exact component={Home} />
                    <Route path="/posts/search" exact component={Home} />
                    <Route path="/posts/:id" exact component={PostDetails} />
                    <Route path="/auth" exact component={() => (!user) ? <Auth /> : <Redirect to="/posts" />} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

// Exporting our needed modules. 
export default App