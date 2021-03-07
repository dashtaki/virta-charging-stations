import StationsList from './stations/stations-list';
import {Route, Switch} from 'react-router-dom'
import Station from './components/satation';
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    return <div className='main__wrapper'>
        <Router>
            <Switch>
                <Route path={"/"} exact>
                    <StationsList/>
                </Route>
                <Route path={"/station"}>
                    <Station/>
                </Route>
            </Switch>
        </Router>
    </div>;
}

export default App;
