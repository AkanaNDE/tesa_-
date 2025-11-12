// src/pages/HomePage.tsx
import React from "react";
import "../components/HomePage.css";
import OffenseSection from "../components/OffenseSection";
import MapSection from "../components/MapSection";
import DefenseSection from "../components/DefenseSection";
import type { DefenseEvent } from "../App";

type HomePageProps = {
  defenseEvents: DefenseEvent[];
  setDefenseEvents: React.Dispatch<React.SetStateAction<DefenseEvent[]>>;
};

const HomePage: React.FC<HomePageProps> = ({ defenseEvents, setDefenseEvents }) => {
  return (
    <main className="layout-3col" role="main">
      <section className="col-left">
        <OffenseSection />
      </section>

      <section className="col-center">
        <MapSection />
      </section>

      <section className="col-right">
        <DefenseSection events={defenseEvents} setEvents={setDefenseEvents} />
      </section>
    </main>
  );
};

export default HomePage;
