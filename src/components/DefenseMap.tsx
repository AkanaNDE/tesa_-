// src/components/DefenseMap.tsx
import { Box } from "@mui/material";
import MapComponent from "../components/MapComponent";
import type { DefenseEvent, ImportantLocation } from "../App";
import type { DetectedObject } from "../types/detection";

type Props = {
  defenseEvents: DefenseEvent[];
  importantLocation: ImportantLocation;
};

const DefenseMap: React.FC<Props> = ({ defenseEvents, importantLocation }) => {
  // ✅ 1) ปักหมุด Center (type: tank) จาก ImportantLocation
  const centerMarker: DetectedObject = {
    obj_id: "Center", // ✅ เปลี่ยนชื่อจาก def_000 เป็น Center
    type: "tank",
    lat: importantLocation.lat,
    lng: importantLocation.lng,
    size: "large",
    radius: 30, // ✅ ใหญ่กว่า 3 เท่า
  };

  // ✅ 2) เลือกข้อมูลล่าสุดของแต่ละ objId (id ไม่ซ้ำ)
  const seen = new Set<string>();
  const latestPerId: DefenseEvent[] = [];
  for (const ev of defenseEvents) {
    if (!seen.has(ev.objId)) {
      seen.add(ev.objId);
      latestPerId.push(ev);
    }
  }

  // ✅ 3) แปลงเป็น DetectedObject[]
  const droneMarkers: DetectedObject[] = latestPerId.map((ev) => ({
    obj_id: `def_${ev.objId.padStart(3, "0")}`,
    type: ev.type,        // "drone"
    lat: ev.lat,
    lng: ev.lng,
    objective: "drone",
    radius: 10, // ✅ ขนาดวงโครจรของโดรนทั่วไป
  }));

  // ✅ 4) รวมทั้งหมด (Center + Drones)
  const objects: DetectedObject[] = [centerMarker, ...droneMarkers];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        m: 0,
        p: 0,
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <MapComponent
        objects={objects}
        imagePath="/uploads/sample-defense.jpg"
        cameraLocation="defense"
      />
    </Box>
  );
};

export default DefenseMap;
