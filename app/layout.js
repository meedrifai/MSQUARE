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
      <head>
        {/* Prevent FOUC and hydration mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  const lang = localStorage.getItem('lang') || 'fr';
                  
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                  
                  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
