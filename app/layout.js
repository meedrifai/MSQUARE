import { AppProvider } from "@/context/AppContext";
import "./globals.css";

export const metadata = {
  title: "MSquare - Vêtements Personnalisés",
  description:
    "Personnalisez vos vêtements avec des designs uniques. Hoodies, T-shirts et plus encore.",
  keywords:
    "vêtements personnalisés, hoodie, t-shirt, design, Maroc, Casablanca",
  authors: [{ name: "MSquare" }],
  openGraph: {
    title: "MSquare - Vêtements Personnalisés",
    description: "Personnalisez vos vêtements avec des designs uniques",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
