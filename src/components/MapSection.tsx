// src/components/MapSection.tsx
import React from "react";
import "./map-section.css";
import DefenseMap from "./DefenseMap";
import OffenseMap from "./OffenseMap";
import type { DefenseEvent, OffenseEvent, ImportantLocation } from "../App";

type MapSectionProps = {
  defenseEvents: DefenseEvent[];
  offenseEvents: OffenseEvent[];               
  importantLocation: ImportantLocation;
};

const MapSection: React.FC<MapSectionProps> = ({
  defenseEvents,
  offenseEvents,
  importantLocation,
}) => {
  return (
    <section className="map-section">
      <div className="offense-map">
        <OffenseMap
          offenseEvents={offenseEvents}
          importantLocation={importantLocation}
        />
      </div>
      <div className="defense-map">
        <DefenseMap
          defenseEvents={defenseEvents}
          importantLocation={importantLocation}
        />
      </div>
    </section>
  );
};

export default MapSection;
