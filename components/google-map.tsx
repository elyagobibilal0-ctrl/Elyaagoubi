'use client';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const locations = [
  { id: 1, position: { lat: 33.589886, lng: -7.603869 }, label: "Garage Casablanca" },
  { id: 2, position: { lat: 35.759465, lng: -5.833954 }, label: "Garage Tanger" },
  { id: 3, position: { lat: 34.020882, lng: -6.841650 }, label: "Garage Rabat" }
];

export function GarageMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <div className="h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-glow">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat: 33.9716, lng: -6.8498 }}
          zoom={6}
          options={{
            disableDefaultUI: true,
            styles: [
              { elementType: "geometry", stylers: [{ color: "#0f172a" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] }
            ]
          }}
        >
          {locations.map((marker) => (
            <Marker key={marker.id} position={marker.position} title={marker.label} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
