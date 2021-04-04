import { TrueFalse } from "../types/true-false"

export interface IStationDetail {
  station_ID: number
  custom_evse_id: number
  station_type_ID: number
  location_ID: number
  seller_ID: number
  inuse: TrueFalse
  connected: TrueFalse
  disabled: TrueFalse
  available: TrueFalse
  types: string[]
  name: string
  onetimepayment: TrueFalse
  connector_info: IConnectorInfo[]
  error: string
  currency: string
  free_usage: TrueFalse
}

interface IConnectorInfo {
  connector_id: number
  current_type: string
  status: string
  type: string
}
