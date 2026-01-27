import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import indiaStates from "../data/indiaStates.json";
import "leaflet/dist/leaflet.css";

const BRAND_GOLD = "#c9a24d";
const DIM = "#e6e6e6";

/* Normalize names to avoid GeoJSON inconsistencies */
const normalize = (name = "") =>
  name.toLowerCase().replace(/[\s_()-]/g, "");

const STATE_NAME_MAP = {
  Odisha: ["odisha", "orissa"],
  Jharkhand: ["jharkhand"],
  "West Bengal": ["westbengal"],
  Assam: ["assam"],
};

export default function RegionsMapLeaflet({ activeRegion }) {
  const styleFeature = (feature) => {
    const geoName = normalize(feature.properties.NAME_1);

    const isActive =
      activeRegion === "ALL"
        ? Object.values(STATE_NAME_MAP)
            .flat()
            .includes(geoName)
        : (STATE_NAME_MAP[activeRegion] || []).includes(geoName);

    return {
      fillColor: isActive ? BRAND_GOLD : DIM,
      weight: isActive ? 2.5 : 0.8,
      opacity: 1,
      color: isActive ? "#8f742f" : "#bbb",
      fillOpacity: isActive ? 0.75 : 0.35,
    };
  };

  return (
    <MapContainer
      center={[22.5, 82.8]}
      zoom={4.6}
      scrollWheelZoom={false}
      className="regions-map"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={indiaStates} style={styleFeature} />
    </MapContainer>
  );
}
