import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const cityDiningData = {
  Bilimora: [
    { name: "La Pino'z Pizza (Station Rd)", map: "https://maps.google.com/?q=La+Pinoz+Pizza+Bilimora" },
    { name: "Sankalp Restaurant (NH 48 / Bilimora)", map: "https://maps.google.com/?q=Sankalp+Restaurant+Bilimora" },
    { name: "Honest Restaurant (Bilimora)", map: "https://maps.google.com/?q=Honest+Restaurant+Bilimora" },
    { name: "Coffee Culture / Local Cafe Bistro", map: "https://maps.google.com/?q=Cafe+Bilimora" },
  ],
  Navsari: [
    { name: "The Blue Coriander - Lords Eco Inn", map: "https://maps.google.com/?q=The+Blue+Coriander+Navsari" },
    { name: "Jalaram Khichdi Restaurant", map: "https://maps.google.com/?q=Jalaram+Khichdi+Navsari" },
    { name: "Royal Dine Restaurant (Lunsikui)", map: "https://maps.google.com/?q=Royal+Dine+Restaurant+Navsari" },
    { name: "Kathiyawadi Village Restaurant (NH 48)", map: "https://maps.google.com/?q=Kathiyawadi+Village+Navsari" },
  ],
  Valsad: [
    { name: "Rasoi Veg Restaurant (Tithal Road)", map: "https://maps.google.com/?q=Rasoi+Veg+Restaurant+Valsad" },
    { name: "Hotel Shanti - Multi Cuisine", map: "https://maps.google.com/?q=Hotel+Shanti+Valsad" },
    { name: "Topaz Restaurant & Banquet", map: "https://maps.google.com/?q=Topaz+Restaurant+Valsad" },
    { name: "Tithal Beach Sea View Cafes", map: "https://maps.google.com/?q=Tithal+Beach+Valsad" },
  ],
  Chikhli: [
    { name: "Sugar N Spice (NH 48 Chikhli)", map: "https://maps.google.com/?q=Sugar+N+Spice+Chikhli" },
    { name: "Hotel Apex Highway Treat", map: "https://maps.google.com/?q=Hotel+Apex+Chikhli" },
    { name: "Jay Ambe Kathiyawadi Dhaba", map: "https://maps.google.com/?q=Jay+Ambe+Kathiyawadi+Chikhli" },
  ],
};

