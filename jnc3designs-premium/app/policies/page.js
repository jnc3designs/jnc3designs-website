import Image from "next/image";
import Link from "next/link";

const policies = [
  {
    title: "Turnaround Times",
    body: [
      "All items are made to order using 3D printing technology.",
      "Standard turnaround time is up to 7 business days.",
      "Many orders are completed sooner depending on workload and order size.",
      "Larger, bulk, or highly detailed prints may take longer.",
      "You will be notified if additional time is needed.",
    ],
  },
  {
    title: "Payment",
    body: [
      "Full payment is required before production begins.",
      "Orders will not be started until payment is received and confirmed.",
      "Once payment is made, your order is added to the production queue.",
    ],
  },
  {
    title: "Design Approval",
    body: [
      "For custom items, a design preview may be sent before printing.",
      "Please review spelling, sizing, colors, and design details carefully.",
      "Once approved, changes cannot be made.",
    ],
  },
  {
    title: "Refunds, Exchanges & Cancellations",
    body: [
      "Due to the custom nature of 3D printed items, all sales are final.",
      "No refunds, exchanges, or cancellations once production has started.",
      "If there is an error on our end, we will make it right.",
      "Any issues must be reported within 48 hours of receiving your order.",
    ],
  },
  {
    title: "3D Printing Disclaimer",
    body: [
      "All items are produced using 3D printing and may have minor layer lines or slight variations.",
      "Color may vary slightly depending on material and lighting.",
    ],
  },
  {
    title: "Shipping & Local Pickup",
    body: [
      "Local pickup and shipping options are available.",
      "Shipping times are separate from production times.",
      "Once shipped, delivery is handled by the carrier and is outside our control.",
      "Tracking information will be provided when applicable.",
    ],
  },
  {
    title: "Communication",
    body: [
      "Orders can be placed through Facebook, Instagram, email, or direct message.",
      "To keep things organized, please keep all order details in one message thread when possible.",
      "We aim to respond quickly, but response times may vary during busy periods, weekends, or holidays.",
    ],
  },
  {
    title: "Custom Orders",
    body: [
      "Custom requests are welcome.",
      "Pricing may vary depending on design time, material, print time, and quantity.",
      "Bulk discounts may be available for larger orders.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <main className="bg-[#050814] text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-[#4ea3ff] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            JNC3Designs
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Terms & Conditions / Shop Policies
          </h1>
          <p className="text-white/75 max-w-3xl mx-auto mt-4 text-lg leading-8">
            Thank you for supporting JNC3Designs. All items are made to order
            using 3D printing technology. By placing an order, you agree to the
            following terms and policies.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src="/images/policies.png"
              alt="JNC3Designs shop policies graphic"
              width={1600}
              height={2000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-[#4ea3ff] mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3 text-white/90 leading-7">
                {section.body.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#4ea3ff] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#0b1630] to-[#0a2242] p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Questions before ordering?</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Reach out for custom pricing, bulk orders, local pickup, or help
            choosing the right print for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#4ea3ff] px-6 py-3 font-semibold text-black hover:opacity-90 transition"
            >
              Contact JNC3Designs
            </Link>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
