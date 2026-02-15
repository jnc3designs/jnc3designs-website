import './globals.css';

export const metadata = {
  title: "JNC3Designs",
  description: "Custom 3D prints, keychains, toppers and bulk orders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
