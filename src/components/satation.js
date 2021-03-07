import {useLocation} from 'react-router-dom';
import StationAvailability from "../stations/station-availability";

const Station = () => {
    const location = useLocation();
    const {name, available, lastconnect, position, connected} = location.state.station;

    return (
        <div className='station-detail__wrapper'>
            <div className='station-detail__header'>
                <img src="./backButton_icon.png" className='back-button' alt="back to stations list"/>
                <h1>{name}</h1>
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
                map
            </div>
        </div>
    )
}

const formatDate = (date) => {
    return new Date(date).toLocaleString();
}

export default Station;
