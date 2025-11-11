// src/components/Offense.tsx
import "./Offense.css";
import OffenseMap from "./OffenseMap"; // ✅ import Map เฉพาะฝั่งนี้

function Offense() {
  return (
    <div className="offense-container">
      <div className="offense-row-top">
        <div className="offense-section-red">
          <OffenseMap /> {/* ✅ แผนที่ฝั่ง Offense */}
        </div>
      </div>

      <div className="offense-section-purple">
        Bottom area
      </div>
    </div>
  );
}

export default Offense;
