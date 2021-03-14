import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Station from './components/station/station';
import {StyledStationsList} from './components/station-list/styled-stations-list';

//TODO: remove extra file
//TODO: update spinner section in readme if file structure changed
//TODO: prettier

function App() {
    return <div className='main__wrapper'>
        <Router>
            <Switch>
                <Route path={"/"} exact component={StyledStationsList}/>
                <Route path={"/station/:id"} component={Station}/>
            </Switch>
        </Router>
    </div>;
}

export default App;
