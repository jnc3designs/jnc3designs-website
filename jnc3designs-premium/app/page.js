
export default function Home() {
  return (
    <main>

      <section className="section">
        <h1 style={{fontSize: "42px"}}>Custom 3D Printing in Midland, TX - JNC3Designs LLC</h1>
        <p style={{opacity: 0.8}}>
          Custom 3D prints, keychains, tumbler toppers and bulk promotional orders made locally in Midland, TX.
        </p>

        <div style={{marginTop: "20px"}}>
          <a href="https://www.facebook.com/profile.php?id=61579552738924" className="button-primary">
            Message on Facebook
          </a>
          <a href="tel:4328940429" className="button-outline">
            Call 432-894-0429
          </a>
        </div>
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
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="/images/sample1.jpg" alt="Sample 1"/>
          <img src="/images/sample2.jpg" alt="Sample 2"/>
          <img src="/images/sample3.jpg" alt="Sample 3"/>
        </div>
        <p style={{opacity: 0.6, marginTop: "10px"}}>
          Replace sample images inside /public/images folder with your real product photos.
        </p>
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
