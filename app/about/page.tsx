import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">À Propos De Nous</h1>
          <p className="text-xl text-yellow-50">Bringing the finest French and Italian culinary traditions to your table</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bella Francese was born from a passion for authentic French and Italian cuisine. Our head chef trained in the prestigious kitchens of Lyon and the trattorias of Tuscany, bringing decades of culinary expertise to every plate we serve.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe that great dining is a celebration of tradition, quality, and the art of bringing people together. Every dish tells a story—of Italian vineyards, French countryside farms, and generations of culinary heritage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our kitchen to your table, we're committed to delivering an authentic European dining experience that honors time-tested recipes while celebrating the finest ingredients from both regions.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="bg-amber-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600">🇫🇷 🇮🇹 Chef & Kitchen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Our Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🇫🇷", title: "French Mastery", desc: "Traditional techniques from the culinary schools of France, refined over generations." },
              { icon: "🇮🇹", title: "Italian Passion", desc: "Regional recipes from Tuscany, Sicily, and Rome, prepared with authentic Italian ingredients." },
              { icon: "🍷", title: "Wine Excellence", desc: "Carefully curated French and Italian wines to elevate every course and moment." },
            ].map((item, i) => (
              <div key={i} className="card-elegant p-8 text-center animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold mb-4 text-red-900">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Meet the Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Chef Louis Beaumont", role: "Head Chef", specialty: "French Haute Cuisine" },
              { name: "Chef Marco Rossi", role: "Italian Chef", specialty: "Tuscan & Mediterranean" },
              { name: "Sophia Leclerc", role: "Restaurant Manager", specialty: "Fine Dining Experience" },
            ].map((person, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="bg-amber-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl">
                  👨‍🍳
                </div>
                <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                <p className="text-amber-700 font-semibold mb-2">{person.role}</p>
                <p className="text-gray-600">{person.specialty}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12 text-lg">
            Our kitchen and service team share one goal: <strong>making every guest feel welcome</strong>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Experience Our Passion</h2>
        <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
          Join us and discover why our guests keep coming back for more
        </p>
        <Link href="/reservations" className="btn-primary">
          👉 Reserve a Table Today
        </Link>
      </section>
    </main>
  );
}
