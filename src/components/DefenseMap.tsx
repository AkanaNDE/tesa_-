import { Box } from "@mui/material";
import MapComponent from "../components/MapComponent"; // ปรับ path ตามที่คุณเก็บจริง
import { type DetectedObject } from "../types/detection";

const DefenseMap = () => {
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
      lat: 14.297580,
      lng: 101.166310,
      objective: "enemy",
      size: "medium",
    },
    {
      obj_id: "def_003",
      type: "drone",
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
        imagePath="/uploads/sample-defense.jpg"  // ✅ เปลี่ยน path ได้ตามจริง
        cameraLocation="defense"                 // ✅ ระบุว่ากล้องฝั่ง Defense
      />
    </Box>
  );
};

export default DefenseMap;
