import {useState, useEffect} from 'react';
import axios from 'axios';
import StationName from './station-name';
import StationAvailability from './station-availability';
import spinner from './spinner';
import {useHistory} from 'react-router-dom';

// import 'stations-list.css';

function StationsList() {
    const [stations, setStations] = useState([]);
    const history = useHistory();
    // TODO: simulate latency
    // TODO: CSS
    // TODO: notfound page

    useEffect(() => {
        // TODO: rename
        getAll()
            .then(t => {
                // setTimeout(() => {
                setStations(t)
                // }, 3300);
            });
    }, []);

    function showStationDetail(station) {
        history.push('/station', {station});
    }


    const getTransactionsList = () => {
        return <>
            {
                stations.map((station) =>
                    <li key={station.station_ID.toString()}
                        onClick={() => showStationDetail(station)}>
                        <StationName name={station.name}/>
                        <StationAvailability availability={station.available}/>
                    </li>)
            }
        </>;
    }

    return <>
        {
            stations.length
                ? <div className='station-list__wrapper'>
                    <h1>Your stations</h1>
                    <ul>
                        {getTransactionsList()}
                    </ul>
                </div>
                : spinner()
        }
    </>
}

// TODO: error handling
// TODO: move to another file
const getAll = async () => {
    const response = await axios.get(`stations-data.json`);
    return response.data
}

export default StationsList;
