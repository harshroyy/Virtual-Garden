import React from 'react';
import { LoadScript, GoogleMap, StreetViewPanorama } from '@react-google-maps/api';

const StreetView = () => {
    const center = {
        lat: 40.748817, // Example: coordinates for the Empire State Building
        lng: -73.985428,
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100vh' }}
                center={center}
                zoom={14}
                
            >
                <StreetViewPanorama
                    options={{
                        position: center,
                        pov: { heading: 34, pitch: 10 },
                    }}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default StreetView;

