// src/components/OffenseMap.tsx

import { Box } from "@mui/material";
import MapComponent from "../components/MapComponent"; // ปรับ path ตามจริง
import { type DetectedObject } from "../types/detection";

const OffenseMap = () => {
  const sampleObjects: DetectedObject[] = [
    {
      obj_id: "obj_001",
      type: "drone",
      lat: 14.297567,
      lng: 101.166279,
      objective: "unknown",
      size: "medium",
    },
    {
      obj_id: "obj_002",
      type: "person",
      lat: 14.2976,
      lng: 101.1663,
      objective: "our",
      size: "large",
    },
    {
      obj_id: "obj_003",
      type: "car",
      lat: 14.29755,
      lng: 101.16625,
      objective: "enemy",
      size: "large",
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <MapComponent
        objects={sampleObjects}
        imagePath="/uploads/sample.jpg"
        cameraLocation="offense"  
      />
    </Box>
  );
};

export default OffenseMap;
