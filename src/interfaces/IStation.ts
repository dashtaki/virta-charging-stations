import { TrueFalse } from "../types/true-false"

export interface IStation {
  available: TrueFalse
  connected: TrueFalse
  custom_evse_id: number
  lastconnect: string
  location_ID: number
  name: string
  position: string
  roaming_identifier_cpo: string
  seller_ID: number
  station_ID: number
}
