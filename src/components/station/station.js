import { useEffect, useState } from 'react'
import { getAllTransactions } from '../../API/api'
import { retrieveGeoLocation } from '../../helpers/geo-location'
import NotExistStation from './not-exist-station/NotExistStation'
import StyledSpinner from '../shared/spinner/styled-spinner'
import StyledStationAvailability from '../shared/station-availability/styled-station-avaialbility'
import Position from './position/Position'

const Station = ({ className, ...props }) => {
    const [station, setStation] = useState({})
    const { id } = props.match.params

    useEffect(() => {
        const fetchStationDetail = (setSerializedStation) => {
            getAllTransactions()
                .then((stationsResponse) => {
                    const { data } = stationsResponse
                    const searchedStation = data.find(
                        (station) => station.station_ID === Number(id)
                    )
                    searchedStation
                        ? setSerializedStation(searchedStation)
                        : setStation(null)
                })
                .catch((error) => {
                    throw error
                })
        }

        const setSerializedStation = (passedStation) => {
            const { position } = passedStation
            const { lng, lat } = retrieveGeoLocation(position)
            const selectedStation = { ...passedStation, lng, lat }
            setStation(selectedStation)
        }

        if (props.location.state) {
            const passedStation = props.location.state.station
            setSerializedStation(passedStation)
            return
        }

        fetchStationDetail(setSerializedStation)
    }, [])

    const formatDate = (date) => {
        return new Date(date).toLocaleString()
    }

    const backToList = () => {
        /**
         * Use 'push' instead of go back to work properly
         * even when you open a specific station in address bar directly
         */
        props.history.push('/')
    }

    const renderContent = () => {
        if (!station) {
            return <NotExistStation />
        }

        if (station === {}) {
            return <StyledSpinner />
        }

        if (station !== {}) {
            return (
                <div className={className}>
                    <div className="station-detail__header">
                        <img
                            src="../backButton_icon.png"
                            className="back-button"
                            alt="back to stations list"
                            onClick={backToList}
                        />
                        <h1 className="station-detail__name">{station.name}</h1>
                    </div>

                    <div className="station-detail">
                        <div>
                            <span className="station-detail__label">
                                Availability
                            </span>
                            <span className="station-detail__label">
                                Last connect
                            </span>
                            <span className="station-detail__label">
                                Is connected
                            </span>
                        </div>
                        <div>
                            <span className="station-detail__value">
                                <StyledStationAvailability
                                    availability={station.available}
                                />
                            </span>
                            <span className="station-detail__value">
                                {formatDate(station.lastconnect)}
                            </span>
                            <span className="station-detail__value">
                                {station.connected ? 'Yes' : 'No'}
                            </span>
                        </div>
                    </div>

                    <Position lng={station.lng} lat={station.lat} />
                </div>
            )
        }
    }

    return renderContent()
}

export default Station
