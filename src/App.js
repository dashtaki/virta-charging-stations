import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StationsList from './components/station-list/StationsList'
import Station from './components/station/Station'

function App() {
    return (
        <div className="main__wrapper">
            <Router>
                <Switch>
                    <Route path={'/'} exact component={StationsList} />
                    <Route path={'/station/:id'} component={Station} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
