import NotExistStation from './not-exist-station/NotExistStation'
import Spinner from '../shared/spinner/Spinner'
import StationAvailability from '../shared/station-availability/StationAvailability'
import Position from './position/Position'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_STATION } from '../../qraphql/queries/station'
import { useLocation } from 'react-router'

const StationDetail = ({ className, ...props }) => {
    const { id } = useParams()
    const {
        state: { lastConnect, position },
    } = useLocation()
    const { data, error, loading } = useQuery(GET_STATION, {
        variables: { id },
    })

    const formatDate = (date) => new Date(date).toLocaleString()

    const backToList = () => props.history.push('/')

    const renderContent = () => {
        if (loading) return <Spinner />

        if (error) return <NotExistStation />

        if (data) {
            return (
                <div className={className}>
                    <div className="station-detail__header">
                        <img
                            src="../backButton_icon.png"
                            className="back-button"
                            alt="back to stations list"
                            onClick={backToList}
                        />
                        <div className="station-detail__name__wrapper">
                            <h1 className="station-detail__name">
                                {data.station.name}
                            </h1>
                            {data.station.error && (
                                <small className="station__error">
                                    {data.station.error}
                                </small>
                            )}
                        </div>
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
                            <span className="station-detail__label">
                                Currency
                            </span>
                            <span className="station-detail__label">
                                Free usage
                            </span>
                        </div>
                        <div>
                            <span className="station-detail__value">
                                <StationAvailability
                                    availability={data.station.available}
                                />
                            </span>
                            <span className="station-detail__value">
                                {formatDate(lastConnect)}
                            </span>
                            <span className="station-detail__value">
                                {data.station.connected ? 'Yes' : 'No'}
                            </span>
                            <span className="station-detail__value">
                                {data.station.currency}
                            </span>
                            <span className="station-detail__value">
                                {data.station.free_usage ? 'Yes' : 'No'}
                            </span>
                        </div>
                    </div>

                    <Position position={position} />
                </div>
            )
        }
    }

    return renderContent()
}

export default styled(StationDetail)`
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

    .station-detail__name__wrapper {
        margin-bottom: 1.5rem;
        margin-top: 1.5rem;
    }

    .station__error {
        padding: 4px 1rem;
        background: red;
        border-radius: 16px;
        color: white;
        margin-top: 0.5rem;
    }

    .station-detail {
        background-color: white;
        padding: 1rem;
        border-radius: 0.375rem;
    }

    .station-detail__name {
        font-size: 2.5rem;
        margin: 0 0 0.4rem 0;
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
        width: 20%;
        justify-content: center;
        align-items: center;
    }
`
