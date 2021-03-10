import React from 'react';
import {Map, Marker} from 'pigeon-maps';

const Position = (props) => {
    const {lng, lat} = props;

    const mapTilerProvider = (x, y, z) => {
        const convertedString = String.fromCharCode(97 + ((x + y + z) % 3))
        return `https://${convertedString}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
    }

    return (
        !(lat || lng)
            ? <div className='map__no-position-provided'>There is no position provided!</div>
            : <Map defaultCenter={[lng, lat]} defaultZoom={16} height={400} provider={mapTilerProvider}>
                <Marker anchor={[lng, lat]} payload={1}/>
            </Map>
    );
}

export default Position;
