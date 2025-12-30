export default function Gallery() {
  const galleries = [
    { category: "🍜 French Signatures", items: ["Coq au Vin", "Beef Bourguignon", "French Onion Soup", "Crème Brûlée"] },
    { category: "🍝 Italian Classics", items: ["Pappardelle al Ragù", "Risotto ai Funghi", "Branzino al Forno", "Tiramisu"] },
    { category: "🏢 Dining Ambiance", items: ["Elegant Main Room", "Wine Bar Corner", "Private Dining", "Chef's Kitchen"] },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-yellow-50">Discover our exquisite French and Italian dishes, ambiance, and special moments</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {galleries.map((gallery, idx) => (
            <div key={idx} className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-red-900">{gallery.category}</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gallery.items.map((item, i) => (
                  <div
                    key={i}
                    className="card-elegant h-48 flex items-center justify-center overflow-hidden animate-fade-in-up"
                    style={{animationDelay: `${i * 0.1}s`}}
                  >
                    <img 
                      src={`https://image.shutterstock.com/z/stock-photo-${i}.jpg`}
                      alt={item}
                      className="w-full h-full object-cover opacity-70"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="text-center absolute">
                      <p className="text-4xl mb-2">🖼️</p>
                      <p className="text-gray-800 font-semibold">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-red-900">Experience Bella Francese</h2>
          <p className="text-lg text-gray-700 mb-8">
            These photos barely capture the warmth, aroma, and flavor of dining with us. Come experience authentic French and Italian cuisine in our elegant setting.
          </p>
          <a href="/reservations" className="btn-primary">
            👉 Make a Reservation
          </a>
        </div>
      </section>
    </main>
  );
}
