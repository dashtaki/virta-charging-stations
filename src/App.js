import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { StyledStationsList } from './components/station-list/styled-stations-list'
import { StyledStation } from './components/station/styled-station'

//TODO: update spinner section in readme if file structure changed
//TODO: prettier

function App() {
    return (
        <div className="main__wrapper">
            <Router>
                <Switch>
                    <Route path={'/'} exact component={StyledStationsList} />
                    <Route path={'/station/:id'} component={StyledStation} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
