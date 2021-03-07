const StationAvailability = (props) => {
    const {availability} = props;
    return <span className='station-availability'>
                <img src={availability ? './available_icon.png' : './offline_icon.png'}
                     className='station-availability__icon'
                     alt="station availability"/>
                <p className='station-availability__text'>{availability ? 'Available' : 'Offline'}</p>
            </span>;
}

export default StationAvailability;
