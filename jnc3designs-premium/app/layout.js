import './globals.css';

export const metadata = {
  title: "JNC3Designs LLC | Custom 3D Printing in Midland, TX",
  description: "JNC3Designs LLC offers custom 3D prints, keychains, tumbler toppers, and bulk promotional orders in Midland, TX. Fast turnaround for gyms, oilfield crews, and local businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
