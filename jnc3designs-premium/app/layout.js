import './globals.css';

export const metadata = {
  title: "Custom 3D Printing in Midland TX | JNC3Designs LLC",
  description: "Custom 3D printing, keychains, tumbler toppers and bulk promotional items in Midland, TX. Fast local service for gyms, oilfield crews and small businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
