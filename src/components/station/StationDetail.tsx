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
import { IStationDetailProps } from '../../interfaces/components/station/IStationDetailProps'
import { IStationDetailLocation } from '../../interfaces/components/station/IStationDetailLocation'
import { IStationDetailParams } from '../../interfaces/components/station/IStationDetailParams'
import React, { ReactElement } from 'react'

const StationDetail: React.FC<IStationDetailProps> = (
  props: IStationDetailProps
): ReactElement => {
  const { className } = props
  const { id } = useParams<IStationDetailParams>()
  const { state } = useLocation<IStationDetailLocation>()

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

    return <div>lk</div>
  }

  return renderContent()
}

export default styled(StationDetail)`
  width: 50%;
`
