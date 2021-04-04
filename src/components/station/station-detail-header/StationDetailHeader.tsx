import styled from 'styled-components'
import { useHistory } from 'react-router'
import { IStationDetailHeaderProps } from '../../../interfaces/components/station/IStationDetailHeaderProps'
import React, { ReactElement } from 'react'

const StationDetailHeader: React.FC<IStationDetailHeaderProps> = (
  props: IStationDetailHeaderProps
): ReactElement => {
  const { stationDetail, className } = props
  let history = useHistory<Location>()

  const backToList = () => history.push('/')

  return (
    <div className={className}>
      <img
        src="../backButton_icon.png"
        className="back-button"
        alt="back to stations list"
        onClick={backToList}
      />
      <div className="station-detail__name__wrapper">
        <h1 className="station-detail__name">{stationDetail.name}</h1>
        {stationDetail.error && (
          <small className="station__error">{stationDetail.error}</small>
        )}
      </div>
    </div>
  )
}

export default styled(StationDetailHeader)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .back-button {
    width: 4rem;
    margin-right: 2rem;
    cursor: pointer;
  }

  .station-detail__name__wrapper {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  .station-detail__name {
    font-size: 2.5rem;
    margin: 0 0 0.4rem 0;
  }

  .station__error {
    padding: 4px 1rem;
    background: red;
    border-radius: 16px;
    color: white;
    margin-top: 0.5rem;
  }
`
