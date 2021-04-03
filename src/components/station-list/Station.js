import { useHistory } from 'react-router-dom'
import StationName from './StationName'
import StationAvailability from '../shared/station-availability/StationAvailability'
import styled from 'styled-components'

const Station = ({ className, ...props }) => {
    const { station } = props
    const history = useHistory()

    const showStationDetail = (station) => {
        history.push(`/station/${station.station_ID}`, {
            lastConnect: station.lastconnect,
            position: station.position,
        })
    }

    return (
        <>
            {
                <li
                    className={className}
                    onClick={() => showStationDetail(station)}
                >
                    <StationName name={station.name} />
                    <StationAvailability availability={station.available} />
                </li>
            }
        </>
    )
}

export default styled(Station)`
    background-color: white;
    padding: 1.3rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;
`
