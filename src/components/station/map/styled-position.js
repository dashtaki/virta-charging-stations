import styled from 'styled-components';
import Position from './position';

const StyledPosition = styled(Position)`
  background-color: white;
  margin-top: .5rem;
  position: relative;

  .map__no-position-provided {
    text-align: center;
    padding: 5rem 0;
    font-weight: 500;
  }
`

export default StyledPosition
