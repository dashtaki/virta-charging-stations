import gql from 'graphql-tag'
import { DocumentNode } from 'graphql'

export const GET_STATION: DocumentNode = gql`
  query {
    station(id: $id) @rest(type: "Station", path: "/stations/{args.id}") {
      station_ID
      custom_evse_id
      station_type_ID
      location_ID
      seller_ID
      inuse
      connected
      disabled
      available
      types
      name
      free_usage
      onetimepayment
      connector_info
      error
      currency
    }
  }
`
