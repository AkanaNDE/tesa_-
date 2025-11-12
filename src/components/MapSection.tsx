// ../components/MapSection.tsx
import React from "react";
import "./map-section.css";
import DefenseMap from "./DefenseMap"; 
import OffenseMap from "./OffenseMap"; 


const MapSection: React.FC = () => {
  return (
    <section className="map-section">
      <div className="offense-map">
        <OffenseMap />
      </div>
      <div className="defense-map">
        <DefenseMap />
      </div>
    </section>
  );
};

export default MapSection;
