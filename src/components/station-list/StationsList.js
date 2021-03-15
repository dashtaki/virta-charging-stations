import { useEffect, useState } from 'react'
import StationName from './StationName'
import { useHistory } from 'react-router-dom'
import { getAllTransactions } from '../../API/api'
import Spinner from '../shared/spinner/Spinner'
import StationAvailability from '../shared/station-availability/StationAvailability'
import styled from 'styled-components'

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

export default styled(StationsList)`
    width: 40%;

    h1 {
        font-size: 3.5rem;
    }

    ul {
        padding: 0;
    }

    ul li {
        background-color: white;
        padding: 1.3rem 1rem;
        border-radius: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        cursor: pointer;
    }
`
