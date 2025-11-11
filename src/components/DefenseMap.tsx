// src/components/DefenseMap.tsx
import { Box } from "@mui/material";
import MapComponent from "../components/MapComponent"; // ปรับ path ตามที่คุณเก็บจริง
import { type DetectedObject } from "../types/detection";

const DefenseMap = () => {
  // ✅ ตัวอย่างข้อมูลที่จะแสดงบนแผนที่
  const sampleObjects: DetectedObject[] = [
    {
      obj_id: "def_001",
      type: "tank",
      lat: 14.297400,
      lng: 101.166150,
      objective: "our",
      size: "large",
    },
    {
      obj_id: "def_002",
      type: "drone",
      lat: 14.297580,
      lng: 101.166310,
      objective: "enemy",
      size: "medium",
    },
    {
      obj_id: "def_003",
      type: "soldier",
      lat: 14.297520,
      lng: 101.166220,
      objective: "our",
      size: "small",
    },
  ];

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
        objects={sampleObjects}
        imagePath="/uploads/sample-defense.jpg"  // เปลี่ยน path ได้ตามจริง
        cameraLocation="defense"                 // ✅ บอกว่าเป็นกล้องฝั่ง Defense
      />
    </Box>
  );
};

export default DefenseMap;
