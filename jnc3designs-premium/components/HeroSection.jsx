import Image from "next/image";
import JNCButton from "./JNCButton";
import Badge from "./Badge";

export default function HeroSection() {
  return (
    <section className="section hero-2">
      <div className="home-logo-wrap">
        <Image
          src="/jnc3-logo.png"
          alt="JNC3Designs Logo"
          width={360}
          height={360}
          priority
          className="home-logo"
        />
      </div>

      <Badge>⚒️ Custom Made. Precision Printed.</Badge>

      <h1 className="hero-title">
        Custom 3D Printing in Midland, TX
      </h1>

      <p className="hero-copy">
        Custom parts, branded keychains, tumbler toppers, bulk promotional
        orders, and local filament supply for Midland, Odessa, and the Permian
        Basin.
      </p>

      <div className="hero-pills">
        <span>Custom Parts</span>
        <span>Bulk Orders</span>
        <span>Business Branding</span>
        <span>Authorized ZYLtech Reseller</span>
        <span>Local Pickup</span>
      </div>

      <div className="hero-buttons">
        <JNCButton href="#quote">Get a Quote</JNCButton>
        <JNCButton href="/supply">Browse Supply</JNCButton>
        <JNCButton href="/projects">Customer Projects</JNCButton>
        <JNCButton href="tel:4328940429">Call Now</JNCButton>
      </div>
    </section>
  );
}
