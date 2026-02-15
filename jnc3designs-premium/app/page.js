
export default function Home() {
  return (
    <main>

      <section className="section">
        <h1 style={{fontSize: "42px"}}>Custom 3D Printing in Midland, TX - JNC3Designs LLC</h1>
        <p style={{opacity: 0.8}}>
          Custom 3D prints, branded keychains, tumbler toppers and bulk promotional orders made locally in Midland, TX.
            Fast turnaround. Bulk discounts available.
        </p>

        <div style={{marginTop: "20px"}}>
          <a href="https://www.facebook.com/profile.php?id=61579552738924" className="button-primary">
            Message on Facebook
          </a>
          <a href="tel:4328940429" className="button-outline">
            Call 432-894-0429
          </a>
        </div>
            <p className="mt-6 text-sm opacity-80">
  Follow us:{" "}
  <a 
    href="https://www.facebook.com/profile.php?id=61579552738924" 
    target="_blank"
    className="underline"
  >
    Facebook
  </a>
  {" "}
<span className="mx-2">|</span>
{" "}

  <a 
    href="https://www.instagram.com/jnc3designs/" 
    target="_blank"
    className="underline"
  >
    Instagram
  </a>
</p>

      </section>

      <section className="section">
        <h2>Bulk Orders for Gyms, Oilfield Crews & Small Businesses</h2>
        <p style={{opacity: 0.8}}>
          Need 25, 50, or 100+ pieces? We specialize in high-quantity custom prints with clean finishes and consistent quality.
        </p>
        <ul style={{lineHeight: "1.8"}}>
          <li>• Gym merchandise & promo items</li>
          <li>• Oilfield crew keychains & gear tags</li>
          <li>• Company giveaways & event swag</li>
          <li>• School teams & fundraisers</li>
          <li>• Local business branding</li>
        </ul>
            
      </section>
<section className="section">
  <h2>Why Choose JNC3Designs?</h2>
  <ul>
    <li>✔ Local Midland, TX business</li>
    <li>✔ Bulk pricing available</li>
    <li>✔ Fast turnaround times</li>
    <li>✔ Custom logo & branding options</li>
    <li>✔ High-quality, clean finishes</li>
  </ul>
</section>

      <section className="section">
            <p style={{marginBottom: "20px", fontWeight: "bold"}}>
  Need custom merchandise for your gym, oilfield crew or event?
  Message us today for bulk pricing.
</p>

  <h2>Gallery</h2>

  <div className="gallery-grid">
    <img src="/custom.jpeg" alt="Custom 3D print" />
    <img src="/custom1.jpeg" alt="Custom 3D print" />
    <img src="/custome3.jpeg" alt="Custom 3D print" />
    <img src="/custom4.jpeg" alt="Custom 3D print" />
    <img src="/keychain.jpeg" alt="Custom keychain" />
    <img src="/keychain1.jpeg" alt="Custom keychain" />
    <img src="/keychain2.jpeg" alt="Custom keychain" />
    <img src="/tumbler-topper.jpeg" alt="Tumbler topper" />
    <img src="/tumbler-topper2.jpeg" alt="Tumbler topper" />
  </div>
</section>


      <section className="section">
        <h2>Request a Quote</h2>
        <form action="mailto:jnc3designs@gmail.com" method="post" encType="text/plain">
          <div style={{marginBottom: "10px"}}>
            <input type="text" name="Name" placeholder="Your Name" required style={{padding: "8px", width: "100%"}}/>
          </div>
          <div style={{marginBottom: "10px"}}>
            <input type="email" name="Email" placeholder="Your Email" required style={{padding: "8px", width: "100%"}}/>
          </div>
          <div style={{marginBottom: "10px"}}>
            <textarea name="Details" placeholder="Order details..." required style={{padding: "8px", width: "100%"}}/>
          </div>
          <button type="submit" className="button-primary">Send Request</button>
        </form>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: jnc3designs@gmail.com</p>
        <p>Phone: 432-894-0429</p>
        <p>Instagram: https://www.instagram.com/jnc3designs/</p>
      </section>

    </main>
  );
}
