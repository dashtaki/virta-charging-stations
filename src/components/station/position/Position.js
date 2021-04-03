import React, { useEffect, useState } from 'react'
import { Map, Marker } from 'pigeon-maps'
import styled from 'styled-components'
import { retrieveGeoLocation } from '../../../helpers/geoLocation'

const Position = ({ className, ...props }) => {
    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()
    const { position } = props

    useEffect(() => {
        const { lon, lat } = retrieveGeoLocation(position)
        setLatitude(lat)
        setLongitude(lon)
    }, [position])

    const mapTilerProvider = (x, y, z) => {
        const convertedString = String.fromCharCode(97 + ((x + y + z) % 3))
        return `https://${convertedString}.tile.openstreetmap.org/${z}/${x}/${y}.png`
    }

    return (
        <div className={className}>
            {!latitude || !longitude ? (
                <div className="map__no-position-provided">
                    There is no position provided!
                </div>
            ) : (
                <Map
                    defaultCenter={[longitude, latitude]}
                    defaultZoom={16}
                    height={400}
                    provider={mapTilerProvider}
                >
                    <Marker anchor={[longitude, latitude]} payload={1} />
                </Map>
            )}
        </div>
    )
}

export default styled(Position)`
    background-color: white;
    margin-top: 0.5rem;
    position: relative;

    .map__no-position-provided {
        text-align: center;
        padding: 5rem 0;
        font-weight: 500;
    }
`
