export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string }>;
}) {
  const { paiement } = await searchParams;

  return (
    <main
      style={{
        maxWidth: "520px",
        margin: "0 auto",
        padding: "24px 20px 48px",
        background: "#FAF6EE",
        color: "#14213D",
        fontFamily: "Georgia, serif",
        minHeight: "100vh",
      }}
    >
      {paiement === "echec" && (
        <p
          style={{
            background: "#FDE8E2",
            border: "1px solid #E4572E",
            padding: "12px",
            borderRadius: "6px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Le paiement n’a pas abouti. Aucun montant n’a été débité. Tu peux
          réessayer ci-dessous.
        </p>
      )}

      <h1 style={{ fontSize: "2rem", lineHeight: 1.15, margin: "16px 0" }}>
        Arrête de répondre 30 fois par jour à « Où est ma commande ? »
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: 1.45 }}>
        Les mêmes dix questions reviennent chaque jour. Chaque réponse tapée à
        la main, c’est du temps que personne ne te paie. Réplique te propose la
        bonne réponse en un clic, que tu modifies avant d’envoyer.
      </p>

      <ul
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.5,
          paddingLeft: "20px",
          margin: "20px 0",
        }}
      >
        <li>Ta base de réponses prête en dix minutes</li>
        <li>Une réponse en un clic, modifiable avant l’envoi</li>
        <li>Les questions nouvelles repérées pour être ajoutées</li>
      </ul>

      <p
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#fff",
          border: "1px solid #D9D2C3",
          padding: "12px",
          borderRadius: "6px",
          fontSize: "0.95rem",
        }}
      >
        <strong>Accès anticipé :</strong> ton accès est ouvert sous 7 jours.
        Je crée ton compte et je pré-remplis ta base avec toi.
      </p>

      <p style={{ fontSize: "1.6rem", margin: "24px 0 4px" }}>
        <strong>35 € par mois</strong>
      </p>
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          margin: "0 0 16px",
          color: "#555",
        }}
      >
        soit environ 1,17 € par jour
      </p>

      <form action="/api/checkout" method="POST">
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "1.15rem",
            fontWeight: 700,
            background: "#E4572E",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Commencer
        </button>
      </form>

      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "0.9rem",
          textAlign: "center",
          margin: "10px 0 24px",
        }}
      >
        Sans engagement, résiliable à tout moment.
      </p>

      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.45,
          borderTop: "1px solid #D9D2C3",
          paddingTop: "16px",
        }}
      >
        <strong>Satisfait ou remboursé pendant 14 jours.</strong> Écris-moi à
        fcuccuru113@gmail.com avec l’adresse utilisée pour payer, et je te rembourse
        sous 5 jours ouvrés. Sans justification.
      </p>
    </main>
  );
}
