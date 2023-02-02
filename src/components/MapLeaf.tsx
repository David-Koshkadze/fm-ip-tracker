import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapLeaf({ latitude, longitude }: any) {
  return (
    <div className="w-full h-screen">
      <MapContainer
        center={{
          lat: latitude || 51.505,
          lng: longitude || -0.09,
        }}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={{
            lat: latitude || 51.505,
            lng: longitude || -0.09,
          }}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
