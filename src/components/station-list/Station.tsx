import { useHistory } from 'react-router-dom'
import StationName from './StationName'
import StationAvailability from '../shared/station-availability/StationAvailability'
import styled from 'styled-components'
import { IStationProps } from '../../interfaces/components/station-list/IStationProps'
import { IStation } from '../../interfaces/IStation'
import { IStationDetailLocation } from '../../interfaces/components/station/IStationDetailLocation'
import React, { ReactElement } from 'react'

const Station: React.FC<IStationProps> = (
  props: IStationProps
): ReactElement => {
  const { station, className, style, scrolling } = props
  const history = useHistory()

  const showStationDetail = (station: IStation): void => {
    const state: IStationDetailLocation = {
      lastConnect: station.lastconnect,
      position: station.position,
    }
    history.push(`/station/${station.station_ID}`, state)
  }

  return (
    <>
      {
        <div
          className={className}
          style={style}
          onClick={() => showStationDetail(station)}
        >
          {scrolling ? (
            <img
              className="station__item--spinner"
              src="./small-spinner.gif"
              alt="station item spinner"
            />
          ) : (
            <div className="station__item">
              <StationName name={station.name} />
              <StationAvailability availability={station.available} />
            </div>
          )}
        </div>
      }
    </>
  )
}

export default styled(Station)`
  .station__item {
    background-color: white;
    padding: 1.3rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .station__item--spinner {
    width: 50px;
    height: 50px;
    margin-left: 45%;
  }
`
