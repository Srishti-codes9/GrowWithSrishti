import {
  GraduationCap,
  Cpu,
  Briefcase,
  Users,
  MessageCircle
} from "lucide-react";

/* LINKS */
const CALENDLY = "https://calendly.com/connect-and-grow-with-srishti/30min";
const WHATSAPP_CHAT = "https://wa.me/919425379894";
const WHATSAPP_CHANNEL =
  "https://whatsapp.com/channel/0029VbBvayr89inbGIsEod2W";

export default function App() {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <header style={styles.header}>
        <h1 style={styles.title}>Grow with Srishti</h1>

        <p style={styles.subtitle}>
          CV writing, LinkedIn branding, mock interviews and personalized career
          plans for students and professionals
        </p>

        <a href={CALENDLY} target="_blank" rel="noreferrer">
          <button style={styles.buttonPrimary}>
            Book a Free Strategy Call
          </button>
        </a>

        <p style={styles.subtext}>
          30‑minute discovery call • No obligation
        </p>

        <a
          href={WHATSAPP_CHANNEL}
          target="_blank"
          rel="noreferrer"
          style={styles.whatsappChannel}
        >
          <MessageCircle size={20} />
          Join my FREE WhatsApp channel →
        </a>
      </header>

      {/* TARGET AUDIENCE */}
      <section style={styles.grid}>
        <AudienceCard title="School Students" icon={<GraduationCap />} />
        <AudienceCard title="College Students" icon={<Cpu />} />
        <AudienceCard title="Early Professionals" icon={<Briefcase />} />
        <AudienceCard title="Mid‑Career Professionals" icon={<Users />} />
      </section>

      {/* SERVICES */}
      <section style={styles.grid}>
        <ServiceCard
          title="Professional CV Writing"
          original="₹199 – ₹499"
          offer="₹49"
        />

        <ServiceCard
          title="LinkedIn Profile Branding"
          original="₹1,999 – ₹4,599"
          offer="₹499"
        />

        <ServiceCard
          title="Mock Interview & Feedback"
          original="₹1,499 – ₹2,499"
          offer="₹499 – ₹999"
        />

        <ServiceCard
          title="⭐ Personalized Career Roadmap"
          original="₹4,999 – ₹7,999"
          offer="₹999 – ₹2,499"
          highlight
        />

        <ServiceCard
          title="1‑on‑1 Career Mentorship (Monthly)"
          original="₹10,000 – ₹20,000"
          offer="₹2,499 – ₹3,999"
        />
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to Lead the Technical Frontier?</h2>
        <a href={CALENDLY} target="_blank" rel="noreferrer">
          <button style={styles.buttonPrimary}>Book Consultation</button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Grow with Srishti
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_CHAT}
        target="_blank"
        rel="noreferrer"
        style={styles.whatsappFloating}
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

/* COMPONENTS */

function AudienceCard({ title, icon }) {
  return (
    <a href={CALENDLY} target="_blank" rel="noreferrer" style={styles.cardLink}>
      <div style={styles.card}>
        {icon}
        <h3>{title}</h3>
        <span style={styles.cardHint}>Book mentoring →</span>
      </div>
    </a>
  );
}

function ServiceCard({ title, original, offer, highlight }) {
  return (
    <a href={CALENDLY} target="_blank" rel="noreferrer" style={styles.cardLink}>
      <div
        style={{
          ...styles.card,
          border: highlight ? "2px solid #4f46e5" : styles.card.border
        }}
      >
        <h3>{title}</h3>

        <p style={styles.price}>
          <span style={styles.originalPrice}>{original}</span>
          <span style={styles.offerPrice}>{offer}</span>
        </p>

        <p style={styles.offerTag}>
          {highlight ? "Most Popular · Launch Offer" : "Launch Offer"}
        </p>
      </div>
    </a>
  );
}

/* STYLES */

const styles = {
  page: {
    fontFamily: "system-ui, sans-serif",
    padding: "2rem",
    maxWidth: "1100px",
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
    margin: "1rem auto 1.5rem",
    maxWidth: "700px",
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
    marginTop: "0.6rem",
    fontSize: "0.85rem",
    color: "#6b7280"
  },
  whatsappChannel: {
    marginTop: "1.4rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.9rem 1.6rem",
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
    marginTop: "0.4rem",
    fontSize: "0.85rem",
    color: "#4f46e5",
    fontWeight: 600
  },
  price: {
    margin: "0.6rem 0",
    display: "flex",
    justifyContent: "center",
    gap: "0.6rem"
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#9ca3af",
    fontSize: "0.9rem"
  },
  offerPrice: {
    fontSize: "1.1rem",
    fontWeight: 700
  },
  offerTag: {
    fontSize: "0.75rem",
    color: "#10b981",
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
    color: "#6b7280"
  },
  whatsappFloating: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    background: "#25D366",
    color: "white",
    padding: "16px",
    borderRadius: "50%",
    boxShadow: "0 10px 25px rgba(37,211,102,0.45)"
  }
};
