// src/App.tsx
import React, { useState } from "react";
import HomePage from "./pages/HomePage";

export type DefenseEvent = {
  id: number;
  objId: string;
  type: string;
  lat: number;
  lng: number;
  timestamp: string;
  image?: string; // ✅ รูป
};

export type OffenseEvent = {
  id: number;
  lat: number;
  lng: number;
  timestamp: string;   // e.g. "15:06:08"
  altitude?: number;   // optional
  speed?: number;      // optional
};

// ✅ จุดสำคัญ (สำรอง)
export type ImportantLocation = {
  lat: number;
  lng: number;
};

const DEFAULT_IMPORTANT_LOCATION: ImportantLocation = {
  lat: 14.298527,
  lng: 101.166479,
};

function App() {
  const [defenseEvents, setDefenseEvents] = useState<DefenseEvent[]>([
    {
      id: 4,
      objId: "004",
      type: "drone",
      lat: 14.297220,
      lng: 101.167100,
      timestamp: "15:09:44",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920233.png",
    },
    {
      id: 1,
      objId: "001",
      type: "drone",
      lat: 14.2976,
      lng: 101.1663,
      timestamp: "15:06:08",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920233.png",
    },
    {
      id: 2,
      objId: "002",
      type: "drone",
      lat: 14.29812,
      lng: 101.16598,
      timestamp: "15:07:12",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920249.png",
    },
    {
      id: 3,
      objId: "003",
      type: "drone",
      lat: 14.296950,
      lng: 101.166750,
      timestamp: "15:08:21",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920233.png",
    },
    {
      id: 5,
      objId: "005",
      type: "drone",
      lat: 14.297880,
      lng: 101.166010,
      timestamp: "15:10:03",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920233.png",
    },
  ]);

  // ✅ ข้อมูลฝั่ง Offense
  const [offenseEvents] = useState<OffenseEvent[]>([
    { id: 1, lat: 14.297600, lng: 101.166300, timestamp: "15:06:08", altitude: 120.5, speed: 14.3 },
    { id: 2, lat: 14.298120, lng: 101.165980, timestamp: "15:07:12" },
    { id: 3, lat: 14.296950, lng: 101.166750, timestamp: "15:08:21", speed: 11.9 },
    { id: 4, lat: 14.297220, lng: 101.167100, timestamp: "15:09:44", altitude: 95.0 },
    { id: 5, lat: 14.297880, lng: 101.166010, timestamp: "15:10:03", altitude: 110.2, speed: 12.7 },
  ]);

  // ✅ จุดสำคัญในแผนที่ (ใช้ useState เพื่อให้ DefenseSection/Map ปรับได้)
  const [importantLocation, setImportantLocation] =
    useState<ImportantLocation>(DEFAULT_IMPORTANT_LOCATION);

  return (
    <HomePage
      defenseEvents={defenseEvents}
      setDefenseEvents={setDefenseEvents}
      offenseEvents={offenseEvents}
      importantLocation={importantLocation}
      setImportantLocation={setImportantLocation}
    />
  );
}

export default App;
