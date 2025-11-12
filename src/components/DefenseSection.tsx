// src/components/DefenseSection.tsx
import React from "react";
import "./defence-section.css";
import type { DefenseEvent } from "../App";

type Props = {
  events: DefenseEvent[];
  setEvents: React.Dispatch<React.SetStateAction<DefenseEvent[]>>;
};

const FALLBACK_IMG =
  "https://cdn-icons-png.flaticon.com/512/2920/2920233.png";

const DefenseSection: React.FC<Props> = ({ events }) => {
  // ✅ ดึงภาพตัวบนสุด
  const latestImage = events.length > 0 ? events[0].image || FALLBACK_IMG : FALLBACK_IMG;

  return (
    <section className="defence-section">
      <div className="name-defence">Defence</div>

      <div className="status-drone">
        <div className="drone-image">
          <img src={FALLBACK_IMG} alt="Drone" />
        </div>
        <div className="drone-info">
          <p><strong>obj-id:</strong> 001</p>
          <p><strong>type:</strong> drone</p>
          <p><strong>lat:</strong> 14.297600</p>
          <p><strong>lng:</strong> 101.166300</p>
          <p><strong>timestamp:</strong> 15:06:08</p>
        </div>
      </div>

      <div className="video-real">Video - Real</div>

      {/* ✅ ส่วนนี้เปลี่ยนเป็นแสดงรูปบนสุด */}
      <div className="img-real">
        <img src={latestImage} alt="Latest Drone" className="real-image" />
      </div>

      <div className="defence-history">
        <div className="history-list">
          {events.map((ev) => (
            <article className="history-card" key={ev.id}>
              <div className="drone-image">
                <img src={ev.image || FALLBACK_IMG} alt={ev.type} />
              </div>
              <div className="drone-info">
                <p><strong>obj-id:</strong> {ev.objId}</p>
                <p><strong>type:</strong> {ev.type}</p>
                <p><strong>lat:</strong> {ev.lat.toFixed(6)}</p>
                <p><strong>lng:</strong> {ev.lng.toFixed(6)}</p>
                <p><strong>timestamp:</strong> {ev.timestamp}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefenseSection;
