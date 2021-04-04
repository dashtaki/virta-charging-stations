import gql from "graphql-tag"
import { DocumentNode } from "graphql"

export const GET_STATIONS: DocumentNode = gql`
  query {
    stations @rest(type: "Station", path: "/stations") {
      station_ID
      available
      name
      lastconnect
      position
    }
  }
`
