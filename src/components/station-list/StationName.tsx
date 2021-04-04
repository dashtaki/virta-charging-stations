import { IStationNameProps } from '../../interfaces/components/station-list/IStationNameProps'
import React, { ReactElement } from 'react'

const StationName: React.FC<IStationNameProps> = (
  props: IStationNameProps
): ReactElement => {
  const { name } = props
  return <strong>{name}</strong>
}

export default StationName
