import './App.css';
import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Banner, ListSelector, Statusbar, Workspace } from './components'
/*
    This is our application's top-level component.
    
    @author McKilla Gorilla
*/
const App = () => {
    return (
        <Router>
            <Banner />
            <Switch>
                <Route path="/" exact component={ListSelector} />
                <Route path="/top5list/:id" exact component={Workspace} />
            </Switch>
            <Statusbar />
        </Router>
    )
}

export default App