import { useEffect, useState } from 'react'
import { getAllTransactions } from '../../API/API'
import { retrieveGeoLocation } from '../../helpers/geoLocation'
import NotExistStation from './not-exist-station/NotExistStation'
import Spinner from '../shared/spinner/Spinner'
import StationAvailability from '../shared/station-availability/StationAvailability'
import Position from './position/Position'
import styled from 'styled-components'

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
         * Use 'push' instead of goBack() to work properly
         * even when you open a specific station in address bar directly
         */
        props.history.push('/')
    }

    const renderContent = () => {
        if (!station) {
            return <NotExistStation />
        }

        if (station === {}) {
            return <Spinner />
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
                                <StationAvailability
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

export default styled(Station)`
    width: 50%;

    .back-button {
        width: 4rem;
        margin-right: 2rem;
        cursor: pointer;
    }

    .station-detail__header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .station-detail {
        background-color: white;
        padding: 1rem;
        border-radius: 0.375rem;
    }

    .station-detail__name {
        font-size: 2.5rem;
    }

    .station-detail .station-detail__label {
        color: #5f5f5f;
        margin-bottom: 1.5rem;
    }

    .station-detail .station-detail__value {
        font-weight: 500;
    }

    .station-detail .station-detail__label,
    .station-detail .station-detail__value {
        display: inline-flex;
        width: 33.333%;
        justify-content: center;
        align-items: center;
    }
`
