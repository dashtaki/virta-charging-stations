import StationsList from './components/station-list/stations-list';
import {Route, Switch} from 'react-router-dom'
import Station from './components/station/station';
import {BrowserRouter as Router} from 'react-router-dom';

//TODO: remove extra file
//TODO: test
//TODO: update spinner section in readme if file structure changed
//TODO: prettier

function App() {
    return <div className='main__wrapper'>
        <Router>
            <Switch>
                <Route path={"/"} exact component={StationsList}/>
                <Route path={"/station/:id"} component={Station}/>
            </Switch>
        </Router>
    </div>;
}

export default App;
