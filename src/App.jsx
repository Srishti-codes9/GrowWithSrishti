import { useState } from "react";
import {
  GraduationCap,
  Cpu,
  Briefcase,
  Users,
  X,
  MessageCircle
} from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);

  const calendlyUrl = "https://calendly.com/connect-and-grow-with-srishti/30min";
  const whatsappUrl = "https://wa.me/91XXXXXXXXXX";

  return (
    <div style={styles.page}>
      {/* HERO */}
      <header style={styles.header}>
        <h1>Grow with Srishti</h1>
        <p>
          Career guidance, mock interviews, and real‑world mentoring in
          Embedded Systems & Model‑Based Development
        </p>

        <button style={styles.button} onClick={() => setOpen(true)}>
          Book a Free Intro Call
        </button>

        <p style={styles.subtext}>30‑minute discovery call • No obligation</p>
      </header>

      {/* TARGET AUDIENCE */}
      <section style={styles.grid}>
        <Card title="School Students" icon={<GraduationCap />} />
        <Card title="College Students" icon={<Cpu />} />
        <Card title="Early Professionals" icon={<Briefcase />} />
        <Card title="Mid‑Career" icon={<Users />} />
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Grow with Srishti • Built for LinkedIn audience
      </footer>

      {/* MODAL */}
      {open && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.close} onClick={() => setOpen(false)}>
              <X />
            </button>
            <h3>Book a Free Intro Call</h3>
            <p>
              Share your background and goals. I’ll help you decide next steps.
            </p>
            <a href={calendlyUrl} target="_blank" rel="noreferrer">
              <button style={styles.button}>Open Calendar</button>
            </a>
          </div>
        </div>
      )}

      {/* WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        style={styles.whatsapp}
      >
        <MessageCircle />
      </a>
    </div>
  );
}

function Card({ title, icon }) {
  return (
    <div style={styles.card}>
      <div style={{ marginBottom: "0.5rem" }}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    maxWidth: "1000px",
    margin: "auto"
  },
  header: {
    textAlign: "center",
    marginBottom: "2.5rem"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.2rem"
  },
  card: {
    padding: "1.2rem",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    textAlign: "center"
  },
  button: {
    padding: "0.8rem 1.4rem",
    borderRadius: "14px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer"
  },
  subtext: {
    marginTop: "0.5rem",
    fontSize: "0.85rem",
    color: "#6b7280"
  },
  footer: {
    marginTop: "3rem",
    textAlign: "center",
    color: "#6b7280",
    fontSize: "0.9rem"
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "16px",
    width: "320px",
    position: "relative"
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer"
  },
  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "14px",
    borderRadius: "50%"
  }
};
