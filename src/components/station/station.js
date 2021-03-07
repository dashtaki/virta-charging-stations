import {useHistory, useLocation} from 'react-router-dom';
import StationAvailability from '../shared/station-availability';
import Position from './position';

const Station = () => {
    const location = useLocation();
    const history = useHistory();
    const {name, available, lastconnect, position, connected} = location.state.station;
    const {lang, lat} = retrieveGeoLocation();

    function retrieveGeoLocation() {
        const geoLocations = position.split(',');
        const lang = geoLocations[0];
        const lat = geoLocations[1];
        return {lang, lat};
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleString();
    }

    const backToList = () => {
        history.goBack();
    }

    return (
        <div className='station-detail__wrapper'>
            <div className='station-detail__header'>
                <img src="./backButton_icon.png" className='back-button' alt="back to stations list"
                     onClick={backToList}/>
                <h1 className='station-detail__name'>{name}</h1>
            </div>

            <div className='station-detail'>
                <div>
                    <span className='station-detail__label'>Availability</span>
                    <span className='station-detail__label'>Last connect</span>
                    <span className='station-detail__label'>Is connected</span>
                </div>
                <div>
                    <span className='station-detail__value'><StationAvailability availability={available}/></span>
                    <span className='station-detail__value'>{formatDate(lastconnect)}</span>
                    <span className='station-detail__value'>{connected ? 'Yes' : 'No'}</span>
                </div>
            </div>

            <div className='station-detail__map'>
                <Position lng={lang} lat={lat}/>
            </div>
        </div>
    )
}

export default Station;
