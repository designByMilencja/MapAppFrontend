import React from "react";
import './Map.css';
import '../../utils/fix-map-icon'
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
export const Map = () => {
    return <div className="map">
        <MapContainer center ={[50.2657152,18.9945008]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
            />
            <Marker position={[50.2657152,18.9945008]}>
                <Popup>
                    <h2>opis</h2>
                </Popup>
            </Marker>
        </MapContainer>
    </div>
}

