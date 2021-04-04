import styled from "styled-components"
import { IStationAvailability } from "../../../interfaces/components/IStationAvailability"

const StationAvailability = (props: IStationAvailability) => {
  const { className, availability } = props
  const src = availability ? "../available_icon.png" : "../offline_icon.png"
  const availabilityText = availability ? "Available" : "Offline"

  return (
    <span className={className}>
      <img
        src={src}
        className="station-availability__icon"
        alt="station availability"
      />
      <p className="station-availability__text">{availabilityText}</p>
    </span>
  )
}

export default styled(StationAvailability)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f2f2f2;
  width: 5rem;
  padding-left: 0.313rem;
  padding-top: 0.188rem;
  padding-bottom: 0.188rem;
  border-radius: 1rem;

  .station-availability__icon {
    width: 1rem;
    margin-right: 0.3rem;
  }

  .station-availability__text {
    font-size: 0.8rem;
    margin: 0;
  }
`
