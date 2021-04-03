import Spinner from '../shared/spinner/Spinner'
import Station from './Station'
import styled from 'styled-components'
import { GET_STATIONS } from '../../qraphql/queries/getStations'
import Error from '../shared/error/Error'
import { useQuery } from '@apollo/react-hooks'

const StationsList = ({ className }) => {
    const { data, loading, error } = useQuery(GET_STATIONS)

    return (
        <>
            {loading ? (
                <Spinner />
            ) : error ? (
                <Error />
            ) : (
                <div className={className}>
                    <h1>Your stations</h1>
                    <ul>
                        {data.stations.map((stationInfo) => (
                            <Station
                                key={stationInfo.station_ID}
                                station={stationInfo}
                            />
                        ))}
                    </ul>
                </div>
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
`
