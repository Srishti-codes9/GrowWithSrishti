import {
  GraduationCap,
  Cpu,
  Briefcase,
  Users,
  MessageCircle
} from "lucide-react";

export default function App() {
  const calendlyUrl =
    "https://calendly.com/connect-and-grow-with-srishti/30min";
  const whatsappChat = "https://wa.me/919425379894";
  const whatsappChannel =
    "https://whatsapp.com/channel/0029VbBvayr89inbGIsEod2W";

  return (
    <div style={styles.page}>
      {/* HERO */}
      <header style={styles.header}>
        <h1 style={styles.title}>Grow with Srishti</h1>

        <p style={styles.subtitle}>
          CV writing, LinkedIn branding, mock interviews and personalized career
          paths for students and professionals
        </p>

        {/* BOOK STRATEGY CALL */}
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button style={styles.buttonPrimary}>
            Book a Free Strategy Call
          </button>
        </a>

        <p style={styles.subtext}>
          30‑minute discovery call • No obligation
        </p>

        {/* WHATSAPP CHANNEL CTA */}
        <a
          href={whatsappChannel}
          target="_blank"
          rel="noreferrer"
          style={styles.whatsappChannel}
        >
          <MessageCircle size={22} />
          Join my FREE WhatsApp channel →
        </a>
      </header>

      {/* TARGET AUDIENCE */}
      <section style={styles.grid}>
        <AudienceCard title="School Students" icon={<GraduationCap />} link={calendlyUrl} />
        <AudienceCard title="College Students" icon={<Cpu />} link={calendlyUrl} />
        <AudienceCard title="Early Professionals" icon={<Briefcase />} link={calendlyUrl} />
        <AudienceCard title="Mid‑Career Professionals" icon={<Users />} link={calendlyUrl} />
      </section>

      {/* CTA SECTION */}
      <section style={styles.cta}>
        <h2>Ready to Lead the Technical Frontier?</h2>

        <a
          href={calendlyUrl}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button style={styles.buttonPrimary}>
            Book Consultation
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Grow with Srishti • Built for career‑focused professionals
      </footer>

      {/* FLOATING WHATSAPP CHAT */}
      <a
        href={whatsappChat}
        target="_blank"
        rel="noreferrer"
        style={styles.whatsappFloating}
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

/* CARD */
function AudienceCard({ title, icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={styles.cardLink}
    >
      <div style={styles.card}>
        {icon}
        <h3>{title}</h3>
        <span style={styles.cardHint}>Book mentoring →</span>
      </div>
    </a>
  );
}

/* STYLES */
const styles = {
  page: {
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "2rem",
    maxWidth: "1000px",
    margin: "auto"
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem"
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: 800
  },
  subtitle: {
    maxWidth: "720px",
    margin: "1rem auto 1.5rem",
    opacity: 0.9
  },
  buttonPrimary: {
    padding: "0.9rem 1.6rem",
    borderRadius: "14px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer"
  },
  subtext: {
    marginTop: "0.5rem",
    fontSize: "0.85rem",
    color: "#6b7280"
  },
  whatsappChannel: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    marginTop: "1.2rem",
    padding: "0.8rem 1.4rem",
    background: "#25D366",
    borderRadius: "999px",
    color: "white",
    fontWeight: 700,
    textDecoration: "none"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.4rem",
    marginBottom: "3rem"
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit"
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "1.6rem",
    textAlign: "center",
    cursor: "pointer"
  },
  cardHint: {
    display: "block",
    marginTop: "0.4rem",
    fontSize: "0.85rem",
    color: "#4f46e5",
    fontWeight: 600
  },
  cta: {
    background: "linear-gradient(135deg,#1e3a8a,#4f46e5)",
    color: "white",
    padding: "3rem",
    borderRadius: "22px",
    textAlign: "center",
    marginBottom: "3rem"
  },
  footer: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "0.9rem"
  },
  whatsappFloating: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "16px",
    borderRadius: "50%",
    boxShadow: "0 10px 25px rgba(37,211,102,0.5)"
  }
};
