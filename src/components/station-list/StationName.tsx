import { IStationNameProps } from "../../interfaces/components/station-list/IStationNameProps"

const StationName = (props: IStationNameProps) => {
  const { name } = props
  return <strong>{name}</strong>
}

export default StationName
