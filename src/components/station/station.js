import StationAvailability from '../shared/station-availability';
import Position from './position';
import {useEffect, useState} from 'react';
import {getAllTransactions} from '../../API/api';
import Spinner from '../shared/spinner';
import {Link} from "react-router-dom";
import {retrieveGeoLocation} from "../../helpers/geo-location";

const Station = (props) => {
    const [station, setStation] = useState({});
    const {id} = props.match.params;

    useEffect(() => {
        const fetchStationDetail = (setSerializedStation) => {
            getAllTransactions()
                .then(stationsResponse => {
                    const searchedStation = stationsResponse.find(station => station.station_ID === Number(id));
                    searchedStation ? setSerializedStation(searchedStation) : setStation(null)
                })
                .catch((error) => {
                    throw error
                });
        }

        const setSerializedStation = (passedStation) => {
            const {position} = passedStation;
            const {lng, lat} = retrieveGeoLocation(position);
            const selectedStation = {...passedStation, lng, lat};
            setStation(selectedStation);
        }

        if (props.location.state) {
            const passedStation = props.location.state.station;
            setSerializedStation(passedStation);
            return;
        }

        fetchStationDetail(setSerializedStation);
    }, [])

    const formatDate = (date) => {
        return new Date(date).toLocaleString();
    }

    const backToList = () => {
        /**
         * Use 'push' instead of go back to work properly
         * even when you open a specific station in address bar directly
         */
        props.history.push('/');
    }

    const renderContent = () => {
        if (!station) {
            return <div className="not-exist__wrapper">
                <img src="../not-found-img.jpg" alt="station not found"/>
                <h2 className="not-exist__title"> Opps! Station does not exist. See the stations list <Link
                    to="/">Here!</Link></h2>
            </div>
        }

        if (station === {}) {
            return <Spinner/>
        }

        if (station !== {}) {
            return <div className='station-detail__wrapper'>
                <div className='station-detail__header'>
                    <img src="../backButton_icon.png" className='back-button' alt="back to stations list"
                         onClick={backToList}/>
                    <h1 className='station-detail__name'>{station.name}</h1>
                </div>

                <div className='station-detail'>
                    <div>
                        <span className='station-detail__label'>Availability</span>
                        <span className='station-detail__label'>Last connect</span>
                        <span className='station-detail__label'>Is connected</span>
                    </div>
                    <div>
                    <span className='station-detail__value'><StationAvailability
                        availability={station.available}/></span>
                        <span className='station-detail__value'>{formatDate(station.lastconnect)}</span>
                        <span className='station-detail__value'>{station.connected ? 'Yes' : 'No'}</span>
                    </div>
                </div>

                <div className='station-detail__map'>
                    <Position lng={station.lng} lat={station.lat}/>
                </div>
            </div>
        }
    }

    return <>
        {
            renderContent()
        }
    </>

}

export default Station;
