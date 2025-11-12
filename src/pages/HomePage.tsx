// src/pages/HomePage.tsx
import React from "react";
import "../components/HomePage.css";
import OffenseSection from "../components/OffenseSection";
import MapSection from "../components/MapSection";
import DefenseSection from "../components/DefenseSection";
import type { DefenseEvent, OffenseEvent, ImportantLocation } from "../App";

type HomePageProps = {
  defenseEvents: DefenseEvent[];
  setDefenseEvents: React.Dispatch<React.SetStateAction<DefenseEvent[]>>;
  offenseEvents: OffenseEvent[];
  importantLocation: ImportantLocation;
  setImportantLocation: React.Dispatch<React.SetStateAction<ImportantLocation>>;
};

const HomePage: React.FC<HomePageProps> = ({
  defenseEvents,
  setDefenseEvents,
  offenseEvents,
  importantLocation,
  setImportantLocation,
}) => {
  return (
    <main className="layout-3col" role="main">
      <section className="col-left">
        <OffenseSection events={offenseEvents} />
      </section>

      <section className="col-center">
        <MapSection
          defenseEvents={defenseEvents}
          offenseEvents={offenseEvents}          
          importantLocation={importantLocation}   
        />
      </section>

      <section className="col-right">
        <DefenseSection
          events={defenseEvents}
          setEvents={setDefenseEvents}
          importantLocation={importantLocation}
          setImportantLocation={setImportantLocation}
        />
      </section>
    </main>
  );
};

export default HomePage;
