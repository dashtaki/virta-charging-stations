import gql from 'graphql-tag'

export const GET_STATIONS = gql`
    query {
        stations @rest(type: "Station", path: "/stations") {
            station_ID
            available
            name
        }
    }
`
