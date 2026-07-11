import JNCButton from "./JNCButton";
import JNCCard from "./JNCCard";
import InventoryBadge from "./InventoryBadge";
import FilamentSwatch from "./FilamentSwatch";
import MaterialHighlights from "./MaterialHighlights";



export default function ProductCard({ product }) {
  const reserveHref = `/supply/reserve?product=${encodeURIComponent(
    product.name
  )}&material=${encodeURIComponent(product.material)}&color=${encodeURIComponent(
    product.color
  )}&price=${product.price}&stock=${product.stock}&image=${encodeURIComponent(
    product.image
  )}`;

  return (
    <JNCCard className="product-card">
      <a
        href={`/supply/${product.category}/${product.slug}`}
        className="product-card-link"
      >
        <FilamentSwatch
    color={product.color}
    size={90}
    className="product-swatch"
/>

        <h3>{product.name}</h3>

        <p className="product-brand">
          Official ZYLtech Engineering Filament
        </p>

        <InventoryBadge stock={product.stock} />

        <MaterialHighlights
  material={product.category}
  showTitle={false}
  featureLimit={2}
/>

        <h2>${product.price.toFixed(2)}</h2>
      </a>

      <div className="product-bottom">
        <JNCButton href={reserveHref}>Reserve</JNCButton>
        <JNCButton href={product.square || reserveHref}>Buy with Square</JNCButton>
      </div>
    </JNCCard>
  );
}
