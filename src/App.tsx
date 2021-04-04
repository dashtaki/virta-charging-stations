import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StationsList from './components/station-list/StationsList'
import Station from './components/station/StationDetail'
import React, { ReactElement } from 'react'

const App: React.FC = (): ReactElement => {
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
