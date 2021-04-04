import { useHistory } from "react-router-dom"
import StationName from "./StationName"
import StationAvailability from "../shared/station-availability/StationAvailability"
import styled from "styled-components"
import { IStationProps } from "../../interfaces/components/station-list/IStationProps"
import { IStation } from "../../interfaces/IStation"
import { IStationDetailLocation } from "../../interfaces/components/station/IStationDetailLocation"

const Station = (props: IStationProps) => {
  const { station, className } = props
  const history = useHistory()

  const showStationDetail = (station: IStation) => {
    const state: IStationDetailLocation = {
      lastConnect: station.lastconnect,
      position: station.position,
    }
    history.push(`/station/${station.station_ID}`, state)
  }

  return (
    <>
      {
        <div className={className} onClick={() => showStationDetail(station)}>
          <StationName name={station.name} />
          <StationAvailability availability={station.available} />
        </div>
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
