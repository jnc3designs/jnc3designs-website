import { products } from "../../../../data/catalog";

export default function ProductPage({ params }) {

  const product = products.find(
    (item) =>
      item.category === params.category &&
      item.slug === params.product
  );

  if (!product) {

    return (
      <main>
        <section className="section">
          <h1>Product Not Found</h1>
        </section>
      </main>
    );

  }

  return (

    <main>

      <section className="section">

        <a href={`/supply/${product.category}`} className="underline">
          ← Back
        </a>

        <h1>{product.name}</h1>

        <p className="hero-subnote">
          Official ZYLtech Engineering Filament
        </p>

      </section>

      <section className="section">

        <div className="product-detail">

          <div className="product-image-large">

            🎨

          </div>

          <div>

            <h2>${product.price.toFixed(2)}</h2>

            <p>

              {product.description}

            </p>

            <br />

            <strong>Material</strong>

            <p>{product.material}</p>

            <br />

            <strong>Color</strong>

            <p>{product.color}</p>

            <br />

            <strong>Inventory</strong>

            <p>{product.stock} Rolls Available</p>

            <br />

            <strong>Recommended Uses</strong>

            <ul>

              {product.applications?.map((item) => (

                <li key={item}>{item}</li>

              ))}

            </ul>

            <br />

            <strong>Compatible Printers</strong>

            <ul>

              {product.printerCompatibility?.map((item) => (

                <li key={item}>{item}</li>

              ))}

            </ul>

          </div>

        </div>

      </section>

    </main>

  );

}
