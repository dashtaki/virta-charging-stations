const StationAvailability = (props) => {
    const {availability} = props;
    const src = availability ? './available_icon.png' : './offline_icon.png';
    const availabilityText = availability ? 'Available' : 'Offline';

    return <span className='station-availability'>
                <img src={src}
                     className='station-availability__icon'
                     alt="station availability"/>
                <p className='station-availability__text'>{availabilityText}</p>
            </span>;
}

export default StationAvailability;
