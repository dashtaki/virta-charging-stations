import React from 'react';
import {Map, Marker} from 'pigeon-maps';

const Position = (props) => {
    const {lng, lat} = props;

    return (
        !(lat && lng)
            ? <div className='map__no-position-provided'>There is no position provided!</div>
            : <Map defaultCenter={[lng, lat]} defaultZoom={13} height={400}>
                <Marker anchor={[lng, lat]} payload={1}/>
            </Map>
    );
}

export default Position;
