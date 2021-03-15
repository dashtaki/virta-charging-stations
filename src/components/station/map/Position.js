import React from 'react'
import { Map, Marker } from 'pigeon-maps'
import styled from 'styled-components'

const Position = ({ className, ...props }) => {
    const { lng, lat } = props

    const mapTilerProvider = (x, y, z) => {
        const convertedString = String.fromCharCode(97 + ((x + y + z) % 3))
        return `https://${convertedString}.tile.openstreetmap.org/${z}/${x}/${y}.png`
    }

    return (
        <div className={className}>
            {!lat || !lng ? (
                <div className="map__no-position-provided">
                    There is no position provided!
                </div>
            ) : (
                <Map
                    defaultCenter={[lng, lat]}
                    defaultZoom={16}
                    height={400}
                    provider={mapTilerProvider}
                >
                    <Marker anchor={[lng, lat]} payload={1} />
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
