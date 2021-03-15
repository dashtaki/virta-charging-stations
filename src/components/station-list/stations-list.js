import { useEffect, useState } from 'react'
import StationName from './station-name'
import { useHistory } from 'react-router-dom'
import { getAllTransactions } from '../../API/api'
import StyledSpinner from '../shared/spinner/styled-spinner'
import StyledStationAvailability from '../shared/station-availability/styled-station-avaialbility'

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
                        <StyledStationAvailability
                            availability={station.available}
                        />
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
                <StyledSpinner />
            )}
        </>
    )
}

export default StationsList
