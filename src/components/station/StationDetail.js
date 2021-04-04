import NotExistStation from './not-exist-station/NotExistStation'
import Spinner from '../shared/spinner/Spinner'
import Position from './position/Position'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_STATION } from '../../qraphql/queries/station'
import { useLocation } from 'react-router'
import StationInfo from './station-info/StationInfo'
import StationDetailHeader from './station-detail-header/StationDetailHeader'

const StationDetail = ({ className }) => {
    const { id } = useParams()
    const { state } = useLocation()

    const { data, error, loading } = useQuery(GET_STATION, {
        variables: { id },
    })

    const renderContent = () => {
        if (loading) return <Spinner />

        if (error || !data.station) return <NotExistStation />

        if (data) {
            return (
                <div className={className}>
                    <StationDetailHeader stationDetail={data.station} />

                    <StationInfo
                        lastConnect={state?.lastConnect}
                        station={data.station}
                    />

                    <Position position={state?.position} />
                </div>
            )
        }
    }

    return renderContent()
}

export default styled(StationDetail)`
    width: 50%;
`
