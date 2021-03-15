import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

export default styled(NotExistStation)`
    text-align: center;

    img {
        width: 37%;
        border-radius: 2%;
    }

    .not-exist__title {
        padding-top: 1rem;
        font-weight: 500;
    }
`
