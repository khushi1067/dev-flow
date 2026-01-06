import { useEffect, useState } from "react";

const page = {
  minHeight: "100vh",
  background: "#f7f7fb",
  paddingTop: 100,
  paddingBottom: 100,
  paddingLeft: 240,
  paddingRight: 240,
  justifyContent: "center",
  alignItems: "center"
};
const centerWrap = {
  minHeight: "calc(100vh - 48px)", // 24px top + 24px bottom
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  width: "100%",
  maxWidth: 640,
  background: "white",
  border: "1px solid #eee",
  borderRadius: 16,
  padding: 50,
  boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "160px 1fr 1fr 1fr",
  gap: 12,
  alignItems: "start",
};

const input = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #ddd",
  outline: "none",
  fontSize: 14,
  boxSizing: "border-box",
};

const textarea = {
  ...input,
  minHeight: 84,
  resize: "vertical",
};

const button = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #ddd",
  background: "#111",
  color: "white",
  fontWeight: 600,
  cursor: "pointer",
};

const pill = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: 999,
  background: "#eef2ff",
  color: "#3730a3",
  fontSize: 12,
  fontWeight: 600,
};

const th = {
  textAlign: "left",
  borderBottom: "1px solid #eaeaea",
  padding: "12px 10px",
  background: "#fafafa",
  fontSize: 13,
  color: "#333",
};

const td = {
  borderBottom: "1px solid #f0f0f0",
  padding: "12px 10px",
  verticalAlign: "top",
  fontSize: 14,
};


export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    workedOn: "",
    learned: "",
    blockers: "",
  });
  const [savedMsg, setSavedMsg] = useState("");


  async function load() {
    const res = await fetch("http://localhost:5000/entries");
    setEntries(await res.json());
  }

  async function submit(e) {
    e.preventDefault();
    await fetch("http://localhost:5000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSavedMsg("Saved ✓");
    setTimeout(() => setSavedMsg(""), 1500);

    setForm({ ...form, workedOn: "", learned: "", blockers: "" });
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
  <div style={page}>
  <div style={centerWrap}>
    <div style={card}>
      <div style={header}>
        <div>
          <h2 style={{ margin: 0 }}>DevFlow</h2>
          <p style={{ margin: "6px 0 0", color: "#555" }}>
            Daily log for work, learning, and blockers.
          </p>
        </div>
      </div>

      {/* form + table goes here */}


      {savedMsg && (
        <p style={{ color: "green", fontWeight: 600, marginTop: 4 }}>
          {savedMsg}
        </p>
      )}


      <form onSubmit={submit} style={{marginTop:12}}>
        <div style={grid}>
    <div>
        <input
          value={form.date}
          type="date"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <textarea
          placeholder="Worked on"
          value={form.workedOn}
          onChange={(e) => setForm({ ...form, workedOn: e.target.value })}
        />

        <textarea
          placeholder="Learned"
          value={form.learned}
          onChange={(e) => setForm({ ...form, learned: e.target.value })}
        />

        <textarea
          placeholder="Blockers"
          value={form.blockers}
          onChange={(e) => setForm({ ...form, blockers: e.target.value })}
        />

        <button>Save Entry</button>
        </div>
        </div>
      </form>

      <hr />

      <h3 style={{ marginTop: 24 }}>Saved Entries</h3>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>Date</th>
              <th style={th}>Worked On</th>
              <th style={th}>Learned</th>
              <th style={th}>Blockers</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 ? (
              <tr>
                <td style={td} colSpan={4}>
                  No entries yet.
                </td>
              </tr>
            ) : (
              entries.map((e) => (
                <tr key={e._id}>
                  <td style={td}>{e.date}</td>
                  <td style={td}>{e.workedOn || "-"}</td>
                  <td style={td}>{e.learned || "-"}</td>
                  <td style={td}>{e.blockers || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      

      
      </div>
      </div>
  </div>
);

}
