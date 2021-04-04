import styled from "styled-components"
import StationAvailability from "../../shared/station-availability/StationAvailability"
import { IStationInfoProps } from "../../../interfaces/components/station/IStationInfoProps"
import React, { ReactElement } from "react"

const StationInfo: React.FC<IStationInfoProps> = (
  props: IStationInfoProps
): ReactElement => {
  const { station, lastConnect, className } = props

  const formatDate = (date: string): string => {
    if (!date) return "No date"
    return new Date(date).toLocaleString()
  }

  return (
    <div className={className}>
      <div>
        <span className="station-detail__label">Availability</span>
        <span className="station-detail__label">Last connect</span>
        <span className="station-detail__label">Is connected</span>
        <span className="station-detail__label">Currency</span>
        <span className="station-detail__label">Free usage </span>
      </div>
      <div>
        <span className="station-detail__value">
          <StationAvailability availability={station.available} />
        </span>
        <span className="station-detail__value">{formatDate(lastConnect)}</span>
        <span className="station-detail__value">
          {station.connected ? "Yes" : "No"}
        </span>
        <span className="station-detail__value">{station.currency}</span>
        <span className="station-detail__value">
          {station.free_usage ? "Yes" : "No"}
        </span>
      </div>
    </div>
  )
}

export default styled(StationInfo)`
  background-color: white;
  padding: 1rem;
  border-radius: 0.375rem;

  .station-detail__label {
    color: #5f5f5f;
    margin-bottom: 1.5rem;
  }

  .station-detail__value {
    font-weight: 500;
  }

  .station-detail__label,
  .station-detail__value {
    display: inline-flex;
    width: 20%;
    justify-content: center;
    align-items: center;
  }
`
