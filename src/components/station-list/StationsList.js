import Spinner from '../shared/spinner/Spinner'
import Station from './Station'
import styled from 'styled-components'
import { GET_STATIONS } from '../../qraphql/queries/getStations'
import Error from '../shared/error/Error'
import { useQuery } from '@apollo/react-hooks'
import { FixedSizeList as List } from 'react-window'

const StationsList = ({ className }) => {
    const { data, loading, error } = useQuery(GET_STATIONS)

    const Row = ({ index }) => {
        const station = data.stations[index]
        return <Station station={station} />
    }

    return (
        <>
            {loading ? (
                <Spinner />
            ) : error ? (
                <Error />
            ) : (
                <div className={className}>
                    <h1>Your stations</h1>
                    <List
                        className="stations-list__wrapper"
                        height={700}
                        itemCount={data.stations.length}
                        itemSize={30}
                        width={700}
                    >
                        {Row}
                    </List>
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
`