export default function DateInvite() {
  const [step, setStep] = useState("ask"); // 'ask' | 'details' | 'confirmed'
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "65%" });
  const [hasMoved, setHasMoved] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [selectedCity, setSelectedCity] = useState("Bilimora");
  const [selectedVenue, setSelectedVenue] = useState(cityDiningData["Bilimora"][0].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setSelectedVenue(cityDiningData[city][0].name);
  };

  const dodgeNoButton = () => {
    const randomTop = Math.floor(Math.random() * 65) + 15;
    const randomLeft = Math.floor(Math.random() * 65) + 15;
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    setHasMoved(true);
  };

  const handleConfirmDate = async (e) => {
    e.preventDefault();
    if (!date || !time) {
      alert("Please choose a date and time!");
      return;
    }

    setLoading(true);

    // 1. Notify Backend
    try {
      await fetch("http://localhost:5001/api/confirm-date", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: selectedCity,
          venue: selectedVenue,
          date,
          time,
          phone,
        }),
      });
    } catch (err) {
      console.warn("Backend logging skipped:", err.message);
    } finally {
      setLoading(false);
      setStep("confirmed");
    }

    // 2. Open WhatsApp with pre-filled invitation details
    const text = encodeURIComponent(
      `Hey Mihir! 🌹\n\nOur date is officially confirmed!\n📍 Venue: ${selectedVenue} (${selectedCity})\n📅 Date: ${date}\n⏰ Time: ${time}\n\nSee you there! ✨`
    );
    
    // Opens WhatsApp chat directly
    window.open(`https://wa.me/916354442578?text=${text}`, "_blank");
  };

  const getCalendarIcsString = () => {
    const formattedDate = date ? date.replace(/-/g, "") : "";
    const formattedTime = time ? time.replace(/:/g, "") + "00" : "190000";
    const startIso = `${formattedDate}T${formattedTime}`;

    return [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mihir Patel//Date Planner//EN",
      "BEGIN:VEVENT",
      `SUMMARY:Dinner Date with Mihir 🌹`,
      `DESCRIPTION:Dinner date with Mihir at ${selectedVenue}, ${selectedCity}. Have a good day!`,
      `LOCATION:${selectedVenue}, ${selectedCity}, Gujarat`,
      `DTSTART:${startIso}`,
      `DTEND:${startIso}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");
  };

  const activeVenueObj =
    cityDiningData[selectedCity]?.find((v) => v.name === selectedVenue) ||
    cityDiningData[selectedCity][0];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fdf2f4",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* STEP 1: PROPOSAL */}
      {step === "ask" && (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "460px",
            minHeight: "340px",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            padding: "40px 24px",
            textAlign: "center",
            boxShadow: "0 12px 35px rgba(225, 29, 72, 0.12)",
          }}
        >
          <span style={{ fontSize: "3rem" }}>✨</span>
          <h1 style={{ color: "#e11d48", fontSize: "1.9rem", margin: "10px 0" }}>
            Hey Krisha!
          </h1>
          <p style={{ color: "#4b5563", fontSize: "1.2rem", marginBottom: "40px" }}>
            Will you come on a date with me? 🌹
          </p>

          <div style={{ position: "relative", height: "100px" }}>
            <button
              onClick={() => setStep("details")}
              style={{
                position: "absolute",
                top: "20px",
                left: "25%",
                transform: "translateX(-50%)",
                backgroundColor: "#e11d48",
                color: "#ffffff",
                border: "none",
                padding: "14px 34px",
                fontSize: "1.1rem",
                fontWeight: "700",
                borderRadius: "30px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(225, 29, 72, 0.4)",
              }}
            >
              YES! 🥰
            </button>

            <button
              onMouseEnter={dodgeNoButton}
              onTouchStart={dodgeNoButton}
              onClick={dodgeNoButton}
              style={{
                position: hasMoved ? "fixed" : "absolute",
                top: hasMoved ? noPosition.top : "20px",
                left: hasMoved ? noPosition.left : "75%",
                transform: "translateX(-50%)",
                backgroundColor: "#94a3b8",
                color: "#ffffff",
                border: "none",
                padding: "14px 28px",
                fontSize: "1rem",
                fontWeight: "600",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.15s ease-out",
                zIndex: 9999,
              }}
            >
              No 🙈
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: RESTAURANT & TIME FORM */}
      {step === "details" && (
        <div
          style={{
            width: "100%",
            maxWidth: "460px",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            padding: "32px 28px",
            boxShadow: "0 12px 35px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h2 style={{ color: "#be123c", margin: "0 0 6px 0", textAlign: "center" }}>
            Let's Pick The Spot 🥂
          </h2>
          <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "20px", fontSize: "0.95rem" }}>
            Select region, venue, date, and time:
          </p>

          <form onSubmit={handleConfirmDate} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: "6px", color: "#374151" }}>
                1. Select City:
              </label>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "1px solid #d1d5db" }}
              >
                {Object.keys(cityDiningData).map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: "6px", color: "#374151" }}>
                2. Select Restaurant / Cafe:
              </label>
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "1px solid #d1d5db" }}
              >
                {cityDiningData[selectedCity].map((spot) => (
                  <option key={spot.name} value={spot.name}>{spot.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: "6px", color: "#374151" }}>
                3. Choose Date:
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "1px solid #d1d5db" }}
                required
              />
            </div>

            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: "6px", color: "#374151" }}>
                4. Choose Time:
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "1px solid #d1d5db" }}
                required
              />
            </div>

            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: "6px", color: "#374151" }}>
                5. Mobile Number (Optional):
              </label>
              <input
                type="tel"
                placeholder="6354442578"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "1px solid #d1d5db" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: "10px",
                backgroundColor: "#25D366",
                color: "#ffffff",
                border: "none",
                padding: "13px",
                fontSize: "1.05rem",
                fontWeight: 700,
                borderRadius: "12px",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
              }}
            >
              {loading ? "Confirming..." : "Confirm & Send on WhatsApp 💬"}
            </button>
          </form>
        </div>
      )}

      {/* STEP 3: CONFIRMED SCREEN */}
      {step === "confirmed" && (
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            padding: "32px 25px",
            boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🎉💌</div>
          <h2 style={{ color: "#059669", margin: "0 0 16px 0" }}>It's a Date!</h2>

          <div
            style={{
              textAlign: "left",
              backgroundColor: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "14px",
              padding: "16px",
              color: "#166534",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: "0 0 6px 0", fontWeight: 700 }}>🌹 Confirmed Details:</p>
            <p style={{ margin: 0 }}>
              Date with <b>Mihir</b> at <b>{selectedVenue}</b> ({selectedCity}) on{" "}
              <b>{date}</b> at <b>{time}</b>. See you there! ✨
            </p>
          </div>

          <div
            style={{
              padding: "20px",
              backgroundColor: "#f8fafc",
              borderRadius: "16px",
              border: "1px dashed #cbd5e1",
              display: "inline-block",
              marginBottom: "16px",
            }}
          >
            <QRCodeSVG value={getCalendarIcsString()} size={180} level="M" />
            <p style={{ margin: "12px 0 0 0", fontSize: "0.85rem", color: "#475569", fontWeight: 600 }}>
              📸 Scan with camera to save directly to Calendar
            </p>
          </div>

          <br />

          <a
            href={activeVenueObj.map}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#0284c7",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 600,
              marginBottom: "15px",
            }}
          >
            📍 Open {selectedVenue} in Google Maps
          </a>

          <br />

          <button
            onClick={() => {
              setStep("ask");
              setHasMoved(false);
            }}
            style={{
              background: "none",
              border: "none",
              color: "#6b7280",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}