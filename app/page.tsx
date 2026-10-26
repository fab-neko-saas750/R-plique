export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "24px",
        background: "#FAF6EE",
        color: "#14213D",
        fontFamily: "Georgia, serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", lineHeight: 1.15, margin: 0 }}>
        Arrête de répondre 30 fois par jour à « Où est ma commande ? »
      </h1>
      <p style={{ fontSize: "1.1rem", marginTop: "16px" }}>
        Réplique arrive bientôt.
      </p>
    </main>
  );
}
