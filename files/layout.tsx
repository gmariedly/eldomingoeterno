import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Domingo Eterno",
  description: "Trío de rock alternativo de Buenos Aires. Escuchá nuestra música, seguinos y vení a los shows.",
  openGraph: {
    title: "El Domingo Eterno",
    description: "Trío de rock alternativo de Buenos Aires.",
    images: ["/banda.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
