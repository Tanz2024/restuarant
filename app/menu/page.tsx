import Link from "next/link";

export default function Menu() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Menu Français & Italiano</h1>
          <p className="text-xl text-yellow-50">Authentic recipes from Lyon, Provence, Tuscany, and the Italian Riviera</p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Entrées / Starters */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 border-b-4 border-amber-700 pb-4">Entrées (Starters)</h2>
            <div className="space-y-6">
              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Escargots de Bourgogne</h3>
                  <p className="text-gray-600">Snails in garlic and parsley butter</p>
                </div>
                <p className="menu-price">$14</p>
              </div>
              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Caprese Salad</h3>
                  <p className="text-gray-600">Buffalo mozzarella, San Marzano tomatoes, fresh basil</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$12</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">French Onion Soup</h3>
                  <p className="text-gray-600">Caramelized onions, Gruyère cheese, crusty bread</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$10</p>
              </div>
            </div>
          </div>

          {/* Plats Principaux / Mains */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 border-b-4 border-amber-700 pb-4">Plats Principaux (Mains)</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">🍗 Coq au Vin</h3>
                  <p className="text-gray-600">Chicken braised in Burgundy wine with mushrooms and pearl onions</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$28</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">🍝 Pappardelle al Ragù Bolognese</h3>
                  <p className="text-gray-600">Handmade ribbon pasta with slow-cooked meat sauce</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$26</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">🍚 Risotto ai Funghi Porcini</h3>
                  <p className="text-gray-600">Creamy arborio rice with porcini mushrooms and truffle oil</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$24</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">🦐 Branzino al Forno</h3>
                  <p className="text-gray-600">Mediterranean sea bass baked with lemon and herbs</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$32</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">Côte de Boeuf</h3>
                  <p className="text-gray-600">Prime bone-in rib steak with red wine reduction</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$38</p>
              </div>
            </div>
          </div>

          {/* Vins & Boissons */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 border-b-4 border-amber-700 pb-4">Vins & Boissons (Wines & Drinks)</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">🍷 French Wines</h3>
                  <p className="text-gray-600">Bordeaux, Burgundy, Loire Valley selections</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$8-60</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">🍷 Italian Wines</h3>
                  <p className="text-gray-600">Barolo, Chianti, Prosecco from premium producers</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$7-55</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">Espresso & Digestifs</h3>
                  <p className="text-gray-600">Italian espresso, Limoncello, Grappa</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$4-8</p>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 border-b-4 border-amber-700 pb-4">Desserts</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">✨ Crème Brûlée</h3>
                  <p className="text-gray-600">Classic French custard with caramelized sugar crust</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$8</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">Panna Cotta</h3>
                  <p className="text-gray-600">Silky Italian cream with berry coulis</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$9</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">Tiramisu</h3>
                  <p className="text-gray-600">Layers of mascarpone, espresso, and ladyfingers</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$8</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">Chocolate Soufflé</h3>
                  <p className="text-gray-600">Light, airy French soufflé with warm chocolate center</p>
                </div>
                <p className="text-2xl font-bold text-amber-700">$10</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-amber-50 p-8 rounded-lg mb-12">
            <p className="text-lg text-gray-700">
              <strong>📌 Please inform our team about allergies or dietary needs.</strong> We're happy to accommodate!
            </p>
          </div>

          {/* PDF Download */}
          <div className="text-center">
            <button className="btn-primary">
              📄 Download Full Menu (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to order?</h2>
          <p className="text-xl text-gray-600 mb-8">Make a reservation and experience the flavors yourself</p>
          <Link href="/reservations" className="btn-primary">
            👉 Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}
