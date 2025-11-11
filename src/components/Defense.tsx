import "./Defense.css";
import DefenseMap from "./DefenseMap"; // ✅ import Map ของ Defense

function Defense() {
  return (
    <div className="defense-container">
      <div className="defense-row-top">
        <div className="defense-section-red">
          <DefenseMap /> {/* ✅ ใส่ Map ตรงนี้ */}
        </div>
        <div className="defense-section-blue">
          Side area
        </div>
      </div>

      <div className="defense-section-purple">
        Bottom area
      </div>
    </div>
  );
}

export default Defense;
