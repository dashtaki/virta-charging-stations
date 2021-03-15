import { useEffect, useState } from 'react'
import StationName from './StationName'
import { useHistory } from 'react-router-dom'
import { getAllTransactions } from '../../API/api'
import Spinner from '../shared/spinner/Spinner'
import StationAvailability from '../shared/station-availability/StationAvailability'

const StationsList = ({ className }) => {
    const [stations, setStations] = useState([])
    const history = useHistory()
    const simulateLatency = false

    useEffect(() => {
        getAllTransactions()
            .then((stationsResponse) => {
                setTimeout(
                    () => setStations(stationsResponse.data),
                    simulateLatency ? 2500 : 0
                )
            })
            .catch((error) => {
                throw error
            })
    }, [simulateLatency])

    const showStationDetail = (station) => {
        history.push(`/station/${station.station_ID}`, { station })
    }

    const getTransactionsList = () => {
        return (
            <>
                {stations.map((station) => (
                    <li
                        key={station.station_ID.toString()}
                        onClick={() => showStationDetail(station)}
                    >
                        <StationName name={station.name} />
                        <StationAvailability availability={station.available} />
                    </li>
                ))}
            </>
        )
    }

    return (
        <>
            {stations.length ? (
                <div className={className}>
                    <h1>Your stations</h1>
                    <ul>{getTransactionsList()}</ul>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default StationsList
