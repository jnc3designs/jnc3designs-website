import { customers } from "../data/customers";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function CustomerHub() {
  return (
    <section className="section">

      <Badge color="purple">
        👥 Customer Hub
      </Badge>

      <h2>Customer Relationships</h2>

      <p className="operations-muted">
        Every customer relationship becomes part of the platform's memory.
      </p>

      <div className="customer-grid">

        {customers.map((customer) => (

          <JNCCard
            key={customer.id}
            className="customer-card"
            hover={false}
          >

            <h3>{customer.name}</h3>

            <Badge color="green">
              {customer.status}
            </Badge>

            <div className="customer-stats">

              <div>
                <strong>{customer.orders}</strong>

                <span>Orders</span>
              </div>

              <div>
                <strong>{customer.favoriteMaterial}</strong>

                <span>Favorite Material</span>
              </div>

              <div>
                <strong>{customer.since}</strong>

                <span>Customer Since</span>
              </div>

            </div>

            <h4>Notes</h4>

            <ul>

              {customer.notes.map((note) => (

                <li key={note}>
                  ✓ {note}
                </li>

              ))}

            </ul>

          </JNCCard>

        ))}

      </div>

    </section>
  );
}
