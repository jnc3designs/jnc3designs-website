import './globals.css';
import Script from "next/script";

export const metadata = {
  title: "Custom 3D Printing in Midland TX | JNC3Designs LLC",
  description: "Custom 3D printing, keychains, tumbler toppers and bulk promotional items in Midland, TX. Fast local service for gyms, oilfield crews and small businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
    {/* Google Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17972991441"
        strategy="afterInteractive"
      />

      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17972991441');
        `}
      </Script>
        
      <body>{children}</body>
    </html>
  );
}
