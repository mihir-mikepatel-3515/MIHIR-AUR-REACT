import { useState, useEffect } from "react";

// 1. Custom Hook for Fetching Exchange Rates
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => console.error("Error fetching data:", error));
  }, [currency]);

  return data;
}

// 2. Reusable InputBox Component
function InputBox({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions = [],
  amountDisabled = false,
}) {
  return (
    <div
      style={{
        padding: "14px",
        borderRadius: "8px",
        backgroundColor: "#f3f4f6",
        color: "#111827",
        marginBottom: "12px",
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          fontSize: "0.85rem",
          color: "#4b5563",
          fontWeight: "600",
        }}
      >
        {label}
      </label>

      <div style={{ display: "flex", gap: "10px" }}>
        {/* Amount Input */}
        <input
          type="number"
          min="0"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          style={{
            flex: "1",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
            color: "#111827",
            backgroundColor: amountDisabled ? "#e5e7eb" : "#ffffff",
          }}
        />

        {/* Currency Dropdown */}
        <select
          value={currency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
            cursor: "pointer",
            color: "#111827",
            backgroundColor: "#ffffff",
          }}
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// 3. Main Application Component
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const rate = currencyInfo[to];
  const convertedAmount = rate ? (amount * rate).toFixed(2) : 0;

  // Swap logic
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div
      style={{
        padding: "24px",
        fontFamily: "system-ui, sans-serif",
        maxWidth: "420px",
        margin: "40px auto",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#111827", marginTop: 0, textAlign: "center" }}>
        Currency Converter
      </h2>

      {/* From Input Box */}
      <InputBox
        label="From"
        amount={amount}
        onAmountChange={(val) => setAmount(val)}
        currency={from}
        onCurrencyChange={(curr) => setFrom(curr)}
        currencyOptions={options}
      />

      {/* Swap Button */}
      <div style={{ textAlign: "center", margin: "8px 0" }}>
        <button
          type="button"
          onClick={swap}
          style={{
            padding: "6px 16px",
            cursor: "pointer",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          ⇅ Swap
        </button>
      </div>

      {/* To Input Box (read-only converted output) */}
      <InputBox
        label="To"
        amount={convertedAmount}
        currency={to}
        onCurrencyChange={(curr) => setTo(curr)}
        currencyOptions={options}
        amountDisabled={true}
      />

      {/* Summary Card */}
      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          backgroundColor: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          textAlign: "center",
          color: "#111827",
          fontSize: "1rem",
          fontWeight: "600",
        }}
      >
        {amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}
      </div>
    </div>
  );
}

export default App;