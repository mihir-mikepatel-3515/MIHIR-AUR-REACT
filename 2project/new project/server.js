import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// In-memory record of date bookings
const confirmedDates = [];

// Endpoint to log date booking
app.post("/api/confirm-date", (req, res) => {
  const { city, venue, date, time, phone } = req.body;

  if (!city || !venue || !date || !time) {
    return res.status(400).json({ success: false, message: "Missing required booking details" });
  }

  const booking = {
    id: confirmedDates.length + 1,
    city,
    venue,
    date,
    time,
    phone: phone || "N/A",
    createdAt: new Date().toISOString(),
  };

  confirmedDates.push(booking);
  console.log("🌹 New Date Confirmed:", booking);

  return res.json({ success: true, booking });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", totalBookings: confirmedDates.length });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});