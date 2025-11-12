import React from "react";
import "./offence-section.css"; // ✅ ไฟล์ CSS ที่จะคุม layout

const OffenseSection: React.FC = () => {
  return (
    <section className="offense-section">
      <div className="name-offence">Offence</div>
      <div className="status">Status</div>
      <div className="offence-history">Offence History</div>
    </section>
  );
};

export default OffenseSection;
