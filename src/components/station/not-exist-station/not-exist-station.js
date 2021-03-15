import { Link } from 'react-router-dom'

const NotExistStation = ({ className }) => {
    return (
        <div className={className}>
            <img src="../../not-found-img.jpg" alt="station not found" />
            <h2 className="not-exist__title">
                Opps! Station does not exist. See the stations list{' '}
                <Link to="/">Here!</Link>
            </h2>
        </div>
    )
}

export default NotExistStation
