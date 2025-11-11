import "./Defense.css";
import DefenseMap from "./DefenseMap";
import { useMemo } from "react";

interface DetectedObject {
  obj_id: string;
  type: string;
  lat: number;
  lng: number;
  objective: string;
  size: string;
}

function Defense() {
  const sampleObjects: DetectedObject[] = [
    {
      obj_id: "def_001",
      type: "tank",
      lat: 14.298526755889581,
      lng: 101.16647852877576,
      objective: "our",
      size: "large",
    },
    {
      obj_id: "def_002",
      type: "drone",
      lat: 14.29758,
      lng: 101.16631,
      objective: "enemy",
      size: "medium",
    },
    {
      obj_id: "def_003",
      type: "drone",
      lat: 14.29752,
      lng: 101.16622,
      objective: "our",
      size: "small",
    },
  ];

  // === ฟังก์ชันหาค่าใกล้ที่สุด ===
  const findNearestObject = (objects: DetectedObject[], targetId: string) => {
    const target = objects.find((o) => o.obj_id === targetId);
    if (!target) return null;

    let nearest = null;
    let minDist = Infinity;

    for (const obj of objects) {
      if (obj.obj_id === targetId) continue;

      const dLat = (obj.lat - target.lat) * (Math.PI / 180);
      const dLng = (obj.lng - target.lng) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(target.lat * (Math.PI / 180)) *
          Math.cos(obj.lat * (Math.PI / 180)) *
          Math.sin(dLng / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = 6371000 * c; // ระยะทางเป็นเมตร

      if (distance < minDist) {
        minDist = distance;
        nearest = { ...obj, distance };
      }
    }

    return nearest;
  };

  const nearestToDef001 = useMemo(
    () => findNearestObject(sampleObjects, "def_001"),
    []
  );

  return (
    <div className="defense-container">
      <div className="defense-row-top">
        <div className="defense-section-red">
          <DefenseMap />
        </div>

        <div className="defense-section-blue">
          <div className="blue-top">
            {nearestToDef001 ? (
              <div style={{ textAlign: "left" }}>
                <p>
                  <strong>object ที่ใกล้ที่สุด :</strong> {nearestToDef001.obj_id}
                </p>
                <p>lat: {nearestToDef001.lat.toFixed(6)}</p>
                <p>lng: {nearestToDef001.lng.toFixed(6)}</p>
                <p>
                  ระยะทางเป็นเมตร:{" "}
                  {nearestToDef001.distance.toFixed(2)} m
                </p>
              </div>
            ) : (
              <p>ไม่พบวัตถุใกล้ def_001</p>
            )}
          </div>

          <div className="blue-middle">Middle content</div>
          <div className="blue-bottom">Bottom content</div>
        </div>
      </div>
    </div>
  );
}

export default Defense;
