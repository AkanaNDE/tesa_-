// src/types/detection.ts
export type DetectedObject = {
  obj_id: string;
  type: "drone" | "tank" | "vehicle" | "center" |  string;
  lat: number;
  lng: number;
  objective?: "drone" | "our" | "center" | string;
  size?: "small" | "medium" | "large" | string;
  radius?: number; // ✅ เพิ่ม radius สำหรับการแสดงผล
};


// ข้อมูลกล้อง
export interface Camera {
  id: string;          // UUID ของกล้อง
  name: string;        // ชื่อกล้อง เช่น "Team Alpha"
  location: string;    // ตำแหน่งกล้อง "defence" หรือ "offence"
}

// เหตุการณ์การตรวจจับ
export interface DetectionEvent {
  id: number;                    // ID ของ event
  cam_id: string;                // UUID ของกล้อง
  camera: Camera;                // ข้อมูลกล้อง
  timestamp: string;             // เวลาที่ตรวจจับ (ISO 8601)
  image_path: string;            // path รูปภาพ เช่น "/uploads/images/..."
  objects: DetectedObject[];     // รายการวัตถุที่ตรวจจับได้
}

// Response จาก API
export interface DetectionResponse {
  success: boolean;              // สถานะความสำเร็จ
  data: DetectionEvent[];        // รายการ detection events
}
