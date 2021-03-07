import {useEffect, useState} from 'react';
import StationName from './station-name';
import StationAvailability from './station-availability';
import spinner from './spinner';
import {useHistory} from 'react-router-dom';
import {getAllTransactions} from '../API/api';

const StationsList = () => {
    const [stations, setStations] = useState([]);
    const history = useHistory();
    const simulateLatency = false;

    useEffect(() => {
        getAllTransactions()
            .then(stationsResponse => {
                setTimeout(() => {
                    setStations(stationsResponse)
                }, simulateLatency ? 2500 : 0);
            })
            .catch((error) => {
                throw error;
            });
    }, [simulateLatency]);

    const showStationDetail = (station) => {
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

export default StationsList;
