export default function Merci() {
  return (
    <main
      style={{
        maxWidth: "520px",
        margin: "0 auto",
        padding: "48px 20px",
        background: "#FAF6EE",
        color: "#14213D",
        fontFamily: "Georgia, serif",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2rem", lineHeight: 1.15, margin: "0 0 16px" }}>
        Merci, c’est noté.
      </h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.45 }}>
        Ton paiement est en cours de confirmation. Tu recevras un e-mail de
        Stripe avec ton reçu.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.45 }}>
        <strong>Ce qui se passe ensuite :</strong> sous 7 jours, je crée ton
        compte et je t’écris pour pré-remplir ta base de réponses avec toi.
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "16px",
          fontFamily: "Arial, sans-serif",
          color: "#14213D",
        }}
      >
        Retour à l’accueil
      </a>
    </main>
  );
}
