import styled from 'styled-components';
import StationsList from './stations-list';

export const StyledStationsList = styled(StationsList)`
  width: 40%;

  h1 {
    font-size: 3.5rem;
  }

  ul {
    padding: 0;
  }

  ul li {
    background-color: white;
    padding: 1.3rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  ul li .station-name {
    font-weight: bold;
  }
`
