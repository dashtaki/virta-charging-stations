import styled from 'styled-components';
import StationAvailability from "./station-availability";

const StyledStationAvailability = styled(StationAvailability)`
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

export default StyledStationAvailability
