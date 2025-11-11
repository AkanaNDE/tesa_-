// src/components/OffenseMap.tsx

import { Box } from "@mui/material";
import MapComponent from "../components/MapComponent"; // ปรับ path ตามจริง
import { type DetectedObject } from "../types/detection";

const OffenseMap = () => {
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
