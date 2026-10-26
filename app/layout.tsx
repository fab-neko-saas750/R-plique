import type { ReactNode } from "react";

export const metadata = {
  title: "Réplique",
  description: "Les réponses aux questions qui reviennent, en un clic.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
